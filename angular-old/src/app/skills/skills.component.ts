import { Component } from '@angular/core';
import profileDetails from 'src/assets/profileDetails';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
    profileDetails = profileDetails;

    skillsArr = this.feedSkills(4)

    range(start: number, stop: number, step?: number) {
        if (step == undefined || step == null) {
            step = 1;
        }

        start = Math.floor(start);
        stop = Math.floor(stop);
        step = Math.floor(step);

        return new Array((stop - start) / step)
            .fill(0)
            .map((n, index) => start + step! * index);
    }

    feedSkills(skillsPerCol: number) {
        let n = profileDetails['skills'].length;

        let skills = Array<Array<string>>();
        for(let i = 0; i < Math.floor(n/skillsPerCol); i++) {
            skills.push(new Array<string>())
            for(let j = 0; j < n && j < skillsPerCol; j++) {
                skills[i].push(profileDetails['skills'][i*skillsPerCol + j])
            }
        }

        return skills;

    }
}
