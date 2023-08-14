import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';
import * as $ from 'jquery';
import profileDetails from 'src/assets/profileDetails';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{

    imgpath = 'assets/images/' + profileDetails['profileImgName'];

    socials = [
        {icon: faEnvelope, url: 'mailto:' + profileDetails['email']},
        {icon: faLinkedin, url: profileDetails['linkedinURL']},
        {icon: faGithub, url: profileDetails['githubURL']}
    ]

    resumeURL = profileDetails['resumeURL'];

    constructor() {
        return;
    }

    ngOnInit() {
        // interval(1000).pipe(takeWhile(() => !stop))
        //     .subscribe(() => {
        //         console.log("hi")
        //     });

        $(window).on('load resize scroll', function () {
            $('#scroll-down-chevron').each(function () {
                var mainHeight = $('#main').height() || 0;

                var windowTop = $(window).scrollTop();
                var elementTop = $('#main').offset()?.top;
                if (elementTop == undefined || windowTop == undefined) {
                    elementTop = 0;
                    windowTop = 0;
                }
                var topdiff = windowTop - elementTop;
                

                var opacity = (100 - Math.min(Math.max(topdiff/5, 0), 100))/100
                
                $('#scroll-down-chevron')
                .css('opacity', (opacity).toString());
                


            });
        
        })
    }

    public scrollTo(elementId: string) {
        if (elementId.startsWith('#')) {
            elementId = elementId.substring(1)
        }

        let el = document.getElementById(elementId);
        if(el != undefined && el != null) {
            console.log('Scrolling to table of contents');
            el.scrollIntoView();
        } else {
            console.log("Cannot scroll to non-existing element #" + elementId)
        }
    }
}

