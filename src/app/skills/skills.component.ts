import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public isDesktop: boolean;
  public isActive: boolean;
 
 
  constructor() { }

  public config = {
    position: 'bottom'
  };

  enter(skillNumber) {
    this[`isPresent${skillNumber}`] = true;
  }

  ngOnInit() {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      this.isDesktop = true;
      this.isActive = false;
    } else {
      this.isDesktop = false;
      this.isActive = true;
    }
  }
}
 