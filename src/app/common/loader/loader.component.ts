import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  

  @Input() public show:Boolean ;

  constructor() {
    this.lottieConfig = {
      path: 'assets/animation/loading_anim.json',
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
