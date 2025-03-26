#/usr/bin/env bash
export AWS_PROFILE=metricrealties
export AWS_REGION=us-east-1
project_name="console.metricrealties.com"
acm_domain_name="${project_name}"
stage_name="beta"
DISTRIBUTION="E2RWXMK3NCZI9T"
buildcode=true
s3_backup_folder_name="mr_admin_web"
cognito_sender_email="no-reply@metricrealties.com"
cognito_sender_user_name="Metricrealties Team"
domain="metricrealties.com"
while test $# -gt 0; do
         case "$1" in
              --profile)
                  shift
                  AWS_PROFILE=$1
                  shift
                  ;;
              --region)
                  shift
                  AWS_REGION=$1
                  shift
                  ;;
              --domain)
                  shift
                  domain=$1
                  shift
                  ;;
              --project)
                  shift
                  project_name=$1
                  shift
                  ;;
              --stage)
                  shift
                  stage_name=$1
                   shift
                  ;;
              --buildcode)
                  shift
                  buildcode=$1
                  shift
                  ;;
              --acm_domain_name)
                  shift
                  acm_domain_name=$1
                  shift
                  ;;
              --cf_distribution)
                  shift
                  DISTRIBUTION=$1
                  shift
                  ;;
              --s3_backup_folder_name)
                  shift
                  s3_backup_folder_name=$1
                  shift
                  ;;
              --cognito_sender_email)
                  shift
                  cognito_sender_email=$1
                  shift
                  ;;
              --cognito_sender_user_name)
                  shift
                  cognito_sender_user_name=$1
                  shift
                  ;;
              *)
                 echo "$1 is not a recognized flag!"
                 return 1;
                 ;;
        esac
done

set -x
clean=0
if [ "$*" == "clean" ]; then
		clean=1
fi

export AWS_ACCESS_KEY_ID=$(aws --profile $AWS_PROFILE configure get aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws --profile $AWS_PROFILE configure get aws_secret_access_key)
domain_to_host="${stage_name}.${project_name}"
hosted_zone_records=("${stage_name}.${project_name}")
if [ "$stage_name" == "prod" ]; then
  hosted_zone_records=("${project_name}")
  domain_to_host=${project_name}
fi

echo "Note: setting up files to aws keys, hope you ran setup.sh, else other commands to deploy will fail"
export CURRENT_PATH="$PWD/build"
export bucket_name=$domain_to_host

echo "running terraforms to create/update/refresh resources.."
terraform_path=deployment/terraforms
cd $terraform_path
echo "deleting local tf files"
rm -rf .terraform .terraform.lock.hcl out.tfplan terraform.tfplan
# convert array to serialized list
ARRAY_WITH_QUOTES=()
for ENTRY in "${hosted_zone_records[@]}";
do
  ARRAY_WITH_QUOTES+=( "\"${ENTRY}\"" )
done
TERRAFORM_LIST=$(IFS=,; echo [${ARRAY_WITH_QUOTES[*]}])
export s3_backup_folder="Terraforms/$stage_name.$s3_backup_folder_name/deploy/terraform.tfstate"
export s3_backup_bucket="metric-realties-infrastructure-and-configurations"
export s3_backup_region="us-east-1"

now_epoch=$(date +%s)
echo "copying existing state for backup"
aws s3 cp "s3://$s3_backup_bucket/$s3_backup_folder" "s3://$s3_backup_bucket/$s3_backup_folder.$now_epoch" --profile $AWS_PROFILE --region $s3_backup_region
echo "backup copied"

terraform init -backend=true -force-copy \
-input=false \
-backend-config "bucket=$s3_backup_bucket" \
-backend-config "key=$s3_backup_folder" \
-backend-config "region=$s3_backup_region"
# terraform init

terraform plan -var="bucket=$bucket_name" -var="stage=$stage_name" \
  -var="domain=$domain" -var="domain_to_host=$domain_to_host" -var="profile=$AWS_PROFILE" \
  -var="alternate_domains=$TERRAFORM_LIST" -var="region=$AWS_REGION" \
  -var="acm_domain_name=$acm_domain_name" -var="cognito_sender_email=$cognito_sender_email" -var="cognito_sender_user_name=$cognito_sender_user_name" \
  -var="s3_backup_bucket=$s3_backup_bucket" -var="s3_backup_folder=$s3_backup_folder" -var="s3_backup_region=$s3_backup_region"\
  -out terraform.tfplan -lock=false

terraform apply -lock=false terraform.tfplan

cd ../../
if [ "$buildcode" = true ] ; then
    echo 'building the code'
    cp "$terraform_path/assets/${stage_name}/configuration.json" src/assets/json/configuration.json
    rm -rf build
    rm -rf dist
    mkdir -p build
    npm install --legacy-peer-deps --force
    npm install --force && npm run build --prod
    cp -R dist/metric_realties_admin_dashboard_web/* build
    echo "build files being uploaded to aws as website"
    export builds_bucket_name=$bucket_name
    cp alter_api_key_in_config_json.py build
    cd build
    python3 alter_api_key_in_config_json.py ${stage_name}
    if [ $clean == 1 ]; then
        aws --profile $AWS_PROFILE s3 rm "s3://${builds_bucket_name}" --recursive
    fi

    aws --profile $AWS_PROFILE s3 sync . "s3://${builds_bucket_name}"
    echo "success: copied build files to s3"
    cd ..
    cp "$terraform_path/assets/beta/configuration.json" src/assets/json/configuration.json

    echo "putting back the beta config for local"
fi

aws cloudfront create-invalidation --distribution-id $DISTRIBUTION --paths "/*" /index.html /home --profile=$AWS_PROFILE
echo "Done"
