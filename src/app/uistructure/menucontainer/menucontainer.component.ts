import { Component, OnInit } from '@angular/core';
import { TempserviceService } from 'src/app/services/tempservice.service';

@Component({
  selector: 'app-menucontainer',
  templateUrl: './menucontainer.component.html',
  styleUrls: ['./menucontainer.component.scss']
})
export class MenucontainerComponent implements OnInit {
posf=false;
kitchenf=false;
inventoryf=false;
storesf=false;
title=" ";

constructor(private shared:TempserviceService) { }

ngOnInit() {
}
titleChange(item:string){

  this.shared.sendMessage(item.toUpperCase());
}

pos(item:string){
  this.posf=!this.posf;
  this.kitchenf=false;
  this.storesf=false;
  this.inventoryf=false;
  this.titleChange('POS');
  // this.shared.sendMessage(item.toUpperCase());
  this.title = item;
}
kitchen(item:string){
  this.kitchenf=!this.kitchenf;
  this.posf=false;
  this.storesf=false;
  this.inventoryf=false;
  this.titleChange('KITCHEN');
  this.title = item;

}
stores(item:string){
  this.storesf=!this.storesf;
  this.posf=false;
  this.kitchenf=false;
  this.inventoryf=false;
  this.titleChange('STORES');
  this.title = item;

}
inventory(item:string){
  this.inventoryf=!this.inventoryf;
  this.posf=false;
  this.kitchenf=false;
  this.storesf=false;
  this.titleChange('INVENTORY');
  this.title = item;
 

}
}
