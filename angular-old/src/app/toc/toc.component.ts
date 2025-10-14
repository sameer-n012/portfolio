import { Component } from '@angular/core';

@Component({
    selector: 'app-toc',
    templateUrl: './toc.component.html',
    styleUrls: ['./toc.component.css'],
})
export class TocComponent {
    sections = [
        {name: 'Skills', divID: 'skills-div'},
        {name: 'Experience', divID: 'experience-div'},
        {name: 'Projects', divID: 'projects-div'},
    ];

    constructor() {
        return;
    }

    public scrollTo(elementId: string) {
        if (elementId.startsWith('#')) {
            elementId = elementId.substring(1);
        }

        let el = document.getElementById(elementId);
        if (el != undefined && el != null) {
            console.log('Scrolling to table of contents');
            el.scrollIntoView();
        } else {
            console.log('Cannot scroll to non-existing element #' + elementId);
        }
    }
}
