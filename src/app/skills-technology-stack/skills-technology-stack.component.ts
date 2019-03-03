import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-technology-stack',
  templateUrl: './skills-technology-stack.component.html',
  styleUrls: ['./skills-technology-stack.component.css']
})
export class SkillsTechnologyStackComponent implements OnInit {

  constructor() { }
  logos = ["./src/assets/Tech-Stack/rabbitmq.png","./src/assets/Tech-Stack/Logo_DotNet.png","./src/assets/Tech-Stack/js.png","./src/assets/Tech-Stack/illustrator.png","./src/assets/Tech-Stack/HTML.png","./src/assets/Tech-Stack/github.png","./src/assets/Tech-Stack/css.png","./src/assets/Tech-Stack/Angular.png","./src/assets/Tech-Stack/2000px-Apple_logo_black.svg.png"]

  ngOnInit() {
  }

}
