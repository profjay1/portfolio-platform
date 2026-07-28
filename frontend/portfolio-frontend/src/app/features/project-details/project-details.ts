import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly projectId = this.route.snapshot.paramMap.get('id');

  returnToProjects(): void {
    this.router.navigate(['/projects']);
  }
}
