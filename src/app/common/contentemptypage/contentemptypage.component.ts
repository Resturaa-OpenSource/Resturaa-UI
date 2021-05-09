import { Component, OnInit } from '@angular/core';
import { fadeout, fade } from 'src/app/animations';

@Component({
  selector: 'app-contentemptypage',
  templateUrl: './contentemptypage.component.html',
  styleUrls: ['./contentemptypage.component.scss'],
  animations:[fade,fadeout]
})
export class ContentemptypageComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() { 
    this.lottieConfig = {
      path: 'assets/animation/6829-logo-animation.json',
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
