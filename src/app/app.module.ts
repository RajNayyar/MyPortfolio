import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AboutComponent } from './about/about.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsChartComponent } from './skills-chart/skills-chart.component';
import { SkillsTechnologyStackComponent } from './skills-technology-stack/skills-technology-stack.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilePageComponent,
    AboutComponent,
    TimelineComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent,
    SkillsChartComponent,
    SkillsTechnologyStackComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
