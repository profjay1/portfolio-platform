import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project';
import { ProjectCard } from '../../shared/project-card/project-card';
import { SectionHeader } from '../../shared/section-header/section-header';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [AsyncPipe, ProjectCard, SectionHeader],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  private readonly projectService = inject(ProjectService);
  private readonly router = inject(Router);

  readonly projects$ = this.projectService.getAllProjects();

  openProject(projectId: number): void {
    this.router.navigate(['/projects', projectId]);
  }
}
