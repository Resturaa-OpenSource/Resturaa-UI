import { Component, OnInit } from '@angular/core';
import { fadeout, fade } from 'src/app/animations';
import { Moment } from 'moment';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { purchaseOderListTable, SalesOut } from 'src/app/model/model';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.scss'],
  animations: [fade, fadeout]
})
export class SalesreportComponent implements OnInit {
  selected: { start: Moment, end: Moment };
  constructor(private api: ApiserviceService, private shared: TempserviceService) { }
  salesOut: SalesOut[] = [];
  salesOutTemp: SalesOut[] = [];
  ngOnInit() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.api.getSalesReport(firstDay.toUTCString(), lastDay.toUTCString(), this.shared.store.storeId)
      .subscribe((data: SalesOut[]) => {
        console.log(data);
        this.salesOut = data;
        Object.assign(this.salesOutTemp, this.salesOut);
        this.salesOut = data.filter(x => x.status === "CLOSED")
        this.calculate();
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
        this.tab(this.tabtitle);
        this.salesOut = this.salesOutTemp.filter(x => x.status === "CLOSED")
        this.calculate();
      });
  }

  total= 0;
  tabtitle;
  calculate(){
    this.total = 0;
    this.salesOut.forEach(x=>{
      this.total = this.total +x.totalAmount;
    })
  }
  tab(data) {
    this.tabtitle = data;
    switch (data) {
      case 'Billwise Total':
        this.salesOut = this.salesOutTemp.filter(x => x.status === "CLOSED")
        this.calculate();

        break;
      case 'Item Wise':

          this.calculate();

        break;
      case 'Cancelled Bills':
        this.salesOut = this.salesOutTemp.filter(x => x.status === "CANCEL")
        this.calculate();

        break;
      case 'Daily Report':
        
          var date = new Date();
          var firstDay = new Date();
          firstDay.setHours(0);
          var lastDay = new Date();
          lastDay.setHours(24);

          console.log(firstDay,lastDay);
          this.api.getSalesReport(firstDay.toUTCString(), lastDay.toUTCString(), this.shared.store.storeId)
            .subscribe((data: SalesOut[]) => {
              console.log(data);
              this.salesOut = data;
              Object.assign(this.salesOutTemp, this.salesOut);
              this.calculate();
            })
        break;
      case 'Monthly Report':
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        this.api.getSalesReport(firstDay.toUTCString(), lastDay.toUTCString(), this.shared.store.storeId)
          .subscribe((data: SalesOut[]) => {
            console.log(data);
            this.salesOut = data;
            Object.assign(this.salesOutTemp, this.salesOut);
            this.calculate();
          })
        break;
      default:
        break;
    }
  }

}
