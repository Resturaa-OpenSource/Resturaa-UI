import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss'],
  animations:[fade,fadeout]
})
export class ErrorpageComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() { 
    this.lottieConfig = {
      path: 'assets/animation/1611-online-offline.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };
  }

  ngOnInit() {
  }
  handleAnimation(anim: any) {
    this.anim = anim;
}

}
