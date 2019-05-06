# ETC MicroService built with ExpressJS

This ETC MicroService is built using ExpressJS and is deployed on AWS Elastic Beanstalk. The API reads the backend application data directly from data/etc.json file, however the architecture is easily modifiable to plug with backend MongoDB using Mongoose. For testing purposes, steps are also given to run this application locally using npm.

# Deploy to AWS Elastic Beanstalk

Install and get the Elastic Beanstalk Command Line Interface (EB CLI) running by referring this link: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html
 
### Refer document ETC_API_Deployed_To_AWS_EBS_Screenshots.docx for steps with screenshots.

Follow these steps for deploying to AWS  Elastic Beanstalk:

1. Go inside cloned project directory and execute below cmd. Keep default values.
	
	eb init

2. Create an environment by executing below cmd. 
	
	eb create etc-service
	
3. In case any changes are made, please commit the changes and then deploy / update the environment by executing below cmd. 
	
	eb deploy
 
4. Access the API using link like below.
	
	http://etc-service.tthmedhjhb.us-west-2.elasticbeanstalk.com/etc?inputDate=05/07/2019
	
5. EBS provisions all the required resources for running a node application in AWS. Go to AWS Console under Elastic Beanstalk service section and view the above created application.

# Getting started locally

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `node app.js` to start the local server
- Test using `curl http://localhost:8081/etc?inputDate=05/09/2019`
