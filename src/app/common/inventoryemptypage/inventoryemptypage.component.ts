import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';

@Component({
  selector: 'app-inventoryemptypage',
  templateUrl: './inventoryemptypage.component.html',
  styleUrls: ['./inventoryemptypage.component.scss'],
  animations:[
    fade,fadeout
  ]
})
export class InventoryemptypageComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() { 
    this.lottieConfig = {
      path: 'assets/animation/3139-microwave-oven.json',
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
