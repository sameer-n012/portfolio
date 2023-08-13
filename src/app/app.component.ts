import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'portfolio';

    ngOnInit() {
        console.log(50);
        $(window).on('load resize scroll', function () {
            $('#bg-static').each(function () {
                var mainHeight = $('#main').height() || 0;

                var windowTop = $(window).scrollTop();
                var elementTop = $(this).offset()?.top;
                if (elementTop == undefined || windowTop == undefined) {
                    elementTop = 0;
                    windowTop = 0;
                }
                var topdiff = sigmoid(windowTop - elementTop, mainHeight / 10);

                var leftPosition = Math.max(70 - (70 - 0) * topdiff, 0);
                var topPosition = Math.min(62 + (100 - 62) * topdiff, 100);

                $(this)
                    .find('#bg-dynamic')
                    .css({
                        backgroundPositionX: leftPosition.toString() + '%',
                        backgroundPositionY: topPosition.toString() + '%',
                    });
            });
        });
        console.log($('#main').width());
    }
}

function sigmoid(x: number, k: number) {
    return 2 * (1.0 / (1.0 + Math.exp(-x / k)) - 0.5);
}
