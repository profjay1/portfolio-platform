import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private readonly router: Router) {}

  viewProjects(): void {
    this.router.navigate(['/projects']);
  }

  viewResume(): void {
    this.router.navigate(['/resume']);
  }
}
