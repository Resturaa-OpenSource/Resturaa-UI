import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';

@Component({
  selector: 'app-menuemptypage',
  templateUrl: './menuemptypage.component.html',
  styleUrls: ['./menuemptypage.component.scss'],
  animations:[fade,fadeout]
})
export class MenuemptypageComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() { 
    this.lottieConfig = {
      path: 'assets/animation/2605-cooking.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };
  }
  handleAnimation(anim: any) {
    this.anim = anim;
}

  ngOnInit() {
  }

}
