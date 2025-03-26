import boto3
from io import BytesIO
import zipfile
import os
import traceback

bucket = os.environ["s3_bucket_name"]
file_path = os.environ['file_path']
mandatory_files = os.environ['mandatory_files']
if mandatory_files.find(','):
  mandatory_files = mandatory_files.split(',')
else:
  mandatory_files = [mandatory_files.split]
try:
  s3 = boto3.resource('s3',
                      aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
                      aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
                      )
  # s3 = boto3.resource("s3", region_name=region)
  object = s3.Object(bucket_name=bucket, key=file_path)
  buffer = BytesIO(object.get()["Body"].read())
  z = zipfile.ZipFile(buffer)
  list_of_files = [filename for filename in z.namelist()]
  for file in mandatory_files:
    if list_of_files.count(file) <= 0:
      raise Exception(f'"{file}" did not found in the given s3 bucket')
  print("all the files uploaded successfully")
except Exception as e:
  print(traceback.format_exc())