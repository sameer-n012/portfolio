import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from './title/title.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TocComponent } from './toc/toc.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [AppComponent, ProjectCardComponent, TitleComponent, TocComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, FooterComponent],
    imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
