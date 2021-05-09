import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { StoreTable, BillPage, OrderTable } from 'src/app/model/model';
import { fade, fadeout } from 'src/app/animations';

@Component({
  selector: 'app-close-oder',
  templateUrl: './close-oder.component.html',
  styleUrls: ['./close-oder.component.scss'],
  animations:[fade,fadeout]
})
export class CloseOderComponent implements OnInit {
  store: StoreTable;
  order: OrderTable;
  message="";
  offer: number;
  service: number;
  discount: number;
  buttondisable: boolean;
  croppedImage;
  constructor(private api: ApiserviceService, private shared: TempserviceService) { }

  ngOnInit() {
    this.store = this.shared.store;
    this.order = this.shared.order;
    this.calculate();
    this.checkUser();

  }
  checkUser() {
if(this.order.paymentMode!="")
{
    this.api.checkUserName(this.order.staffUsername).subscribe((data: boolean) => {
      console.log(data);
    
      if (data) {
        this.order.orderEndTime = new Date().toUTCString();
        this.order.status = "CLOSED";
        this.api.addNewOrder(this.order).subscribe(data => {
          sweetAlert("ORDER CLOSED", "the order successfully ", "success");
        });
        
      }
      else {
        sweetAlert("INVALID", "user name is not valid please try again", "error");
      }
    }, error => {
      sweetAlert("ERROR", "please try again", "error");
    })
  }
}


  calculate() {
    this.order.orderTotal = 0;
    this.offer = 0;
    this.service = 0;
    this.discount = 0;
    this.order.grandTotal = 0;

    this.shared.order.products.forEach(e => {
      this.order.orderTotal = this.order.orderTotal + e.price * e.quantity;
      this.offer = this.offer + (e.price * e.offerValue) / 100;

    });

    this.order.grandTotal = this.order.orderTotal - this.offer - this.service - this.discount;
  }
  selected(item) {

    this.order.paymentMode = item;
  }
}
