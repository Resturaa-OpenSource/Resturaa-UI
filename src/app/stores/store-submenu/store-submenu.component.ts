import { Component, OnInit } from '@angular/core';
import { TempserviceService } from 'src/app/services/tempservice.service';

@Component({
  selector: 'app-store-submenu',
  templateUrl: './store-submenu.component.html',
  styleUrls: ['./store-submenu.component.scss']
})
export class StoreSubmenuComponent implements OnInit {
title = " ";
  constructor(private shared:TempserviceService) { }

  ngOnInit() {
  }
  titleChange(item:string){
 
    this.shared.sendMessage(item.toUpperCase());
    this.title = item;
  }

}
