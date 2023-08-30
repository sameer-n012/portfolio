import { Component, Input, EventEmitter, Output } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import profileDetails from 'src/assets/profileDetails';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})



export class ProjectCardComponent {

    @Input() project: any;
    @Output() tagClick = new EventEmitter<string>();
    faAngleRight = faAngleRight;
    profileDetails = profileDetails

    // constructor(project: Object) {
    //     project = project
    //     console.log(project);
    // }

    constructor() {

    }

    // updateProject() {
    //     this.project = {};
    // }

}


