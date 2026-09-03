package com.portfolio.portfolio_backend.project;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final List<Project> projects = List.of(
            new Project(
                    1L,
                    "Portfolio Platform",
                    "A full-stack portfolio content-management platform.",
                    List.of(
                            "Angular",
                            "Spring Boot",
                            "PostgreSQL",
                            "Docker"
                    ),
                    "in-progress"
            ),

            new Project(
                    2L,
                    "Project Management System",
                    "An enterprise-style project management application.",
                    List.of(
                            "Angular",
                            "Spring Boot",
                            "JWT",
                            "PostgreSQL"
                    ),
                    "planned"
            ),

            new Project(
                    3L,
                    "Cloud Deployment Pipeline",
                    "A DevOps project demonstrating automated deployment.",
                    List.of(
                            "Docker",
                            "GitHub Actions",
                            "AWS",
                            "Nginx"
                    ),
                    "planned"
            )
    );

    public List<Project> getAllProjects() {
        return projects;
    }

    public Optional<Project> getProjectById(Long id) {
        return projects.stream()
                .filter(project -> project.id().equals(id))
                .findFirst();
    }
}
