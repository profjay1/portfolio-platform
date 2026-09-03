import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { Button } from '../../shared/button/button';
import { ProjectCard } from '../../shared/project-card/project-card';
import { SectionHeader } from '../../shared/section-header/section-header';
import { inject } from '@angular/core';
import { ProjectService } from '../../services/project';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, Button, ProjectCard, SectionHeader],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  private readonly projectService = inject(ProjectService);
  private readonly router = inject(Router);

  readonly featuredProjects$ =
    this.projectService.getFeaturedProjects();

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
