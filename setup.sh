profile="metricrealties"
region="us-east-1"
sed -i 's/\r//' setup.sh
sed -i 's/\r//' deploy.sh
sed -i 's/\r//' deploy_to_beta.sh
sed -i 's/\r//' deploy_to_prod.sh
function configure_aws(){
	echo "Enter AWS Credentials:"
	aws configure --profile $profile
	echo "Enter Again:"
	aws configure --profile $profile
}
if command -v aws --version ; then
	echo "AWS CLI already present"
	configure_aws
else
	echo "Installing AWS CLI"
	apt-get install awscli
	echo "Installation Done"
	configure_aws
fi