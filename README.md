# ETC MicroService built with ExpressJS

This ETC MicroService is built using ExpressJS and is deployed on AWS Elastic Beanstalk. For testing purposes, steps are also given to run this application locally using npm.

# Deploy to AWS Elastic Beanstalk

Install and get the Elastic Beanstalk Command Line Interface (EB CLI) running by referring this link: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html
 
###Refer document API_Deployed_To_AWS_EBS_Screenshots.docx for steps with screenshots.

Follow these steps for deploying to AWS  Elastic Beanstalk:

1. Go inside cloned project directory execute below cmd. Keep default values.
	
	eb init

2. Create an environment by executing below cmd. 
	
	eb create etc-service
	
3. Deploy / Update the environment by executing below cmd. 
	
	eb deploy
 
4. Access the API using link like below.
	
	http://etc-service.tthmedhjhb.us-west-2.elasticbeanstalk.com/etc?inputDate=05/07/2018
	
5. EBS provisions all the required resources for running a node application in AWS. Go to AWS Console under Elastic Beanstalk service section and view the above created application.

# Getting started locally

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `node app.js` to start the local server
- Test using `curl http://localhost:8081/etc?inputDate=05/09/2018`