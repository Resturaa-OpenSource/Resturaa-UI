import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { OrderTable, SelectedTable, StoreSeatTable } from 'src/app/model/model';

@Component({
  selector: 'app-kitchenrunningorder',
  templateUrl: './kitchenrunningorder.component.html',
  styleUrls: ['./kitchenrunningorder.component.scss'],
  animations:[
    fade,fadeout
  ]
})
export class KitchenrunningorderComponent implements OnInit {
  ord: OrderTable [] = [];
  tb: SelectedTable[] = [];
  
  orderView:OrderTable;
  constructor(private api: ApiserviceService, private shared: TempserviceService) { }

  ngOnInit() {
    this.api.getAllKotOrder(this.shared.store.storeId).subscribe((data: OrderTable[]) => {
      this.ord = data;
      console.log(this.ord);
    });
  }

}
