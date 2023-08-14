import { Component } from '@angular/core';
import { getAllProjects, getFilteredProjects } from 'src/assets/projects';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

    getAllProjects = getAllProjects;
    getFilteredProjects = getFilteredProjects;

    // parentProject = {}

    // updateProject() {
    //     this.parentProject = {};
    // }



}
