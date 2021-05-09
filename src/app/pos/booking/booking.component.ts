import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { ReservationListView } from 'src/app/model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  animations: [
    fade, fadeout
  ]
})
export class BookingComponent implements OnInit {

  res: ReservationListView[] = [];
  reservationView: ReservationListView;
  searchText = "";
  constructor(private api: ApiserviceService, private shared: TempserviceService, private router: Router) {

  }

  ngOnInit() {
    this.reservationView = {

      orderTable: {
        customerId: "",
        customerPhone: "",
        orderEndTime: "",
        paymentMode: "",
        customerName: "",
        deliveryTime: "",
        deviceID: "",
        grandTotal: "",
        orderDate: "",
        orderNumber: "",
        orderProCount: "",
        orderTotal: "",
        orderType: "",
        staffUsername: "",
        status: "",
        storeID: "",
        products: [],
        tables: [],

      },
      reservationTable: {
        custName: "",
        custPhone: "",
        endTime: "",
        occasion: "",
        orderId: "",
        reservationId: "",
        specialRequest: "",
        startTime: "",
        storeId: "",
      }

    }
    this.api.viewReservation(this.shared.store.storeId).subscribe((data: ReservationListView[]) => {
      this.res = data;
      console.log(this.res);
    });

  }
  cancelbooking() {
    sweetAlert("Are you sure?", {
      buttons: ["No", "Yes!"],
    })
      .then((willDelete) => {
        if (willDelete) {
          // sweetAlert("Loading")
          this.shared.order.orderDate = new Date().toUTCString();
          this.shared.order.status = "CANCEL";
          this.shared.order.storeID = this.shared.store.storeId;
          this.shared.order.orderProCount = this.reservationView.orderTable.products.length;
          this.api.addNewOrder(this.shared.order).subscribe(data => {
            console.log(data);
            // this.websocket.sendName("/")
            sweetAlert("ORDER CANCELLED", "the order successfully cancelled", "success");
          }, error => {
            sweetAlert("ERROR", "please try again", "error");
          })

        }
      });


  }

  addmore() {
    this.shared.order = this.reservationView.orderTable;
    this.router.navigateByUrl('/module/pos/pselection');
  }

  kot() {
    // this.shared.order.orderDate = new Date().toUTCString();
    // this.shared.order.status="KOT";
    // this.shared.order.storeID = this.shared.store.storeId;
    // this.shared.order.orderProCount = this.order.products.length;



    sweetAlert("Are you sure?", {
      buttons: ["No", "Yes!"],
    })
      .then((willDelete) => {
        if (willDelete) {
          this.shared.order.orderDate = new Date().toUTCString();
          this.shared.order.status = "KOT";
          this.shared.order.storeID = this.shared.store.storeId;
          this.shared.order.orderProCount = this.reservationView.orderTable.products.length;
          this.api.addNewOrder(this.shared.order).subscribe(data => {
            console.log(data);
            // this.websocket.sendName("/")
            sweetAlert("ORDER TAKEN", "the order successfully uploaded", "success");
          }, error => {
            sweetAlert("ERROR", "please try again", "error");
          })
      
        }
      });
  
  }
}
