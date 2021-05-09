import { Component, OnInit } from '@angular/core';
import { fadeout, fade } from 'src/app/animations';
import { TempserviceService } from 'src/app/services/tempservice.service';

@Component({
  selector: 'app-inventory-menu',
  templateUrl: './inventory-menu.component.html',
  styleUrls: ['./inventory-menu.component.scss'],
  animations: [
    fade, fadeout
  ]
})
export class InventoryMenuComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor(private shared: TempserviceService) {
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

title = " ";
  ngOnInit() {
  }
  titleChange(item: string) {

    this.shared.sendMessage(item.toUpperCase());
    this.title=item;
  }

}
