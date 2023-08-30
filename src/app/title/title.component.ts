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

    taglines = ['build apps', 'explore data', 'find solutions']

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

        var lines = this.taglines;
        var c = 1;
        var tagline_el = document.getElementById("tagline-replace")!;
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
        updateTagline();

        async function updateTagline() {
            
            while(true) {

                let curtext = tagline_el.innerHTML;
                
                while(curtext !== '') {
                    await sleep(Math.floor(Math.random()*50+50));
                    curtext = curtext.substring(0, curtext.length-1)
                    tagline_el.innerHTML = curtext;
                }
                
                await sleep(1000);

                for(let i = 0; i < lines[c].length; i++) {
                    await sleep(Math.floor(Math.random()*100+50));
                    curtext += lines[c][i];
                    tagline_el.innerHTML = curtext;
                }

                c = (c+1)%lines.length;

                await sleep(3000);
            }
        }
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

