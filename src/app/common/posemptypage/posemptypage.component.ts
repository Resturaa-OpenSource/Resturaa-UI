import { Component, OnInit } from '@angular/core';
import { fadeout, fade } from 'src/app/animations';

@Component({
  selector: 'app-posemptypage',
  templateUrl: './posemptypage.component.html',
  styleUrls: ['./posemptypage.component.scss'],
  animations:[fade,fadeout]
})
export class PosemptypageComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() { 
    this.lottieConfig = {
      path: 'assets/animation/6674-cake.json',
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
