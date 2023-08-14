import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from './title/title.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TocComponent } from './toc/toc.component';

@NgModule({
    declarations: [AppComponent, ProjectCardComponent, TitleComponent, TocComponent],
    imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
