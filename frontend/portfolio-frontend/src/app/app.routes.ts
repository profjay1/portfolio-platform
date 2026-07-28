import { Routes } from '@angular/router';

import { Home } from './features/home/home';

import { About } from './features/about/about';

import { Skills } from './features/skills/skills';

import { Projects } from './features/projects/projects';

import { Contact } from './features/contact/contact';

import { Resume } from './features/resume/resume';

import { ProjectDetails } from './features/project-details/project-details';

export const routes: Routes = [

{ path: '', component: Home },

{ path: 'about', component: About },

{ path: 'skills', component: Skills },

{ path: 'projects', component: Projects },

{ path: 'projects/:id', component: ProjectDetails },

{ path: 'resume', component: Resume },

{ path: 'contact', component: Contact },

{ path: '**', redirectTo: '' }

];
