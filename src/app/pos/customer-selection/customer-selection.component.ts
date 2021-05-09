import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReservationTable, CustomerTable } from 'src/app/model/model';
import { NgForm } from '@angular/forms';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { Router } from '@angular/router';
import { fade, fadeout } from 'src/app/animations';

@Component({
  selector: 'app-customer-selection',
  templateUrl: './customer-selection.component.html',
  styleUrls: ['./customer-selection.component.scss'],
  animations:[fade,fadeout]
})
export class CustomerSelectionComponent implements OnInit {
  showform = true;
  searchText=""
  startTime
  endTime
  res: ReservationTable;
  cust: CustomerTable[] = [];
  cus: CustomerTable;
  subscription: any;
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @ViewChild('formRef', { static: false }) formRef: NgForm;

  constructor(private api: ApiserviceService,
    private shared: TempserviceService, private router: Router) { }
  ngOnInit() {

    this.api.getAllUsers().subscribe((data: CustomerTable[]) => {
      this.cust = data;
      console.log(this.cust);
    });

  }

  addres(c) {

    this.shared.order.customerName = c.custName;
    this.shared.order.customerPhone = c.custPhone;

    console.log(this.shared.order)
    this.router.navigateByUrl("/module/pos/closeOrder");

  }

  selectCustomer(item: CustomerTable) {
    console.log(item);
    this.shared.order.customerName = item.custName;
    this.shared.order.customerPhone = item.custPhone;
    this.shared.order.customerId = item.custID;
    this.formRef.reset(item);
    console.log(item);
  }
}