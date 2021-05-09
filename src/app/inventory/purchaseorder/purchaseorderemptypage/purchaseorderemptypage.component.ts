import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchaseorderemptypage',
  templateUrl: './purchaseorderemptypage.component.html',
  styleUrls: ['./purchaseorderemptypage.component.scss']
})
export class PurchaseorderemptypageComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() { 
    this.lottieConfig = {
      path: 'assets/animation/603-building.json',
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
