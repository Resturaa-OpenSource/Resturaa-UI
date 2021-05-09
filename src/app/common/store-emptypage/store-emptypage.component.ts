import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';

@Component({
  selector: 'app-store-emptypage',
  templateUrl: './store-emptypage.component.html',
  styleUrls: ['./store-emptypage.component.scss'],
  animations:[
    fade,fadeout
  ]
})
export class StoreEmptypageComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() { 
    this.lottieConfig = {
      path: 'assets/animation/5238-isometric-shop.json',
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
