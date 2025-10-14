import { Component } from '@angular/core';
import { getAllProjects, getFeaturedProjects, getFilteredProjects } from 'src/assets/projects';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  // directives: [ProjectCardComponent],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

    proj_list;
    search_val;

    fa_search_icon = faArrowAltCircleRight;

    constructor() {
        this.proj_list = getFeaturedProjects();
        this.search_val = "";
    }

    // parentProject = {}

    // updateProject() {
    //     this.parentProject = {};
    // }

    tagClick(tag: any) {
        this.proj_list = getFilteredProjects([tag]);
        this.search_val = tag;
    }

    search(value: string) {
        this.proj_list = getFilteredProjects(value.replace(',', ' ').split(' '))
    }

    search_key_press(e: any, data: string) {
        if((e && e.keyCode == 13) || e == 0) {
            console.log('detected enter press');
            this.search(data);
          }
    }



}
