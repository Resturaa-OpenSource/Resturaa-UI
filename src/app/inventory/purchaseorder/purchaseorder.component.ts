import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.scss'],
  animations:[fade,fadeout]
})
export class PurchaseorderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
view(event){
  console.log(event);
}
}
