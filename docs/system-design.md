System Design

High-Level Architecture
Frontend Layer

The frontend will be built using Angular.

Responsibilities:

Display UI pages
Handle routing
Call backend APIs
Handle forms and validation
Manage user interaction
Handle authentication tokens later
Backend Layer

The backend will be built using Spring Boot.

Responsibilities:

Expose REST APIs
Handle business logic
Validate requests
Authenticate admin users
Interact with database
Return JSON responses
Database Layer

The database will use PostgreSQL.

Responsibilities:

Store projects
Store technologies
Store contact messages
Store admin user data
Infrastructure Layer

Infrastructure tools:

Docker
Docker Compose
GitHub Actions
AWS

Responsibilities:

Containerization
CI/CD
Deployment
Hosting
Environment management
4. Architecture Style

Architecture Style

The system will follow a layered architecture.

Frontend Layer
↓
Controller Layer
↓
Service Layer
↓
Repository Layer
↓
Database

Layer Responsibilities
Controller Layer

Handles HTTP requests and responses.

Service Layer

Contains business logic.

Repository Layer

Handles database access.

Database Layer

Stores application data.

This architecture improves:

Maintainability
Scalability
Testing
Separation of concerns
5. Main System Modules

Main System Modules
Public Website Module

Features:

Homepage
About section
Skills section
Project list
Project details
Contact page
Project Management Module

Features:

Create project
Edit project
Delete project
Publish/unpublish project
Mark project as featured
Authentication Module

Features:

Admin login
Route protection
Session/token management
Contact Module

Features:

Contact form
Message storage
Admin message viewing
6. Database Design

Now we define the core entities.

Database Design
Main Entities
Project

Purpose:
Stores portfolio projects.

Fields:

id
title
summary
problemStatement
solutionSummary
features
githubUrl
liveDemoUrl
imageUrl
featured
published
createdAt
Technology

Purpose:
Stores technologies used in projects.

Fields:

id
name
category
ContactMessage

Purpose:
Stores messages submitted through the contact form.

Fields:

id
name
email
subject
message
createdAt
AdminUser

Purpose:
Stores admin authentication data.

Fields:

id
email
password
role
7. Entity Relationships

Entity Relationships

One Project can use many Technologies.

One Technology can belong to many Projects.

Relationship:
Many-to-Many

A ContactMessage belongs independently to the system.

An AdminUser manages projects and messages.

8. API Design Planning

API Design Planning
Project APIs

GET /api/projects
GET /api/projects/{id}
POST /api/projects
PUT /api/projects/{id}
DELETE /api/projects/{id}

Contact APIs

POST /api/contact
GET /api/contact

Authentication APIs

POST /api/auth/login

9. Frontend Pages Planning

Frontend Pages
Public Pages

/
Homepage

/about
About page

/projects
Project list page

/projects/:id
Project details page

/contact
Contact page

Admin Pages

/admin/login
Admin login page

/admin/dashboard
Dashboard page

/admin/projects/create
Create project page

/admin/projects/edit/:id
Edit project page

/admin/messages
View contact messages page

10. Backend Package Structure

Backend Package Structure

com.portfolio.backend

├── controller
├── service
├── repository
├── entity
├── dto
├── security
├── config
├── exception

Package Responsibilities

controller:
Handles REST endpoints.

service:
Contains business logic.

repository:
Handles database operations.

entity:
Contains JPA entities.

dto:
Contains request and response objects.

security:
Contains authentication configuration.

config:
Contains application configuration.

exception:
Contains custom exception handling.

11. Frontend Structure Planning

Frontend Structure

src/app

├── core
├── shared
├── public
├── admin
├── services
├── models
├── guards

Folder Responsibilities

core:
Core application configuration.

shared:
Reusable components.

public:
Public-facing pages.

admin:
Admin dashboard pages.

services:
HTTP/API services.

models:
TypeScript interfaces.

guards:
Route protection logic.

12. Deployment Planning

Deployment Planning
Frontend Deployment

Angular frontend will later be deployed using:

Docker
Nginx
AWS
Backend Deployment

Spring Boot backend will later be deployed using:

Docker
AWS ECS or Elastic Beanstalk
Database Deployment

PostgreSQL database will later be hosted using:

Amazon RDS
13. Security Planning

Security Planning

Security goals:

Protect admin routes
Encrypt passwords
Validate API requests
Prevent unauthorized access
Use HTTPS in production
Use environment variables for secrets

Future implementation:

Spring Security
JWT authentication
