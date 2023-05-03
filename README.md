# Getting Started:

To start the application, follow these steps:

Clone the repository using the following command:
> git clone https://github.com/tinhlesc/docker-express-angular-postgre

Navigate to the project directory using the following command:
> cd docker-express-angular-postgre

Run the following command to start the Docker containers:
> docker-compose up -d

This command will start the following containers:
  * A PostgreSQL database
  * An ExpressJS server
  * An AngularJS client

Once the containers are up and running, you can access the application by navigating to **http://localhost:10002** in your web browser.

Note: If you want to rebuild the Docker containers:
```docker-compose up --build```
