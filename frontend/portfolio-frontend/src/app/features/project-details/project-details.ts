import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project';
import { Button } from '../../shared/button/button';
import { TechnologyPill } from '../../shared/technology-pill/technology-pill';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [AsyncPipe, Button, TechnologyPill],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly projectService = inject(ProjectService);

  private readonly projectId =
    Number(this.route.snapshot.paramMap.get('id'));

  readonly project$ =
    this.projectService.getProjectById(this.projectId);

  returnToProjects(): void {
    this.router.navigate(['/projects']);
  }
}
