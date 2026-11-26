\# Application Dependencies



\## Overview



Udagram is a full-stack application that uses Angular and Ionic for the frontend, Node.js and Express for the backend, and PostgreSQL for database management.



\## Frontend Dependencies



\- Node.js 16.20

\- Angular 8.2.14

\- Angular CLI 8.3.25

\- Ionic 4

\- TypeScript

\- RxJS



\### Frontend Testing



\- Jasmine

\- Karma

\- ChromeHeadless



The frontend includes 13 automated tests that run successfully in the CircleCI pipeline.



\## Backend Dependencies



\- Node.js 22

\- Express

\- TypeScript 4.2.3

\- Sequelize 6

\- Sequelize-TypeScript

\- PostgreSQL Driver (pg)

\- AWS SDK 2.1692.0

\- JSON Web Token (jsonwebtoken)

\- bcryptjs

\- dotenv

\- cors

\- body-parser

\- email-validator



\### Backend Testing



\- Mocha

\- Chai

\- Chai HTTP



The backend includes six automated authentication tests covering:



\- Login without an email.

\- Login with an invalid email.

\- Login without a password.

\- Registration with an invalid email.

\- Registration without a password.

\- Token verification without authorization.



All six tests pass locally and in CircleCI.



\## Database



\- Amazon RDS

\- PostgreSQL

\- SSL database connection



\## Deployment Tools



\- Git

\- GitHub

\- CircleCI

\- AWS CLI

\- Elastic Beanstalk CLI

\- npm



\## Environment Variables



The backend uses the following environment variables:



\- POSTGRES\_USERNAME

\- POSTGRES\_PASSWORD

\- POSTGRES\_DB

\- POSTGRES\_HOST

\- AWS\_REGION

\- AWS\_PROFILE

\- AWS\_BUCKET

\- JWT\_SECRET

\- URL



Sensitive values are managed outside the source code.



\## Installation



Install frontend dependencies:



&#x20;   npm run frontend:install



Install backend dependencies:



&#x20;   npm run api:install



\## Build



Build the frontend:



&#x20;   npm run frontend:build



Build the backend:



&#x20;   npm run api:build



\## Testing



The frontend uses Node.js 16, while the backend uses Node.js 22.



CircleCI uses separate Docker environments to support both versions.



Total automated tests: 19



\- Frontend: 13 passed.

\- Backend: 6 passed.

\- Failed tests: 0.



\## Compatibility Notes



The frontend uses legacy Angular and Ionic versions. Separate Node.js environments are maintained to ensure compatibility.



AWS SDK v2 is a legacy dependency and should be upgraded in future maintenance.



