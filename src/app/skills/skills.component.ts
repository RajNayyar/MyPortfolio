import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  toggle : boolean = false
  ngOnInit() {
  }
  SwitchActive(){
    this.toggle = true;
  }
  toggleActive(){

    return "{'option': true, 'active': "+ this.toggle +"}"
  }
  }
