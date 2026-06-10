
Development Environment Setup

1. Required Tools
Core Development
Java 21
Node.js LTS
npm
Angular CLI
Maven
Git
VS Code or IntelliJ IDEA
Database
PostgreSQL
API Testing
Postman or Bruno
DevOps
Docker Desktop
Cloud
AWS account later

2. Verify Java Installation

Run:

java -version

Expected:
Java 21 or newer.

Example:

openjdk version "21"

3. Verify Maven

Run:

mvn -version

Expected:
Apache Maven installed successfully.

4. Verify Node.js

Run:

node -v

Expected:
Node.js LTS version.

Example:

v22.x.x

5. Verify npm

Run:

npm -v

Expected:
npm installed successfully.

6. Install Angular CLI

Run:

npm install -g @angular/cli

Verify installation:

ng version

Expected:
Angular CLI installed successfully.

7. Verify Git

Run:

git --version

8. Verify Docker

Run:

docker --version

Expected:
Docker installed successfully.

9. Initialize Angular Frontend

Now go into frontend folder.

Run:

cd frontend

Create Angular application:

ng new portfolio-frontend

Angular will ask questions.

Use these answers:

Would you like to add Angular routing?
YES

Which stylesheet format?
CSS

After installation finishes:

Enter the project:

cd portfolio-frontend

Start Angular app:

ng serve

Expected:

Application available at:

http://localhost:4200

Open browser and confirm Angular welcome page appears.

10. Understand What Angular Just Created

Angular created a professional frontend structure.

Main folders:

src/
Contains frontend application code.

src/app/
Contains Angular components.

src/assets/
Contains images and static assets.

src/styles.css
Global application styles.

angular.json
Angular configuration.

package.json
Frontend dependencies.

node_modules/
Installed libraries.

11. Stop Angular Server

Press:

CTRL + C

12. Initialize Spring Boot Backend

Go back to project root.

Example:

cd ../../

Now enter backend folder:

cd backend

13. Create Spring Boot Project

Go to:

Spring Initializr

Use these settings:

Project:
Maven

Language:
Java

Spring Boot:
Latest stable version

Project Metadata:

Group:
com.portfolio

Artifact:
portfolio-backend

Name:
portfolio-backend

Packaging:
Jar

Java:
21

Dependencies:

Spring Web
Spring Data JPA
PostgreSQL Driver
Validation
Spring Security
Lombok
Spring Boot DevTools

Generate project.

Download ZIP.

Extract it into:

portfolio-platform/backend/

Result:

portfolio-platform/backend/portfolio-backend

14. Open Backend in IDE

Open backend project in:

IntelliJ IDEA
or
VS Code
15. Run Spring Boot Application

Inside backend project root run:

mvn spring-boot:run

Expected:

Tomcat started on port 8080

Open browser:

http://localhost:8080

You may see:
Whitelabel Error Page

That is fine.

It means Spring Boot is running successfully.

16. Understand Spring Boot Structure

Important folders:

src/main/java
Java source code.

src/main/resources
Configuration files.

application.properties
Application configuration.

pom.xml
Project dependencies.

17. Create Initial GitHub Repository

Go to:

GitHub

Create repository:

portfolio-platform

DO NOT initialize with README.

18. Connect Local Project to GitHub

Inside project root run:

git remote add origin YOUR_GITHUB_REPO_URL

Example:

git remote add origin https://github.com/yourname/portfolio-platform.git

Push project:

git branch -M main

git push -u origin main

