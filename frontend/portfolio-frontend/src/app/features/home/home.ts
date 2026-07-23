import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { Button } from '../../shared/button/button';
import { ProjectCard } from '../../shared/project-card/project-card';
import { SectionHeader } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-home',
  imports: [Button, ProjectCard, SectionHeader],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private readonly router: Router) {}

  featuredProjects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Platform',
      summary:
        'A full-stack portfolio content-management platform built with Angular, Spring Boot, PostgreSQL, Docker, GitHub Actions, and AWS.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Project Management System',
      summary:
        'An enterprise-style application for managing projects, tasks, teams, permissions, and delivery progress.',
      technologies: ['Angular', 'Spring Boot', 'JWT', 'PostgreSQL'],
      status: 'planned'
    },
    {
      id: 3,
      title: 'Cloud Deployment Pipeline',
      summary:
        'A DevOps project demonstrating containerization, automated testing, continuous delivery, and AWS deployment.',
      technologies: ['Docker', 'GitHub Actions', 'AWS', 'Nginx'],
      status: 'planned'
    }
  ];

  viewProjects(): void {
    this.router.navigate(['/projects']);
  }

  viewResume(): void {
    this.router.navigate(['/resume']);
  }

  openProject(projectId: number): void {
    this.router.navigate(['/projects', projectId]);
  }
}
