import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { SalesOut } from 'src/app/model/model';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.scss'],
  animations:[fade,fadeout]
})
export class OrderReportComponent implements OnInit {
  selected;
  constructor(private api:ApiserviceService,private shared:TempserviceService) { }
  salesOut:SalesOut[]= [];
  salesOutTemp:SalesOut[] = [];

  ngOnInit() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.api.getSalesReport(firstDay.toUTCString(),lastDay.toUTCString(),this.shared.store.storeId)
    .subscribe((data:SalesOut[])=>{
        console.log(data);
        this.salesOut = data;
        this.calculate();
    })
  }
  total= 0;
  calculate(){
    this.total = 0;
    this.salesOut.forEach(x=>{
      this.total = this.total +x.totalAmount;
    })
  }
  ngModelChange(event) {
    console.log(event.startDate.toString());
    console.log(event.endDate.toString());
    this.api.getSalesReport(new Date(event.startDate.toString()).toUTCString(),
      new Date(event.endDate.toString()).toUTCString(), this.shared.store.storeId).subscribe((data: SalesOut[]) => {

        // this.doughnutChartLabels = data.map(x => x.productName);
        // this.doughnutChartData = data.map(x => x.sellingCount);
        console.log(data);
        this.salesOutTemp = [];
        // this.
        Object.assign(this.salesOutTemp, data);
        this.salesOut = this.salesOutTemp;
        this.calculate();
      });
  }


}
