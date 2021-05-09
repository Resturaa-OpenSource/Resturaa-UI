import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';

@Component({
  selector: 'app-kitchen-emptypage',
  templateUrl: './kitchen-emptypage.component.html',
  styleUrls: ['./kitchen-emptypage.component.scss'],
  animations:[
    fade,fadeout
  ]
})
export class KitchenEmptypageComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() { 
    this.lottieConfig = {
      path: 'assets/animation/6519-cooking.json',
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
