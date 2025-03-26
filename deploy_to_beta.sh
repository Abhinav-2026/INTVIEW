bash deploy.sh --profile metricrealties --region "us-east-1" \
--domain "metricrealties.com" --project "console.metricrealties.com" \
--stage beta --buildcode true --s3_backup_folder_name "mr_admin_web" \
--acm_domain_name "metricrealties.com" --cf_distribution "EURADDYI1WZB2" \
--cognito_sender_email "no-reply@metricrealties.com" --cognito_sender_user_name "Metricrealties Team";