\# Infrastructure Description



\## Overview



Udagram is a full-stack web application deployed on Amazon Web Services (AWS). The application allows users to register, log in, upload images, and view posts.



All AWS resources are deployed in the US East (N. Virginia) region (us-east-1).



\## Frontend - Amazon S3



The frontend is built using Angular and Ionic and hosted using Amazon S3 Static Website Hosting.



\- Bucket Name: udagram-frontend-shouq112311

\- Static Website Hosting: Enabled

\- Deployment: Automated through CircleCI



Frontend URL:

http://udagram-frontend-shouq112311.s3-website-us-east-1.amazonaws.com



\## Backend - AWS Elastic Beanstalk



The backend is a REST API developed using Node.js, Express, and TypeScript.



\- Application Name: udagram-api

\- Environment Name: Udagram-api-env

\- Platform: Node.js 22

\- Operating System: Amazon Linux 2023

\- EC2 Instance Type: t3.micro

\- Deployment: Automated through CircleCI



Backend URL:

http://udagram-api-env.eba-tcpqvm3m.us-east-1.elasticbeanstalk.com



\## Database - Amazon RDS



Amazon RDS provides a managed PostgreSQL database for the application.



\- Database Instance: udagram-db

\- Database Engine: PostgreSQL

\- Instance Class: db.t4g.micro

\- Storage: 20 GiB



The database stores user accounts and feed information. The backend connects to the database using environment variables and SSL encryption.



\## Media Storage - Amazon S3



A separate S3 bucket is used to store images uploaded by users.



\- Bucket Name: udagram-media-shouq112311

\- Access: Managed through IAM permissions

\- Image Access: S3 signed URLs

\- CORS: Configured to support frontend requests



\## Security and Configuration



\- Sensitive credentials are managed through environment variables.

\- AWS credentials are stored in CircleCI Environment Variables.

\- IAM roles provide access to AWS resources.

\- JWT is used for user authentication.

\- User passwords are hashed using bcrypt.

\- Database connections use SSL encryption.



\## Infrastructure Status



The frontend and backend have been successfully deployed and tested.



User authentication, image uploads, and feed retrieval have been verified.



Elastic Beanstalk currently reports an Auto Scaling IAM permission warning. However, the backend API responds successfully, and the application is operational.



\## Architecture Diagram



!\[Infrastructure Architecture](architecture-diagram.png)



\## Infrastructure Screenshots



\- \[S3 Static Website Hosting](../screenshots/s3-static-website.png)

\- \[S3 Media Storage](../screenshots/s3-media-bucket.png)

\- \[Elastic Beanstalk](../screenshots/elastic-beanstalk.png)

\- \[RDS Database](../screenshots/rds-database.png)

\- \[Deployed Application](../screenshots/udagram-website.png)



