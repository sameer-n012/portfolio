import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { getAllExperiences } from 'src/assets/experiences';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
    experiences = getAllExperiences()
        .filter((e) => e.featured)
        .sort((a, b) => Number(a.time > b.time) - Number(b.time > a.time))
        .reverse();
    active = this.experiences[0]._id.toString();

    parseDescription(desc: string) {
        return desc;
    }
}
