# ETC MicroService built with ExpressJS

This ETC MicroService is built using ExpressJS and is deployed on AWS Elastic Beanstalk.

# Getting started locally

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `node app.js` to start the local server

# Deploy to AWS Elastic Beanstalk

Install and get the Elastic Beanstalk Command Line Interface (EB CLI) running by referring this link: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html
 
###Refer document API_Deployed_To_AWS_Lambda_Screenshots.docx for steps with screenshots.

Follow these steps for deploying to AWS  Elastic Beanstalk:

1. Go inside cloned project directory execute below cmd. Keep default values.
	
	eb init

2. Create an environment by executing below cmd. 
	
	eb create etc-service
	
3. Deploy the environment by executing below cmd. 
	
	eb deploy
 
4. Deploy a Cloudformation stack from the SAM template.
	
	aws cloudformation deploy --template-file target/output-sam.yaml --stack-name ltc-aws-lambda-service --capabilities CAPABILITY_IAM
	
5. Describe the stack, which will display the URL of the API in the outputs.
	
	aws cloudformation describe-stacks --stack-name ltc-aws-lambda-service
	
6. SAM provisions all the required resources for running a lambda function in AWS. Go to AWS Lambda Console and verify the created lambda application. Go to AWS API Gateway Console and verify the created API.

7. The API can be accessed with URL like below:
	
	https://d43p353ph8.execute-api.us-west-2.amazonaws.com/Prod/ltc?inputDate=05/09/2018	


# Run locally

To build and run from a packaged jar locally:

    mvn spring-boot:run

or 

    mvn clean package -Dboot
    java -jar target/LTCAWSLambdaService-1.0.0-SNAPSHOT.jar

# Deploy to Docker locally

Please install and run docker locally if not already done. To build the image, first build the application, then build the docker image

    mvn package -Dboot
    docker build -t ltc-aws-lambda-service .
    
## Run on docker

    docker run --name ltc-aws-lambda-service -p 9092:9092 -d ltc-aws-lambda-service
    
# Test

    curl http://localhost:9092/ltc?inputDate=05/09/2018
