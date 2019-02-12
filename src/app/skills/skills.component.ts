import { Component, OnInit } from '@angular/core';

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
  }
