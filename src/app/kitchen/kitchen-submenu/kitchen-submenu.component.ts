import { Component, OnInit } from '@angular/core';
import { TempserviceService } from 'src/app/services/tempservice.service';

@Component({
  selector: 'app-kitchen-submenu',
  templateUrl: './kitchen-submenu.component.html',
  styleUrls: ['./kitchen-submenu.component.scss']
})
export class KitchenSubmenuComponent implements OnInit {

  constructor(private shared:TempserviceService) { }
  title="";
  ngOnInit() {
  }
  titleChange(item:string){
 
    this.shared.sendMessage(item.toUpperCase());
    this.title  = item;
  }
}
