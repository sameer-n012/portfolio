import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';
import * as $ from 'jquery';
import profileDetails from 'src/assets/profileDetails';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{

    imgpath = 'assets/images/' + profileDetails['profileImgName'];

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
                

                var opacity = (100 - Math.min(Math.max(topdiff/3, 0), 100))/100
                console.log(opacity)
                
                $('#scroll-down-chevron')
                .css('opacity', (opacity).toString());
                


            });
        
        })
    }
}