import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/projects';

  getAllProjects(): Observable<readonly Project[]> {
    return this.http.get<readonly Project[]>(this.apiUrl);
  }

  getFeaturedProjects(): Observable<readonly Project[]> {
    return this.getAllProjects().pipe(
      map(projects => projects.slice(0, 3))
    );
  }

  getProjectById(id: number): Observable<Project> {
   return this.http.get<Project>(
    `${this.apiUrl}/${id}`
    );
  }
}
