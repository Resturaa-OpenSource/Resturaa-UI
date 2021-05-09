import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { SalesOut } from 'src/app/model/model';
import { TempserviceService } from 'src/app/services/tempservice.service';

@Component({
  selector: 'app-kotreport',
  templateUrl: './kotreport.component.html',
  styleUrls: ['./kotreport.component.scss'],
  animations:[fade,fadeout]
})
export class KotreportComponent implements OnInit {

  constructor(private api:ApiserviceService,private shared:TempserviceService) { }
  salesOut:SalesOut[]= [];
  selected;

  ngOnInit() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.api.getSalesReport(firstDay.toUTCString(),lastDay.toUTCString(),this.shared.store.storeId)
    .subscribe((data:SalesOut[])=>{
        console.log(data);
        this.salesOut = data.filter(x=>x.status==="KOT");
        this.calculate();
    })
  }
  total= 0;
  ngModelChange(event){

  }
  calculate(){
    this.total = 0;
    this.salesOut.forEach(x=>{
      this.total = this.total +x.totalAmount;
    })
  }

}
