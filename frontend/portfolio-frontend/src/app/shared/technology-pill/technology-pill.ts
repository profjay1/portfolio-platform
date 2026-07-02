import { Component, input } from '@angular/core';

@Component({

selector: 'app-technology-pill',

imports: [],

templateUrl: './technology-pill.html',

styleUrl: './technology-pill.css'

})

export class TechnologyPill {

name = input.required<string>();

}
