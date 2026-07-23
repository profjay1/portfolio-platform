import { Component, input, output } from '@angular/core';

import { Project } from '../../models/project';

import { TechnologyPill } from '../technology-pill/technology-pill';

import { Button } from '../button/button';

@Component({

selector: 'app-project-card',

imports: [TechnologyPill, Button],

templateUrl: './project-card.html',

styleUrl: './project-card.css'

})

export class ProjectCard {

project = input.required<Project>();

viewDetails = output<number>();

onViewDetails(): void {

this.viewDetails.emit(this.project().id);

}

}
