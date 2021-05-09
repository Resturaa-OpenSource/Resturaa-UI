import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { OrderTable } from 'src/app/model/model';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-runningorder',
  templateUrl: './runningorder.component.html',
  styleUrls: ['./runningorder.component.scss'],
  animations: [
    fade, fadeout
  ]
})
export class RunningorderComponent implements OnInit {

  orders: OrderTable[] = [];
  orderView: OrderTable;


  constructor(private api: ApiserviceService, private shared: TempserviceService,private router:Router) { }

  ngOnInit() {
    this.api.getAllKotOrder(this.shared.store.storeId).subscribe((data: OrderTable[]) => {
      this.orders = data;
      console.log(this.orders);
    });
  }
  addMore() {
    this.shared.order = this.orderView;
    this.router.navigateByUrl('/module/pos/pselection');
  }

}
