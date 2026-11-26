\# CI/CD Pipeline Process



\## Overview



The Udagram application uses CircleCI to automate the continuous integration and continuous deployment (CI/CD) process.



The pipeline is triggered automatically when changes are pushed to the GitHub repository.



\## Source Control



\- Platform: GitHub

\- Repository: Udagram-Deployment

\- Deployment Branch: main

\- Configuration File: .circleci/config.yml



\## Pipeline Stages



\### 1. Frontend Build and Testing



The frontend job uses Node.js 16.20.



The following steps are executed:



1\. Checkout the source code.

2\. Install Google Chrome.

3\. Install frontend dependencies.

4\. Run automated frontend tests using ChromeHeadless.

5\. Build the Angular application for production.

6\. Save the build artifacts to the CircleCI workspace.



Test Results: 13 tests passed.



\### 2. Backend Build and Testing



The backend job uses Node.js 22.



The following steps are executed:



1\. Checkout the source code.

2\. Install backend dependencies.

3\. Compile the TypeScript source code.

4\. Run automated authentication tests using Mocha and Chai.

5\. Save the build artifacts to the CircleCI workspace.



Test Results: 6 tests passed.



\### 3. AWS Credentials Verification



After both build jobs complete successfully, the pipeline verifies AWS credentials using:



&#x20;   aws sts get-caller-identity



Deployment proceeds only if the verification succeeds.



\### 4. Frontend Deployment



The frontend deployment job performs the following steps:



1\. Retrieve the frontend build artifacts.

2\. Install AWS CLI.

3\. Upload the production build to the Amazon S3 bucket.

4\. Update the website entry point.



The frontend is hosted using Amazon S3 Static Website Hosting.



\### 5. Backend Deployment



The backend deployment job performs the following steps:



1\. Retrieve the backend build artifacts.

2\. Install AWS CLI.

3\. Install Elastic Beanstalk CLI.

4\. Package the compiled backend into a ZIP file.

5\. Deploy the application to Udagram-api-env.



\## Pipeline Workflow



The frontend and backend build jobs run in parallel.



Both jobs must complete successfully before AWS credentials are verified.



After verification, the frontend and backend deployment jobs run in parallel.



Deployment jobs are restricted to the main branch.



\## Environment Variables



AWS credentials are securely configured in CircleCI:



\- AWS\_ACCESS\_KEY\_ID

\- AWS\_SECRET\_ACCESS\_KEY

\- AWS\_SESSION\_TOKEN

\- AWS\_DEFAULT\_REGION



Sensitive credential values are not stored in the source code.



\## Automated Testing Results



| Component | Passed | Failed |

|-----------|--------|--------|

| Frontend  | 13     | 0      |

| Backend   | 6      | 0      |

| Total     | 19     | 0      |



\## Pipeline Results



\- Pipeline Number: 8

\- Commit: 1789c68

\- Status: Success

\- Frontend Deployment: Successful

\- Backend Deployment: Successful



The deployed application was also manually verified after resolving a temporary backend connectivity issue.



\## Pipeline Diagram



!\[CI/CD Pipeline](pipeline-diagram.png)



\## Pipeline Screenshots



\- \[Successful Pipeline](../screenshots/pipeline-success.png)

\- \[Frontend Tests](../screenshots/frontend-tests.png)

\- \[Backend Tests](../screenshots/backend-tests.png)

\- \[Environment Variables](../screenshots/circleci-environment-variables.png)



