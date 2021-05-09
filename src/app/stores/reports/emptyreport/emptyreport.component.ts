import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emptyreport',
  templateUrl: './emptyreport.component.html',
  styleUrls: ['./emptyreport.component.scss']
})
export class EmptyreportComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() { 
    this.lottieConfig = {
      path: 'assets/animation/6690-analytics.json',
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
