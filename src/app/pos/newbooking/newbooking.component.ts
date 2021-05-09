import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { CustomerTable, ReservationTable } from 'src/app/model/model';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newbooking',
  templateUrl: './newbooking.component.html',
  styleUrls: ['./newbooking.component.scss'],
  animations: [
    fade, fadeout
  ]
})
export class NewbookingComponent implements OnInit {
  showform = true;

  startTime
  endTime

  res: ReservationTable;
  cust: CustomerTable[] = [];
  cus: CustomerTable;
  subscription: any;
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @ViewChild('formRef', { static: false }) formRef: NgForm;
  searchText;
  constructor(
    private api: ApiserviceService,
    private shared: TempserviceService,
    private datePipe: DatePipe,
    private router:Router
  ) { }

  ngOnInit() {
    this.res = {
      custName: "",
      custPhone: "",
      endTime: "",
      occasion: "",
      orderId: "",
      reservationId: "",
      specialRequest: "",
      startTime: "",
      storeId: ""
    }
    this.api.getAllUsers().subscribe((data: CustomerTable[]) => {
      this.cust = data;
      console.log(this.cust);
    });   

  }

  addres(retb: ReservationTable) {

    console.log(retb)
    if (this.startTime != "" && this.endTime != "" && retb.startTime != null) {
      let date: Date;
      date = retb.startTime;
      var c = this.datePipe.transform(date, "yyyy-MM-dd");
      retb.startTime = new Date(c + "T" + this.startTime + ":00");
      retb.endTime = new Date(c + "T" + this.endTime + ":00");

      console.log(retb.startTime, "and", retb.endTime);
      retb.storeId = this.shared.store.storeId;
      this.shared.reserve = retb;
      this.shared.order.orderEndTime = retb.startTime;
      this.shared.order.orderType= "RESERVATION"
      this.router.navigateByUrl("/module/pos/tableselection");

    } else {
      sweetAlert("Please Enter Date and Time", "Date and time should not be null!");
    }

  }



  selectCustomer(item: CustomerTable) {
    console.log(item);
    this.res.custName = item.custName;
    this.res.custPhone = item.custPhone;
    this.formRef.reset(this.res);
    console.log(this.res);
  }
}
