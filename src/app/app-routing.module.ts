import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { SkillsChartComponent } from './skills-chart/skills-chart.component';
import { SkillsTechnologyStackComponent } from './skills-technology-stack/skills-technology-stack.component';

const routes: Route[] = [
  {path: 'languages', component: SkillsChartComponent},
  {path: 'dev-exp', component: SkillsTechnologyStackComponent}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
