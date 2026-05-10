Requirements Analysis
System Name

Professional Portfolio Platform

1. User Types
Visitor

A visitor is anyone who comes to the public portfolio website. This may include a recruiter, hiring manager, client, collaborator, or potential employer.

Admin

The admin is the portfolio owner. The admin can log in and manage projects, skills, case studies, and contact messages.

2. Functional Requirements (Functional requirements describe what the system must do.)
Public Website Requirements

FR-001: The system shall display a professional homepage.

FR-002: The system shall display an About section introducing the portfolio owner.

FR-003: The system shall display a Skills section grouped by technology category.

FR-004: The system shall display a list of projects.

FR-005: The system shall allow visitors to view the details of each project.

FR-006: The system shall provide a resume download link.

FR-007: The system shall provide a contact form.

FR-008: The system shall display links to GitHub, LinkedIn, and email.

FR-009: The system shall display featured projects on the homepage.

FR-010: The system shall display project case studies using a clear structure: problem, solution, tools, features, challenges, and outcome.

Admin Requirements

FR-011: The system shall allow the admin to log in securely.

FR-012: The system shall allow the admin to create a project.

FR-013: The system shall allow the admin to edit a project.

FR-014: The system shall allow the admin to delete a project.

FR-015: The system shall allow the admin to mark a project as featured.

FR-016: The system shall allow the admin to manage project technologies.

FR-017: The system shall allow the admin to view contact form submissions.

FR-018: The system shall allow the admin to update project GitHub links and live demo links.

FR-019: The system shall allow the admin to add project screenshots or image URLs.

FR-020: The system shall allow the admin to publish or unpublish projects.

3. Non-Functional Requirements (Non-functional requirements describe how well the system must work.)

NFR-001: The website shall be responsive on desktop, tablet, and mobile devices.

NFR-002: Public pages shall load quickly and avoid unnecessary delay.

NFR-003: Admin routes shall be protected from unauthorized access.

NFR-004: Passwords shall never be stored as plain text.

NFR-005: Backend APIs shall validate user input before saving data.

NFR-006: The system shall use PostgreSQL as the database.

NFR-007: The system shall be containerized using Docker.

NFR-008: The project shall include an automated build and test workflow using GitHub Actions.

NFR-009: The application shall be deployable to AWS.

NFR-010: The codebase shall include clear documentation.

NFR-011: The backend shall expose health check endpoints.

NFR-012: The project shall include meaningful error handling.

NFR-013: The application shall use environment variables for sensitive configuration.

NFR-014: The frontend shall provide a clean and professional user experience.

NFR-015: The system shall be easy to maintain and extend.

4. User Stories
Visitor Stories

US-001: As a visitor, I want to see a clear homepage so that I can quickly understand who the portfolio owner is.

US-002: As a recruiter, I want to view technical skills so that I can assess whether the candidate matches the role.

US-003: As a hiring manager, I want to view detailed projects so that I can evaluate real engineering ability.

US-004: As a visitor, I want to download the resume so that I can review the candidate’s background offline.

US-005: As a visitor, I want to submit a contact form so that I can reach the portfolio owner.

US-006: As a visitor, I want to access GitHub and LinkedIn links so that I can verify professional activity.

US-007: As a visitor, I want to view project case studies so that I can understand the problem solved, the technologies used, and the final outcome.

Admin Stories

US-008: As an admin, I want to log in securely so that only I can manage portfolio content.

US-009: As an admin, I want to create new projects so that I can add new work to my portfolio.

US-010: As an admin, I want to edit existing projects so that I can keep my portfolio updated.

US-011: As an admin, I want to delete old projects so that the portfolio stays clean and relevant.

US-012: As an admin, I want to mark selected projects as featured so that my best work appears first.

US-013: As an admin, I want to view contact messages so that I can respond to opportunities.

US-014: As an admin, I want to publish or unpublish a project so that I can control what visitors see.

5. Acceptance Criteria
US-001: Homepage

The homepage is complete when:

It displays the portfolio owner’s name.
It displays a professional headline.
It displays a short summary of expertise.
It has a button to view projects.
It has a button to contact the owner.
It displays featured projects.
It is responsive on desktop and mobile.
US-003: Project Details

The project details page is complete when:

A visitor can open a project from the project list.
The page displays the project title.
The page displays the problem statement.
The page displays the solution summary.
The page displays technologies used.
The page displays key features.
The page displays challenges and lessons learned.
The page displays screenshots or placeholders.
The page displays a GitHub link if available.
The page displays a live demo link if available.
US-005: Contact Form

The contact form is complete when:

A visitor can enter name, email, subject, and message.
The system validates required fields.
The system validates email format.
The message is saved successfully.
The visitor receives a success message after submission.
Invalid input displays a clear error message.
US-008: Admin Login

Admin login is complete when:

The admin can enter email and password.
The system validates login credentials.
Invalid login shows an error message.
Successful login redirects to the admin dashboard.
Protected admin pages cannot be accessed without login.
US-009: Create Project

Create project is complete when:

The admin can enter project title.
The admin can enter project summary.
The admin can enter problem statement.
The admin can enter solution summary.
The admin can select technologies.
The admin can add GitHub link.
The admin can add live demo link.
The admin can mark the project as featured.
The admin can save the project.
The saved project appears on the public project list if published.
6. Product Backlog
Sprint 1: Foundation

PB-001: Create project documentation.

PB-002: Create Angular frontend project.

PB-003: Create Spring Boot backend project.

PB-004: Connect backend to PostgreSQL.

PB-005: Create GitHub repository structure.

PB-006: Create README file.

Sprint 2: Public Website

PB-007: Build homepage.

PB-008: Build About section.

PB-009: Build Skills section.

PB-010: Build project list page.

PB-011: Build project details page.

PB-012: Build contact page.

PB-013: Add resume download section.

Sprint 3: Backend API

PB-014: Create Project entity.

PB-015: Create Technology entity.

PB-016: Create ContactMessage entity.

PB-017: Create Project REST API.

PB-018: Create Contact REST API.

PB-019: Add backend validation.

PB-020: Add error handling.

Sprint 4: Admin Dashboard

PB-021: Create admin login page.

PB-022: Add authentication.

PB-023: Build admin dashboard.

PB-024: Build create project form.

PB-025: Build edit project form.

PB-026: Build delete project feature.

PB-027: Build contact message viewing page.

Sprint 5: Testing

PB-028: Add backend unit tests.

PB-029: Add backend integration tests.

PB-030: Add frontend form validation tests.

PB-031: Test API endpoints.

PB-032: Perform manual user acceptance testing.

Sprint 6: DevOps and Deployment

PB-033: Add Dockerfile for backend.

PB-034: Add Dockerfile for frontend.

PB-035: Add Docker Compose.

PB-036: Add GitHub Actions workflow.

PB-037: Deploy backend.

PB-038: Deploy frontend.

PB-039: Add production documentation.

