import { Component, OnInit, Input } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, ThemeService } from 'ng2-charts';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { SalesReport, ProductReport } from 'src/app/model/model';
import { TempserviceService } from 'src/app/services/tempservice.service';
var randomColor = require('randomcolor'); // import the script

@Component({
  selector: 'app-productreport',
  templateUrl: './productreport.component.html',
  styleUrls: ['./productreport.component.scss'],
  animations: [fade, fadeout]
})
export class ProductreportComponent implements OnInit {
  pro: ProductReport;
  sale: SalesReport;
  selected;
  public doughnutChartLabels: Label[] = [];
  public donutColors=[
    {
      backgroundColor: []
    }
  ];
  public doughnutChartData: MultiDataSet = [
    [10, 20]

  ];
  // public doughnutChartLabels:string[]=['facebook','instagram'];

  @Input() startDate: Date;
  @Input() endDate: Date;

  public doughnutChartType: ChartType = 'doughnut';
  constructor(private api: ApiserviceService, private shared: TempserviceService,private themeService: ThemeService) { }
 overrides: ChartOptions = {};
 
  ngOnInit() {
    // var color = ;
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.themeService.setColorschemesOptions(this.overrides);
    this.api.getProductReport(firstDay.toUTCString(), lastDay.toUTCString(), this.shared.store.storeId).subscribe((data:ProductReport[]) => {
      // this.pr = data;
      // this.doughnutChartLabels  =  this.pr.map(x=>x.productName);
      // this.doughnutChartData  =  this.pr.map(x=>x.sellingCount);
      
      this.processData(data);
      console.log(data);
    });
  }
  ngModelChange(event) {
    // startDate: Moment, endDate: 
    console.log(event.startDate.toString());
    console.log(event.endDate.toString());
    this.api.getProductReport(new Date(event.startDate.toString()).toUTCString(),
      new Date(event.endDate.toString()).toUTCString(), this.shared.store.storeId).subscribe((data: ProductReport[]) => {

        // this.doughnutChartLabels = data.map(x => x.productName);
        // this.doughnutChartData = data.map(x => x.sellingCount);
        // console.log(data);

        this.processData(data);
      });
  }
  storeData: ProductReport[] = [];

  processData(data: ProductReport[]) {

    data.forEach(element => {

      var index = this.storeData.findIndex(x => x.productName == element.productName);
      console.log(index);

      if (index == -1) {
        this.storeData.push(element);
      } else {
        this.storeData[index].sellingCount = this.storeData[index].sellingCount + element.sellingCount;
      }

    });
    console.log(this.storeData);
    this.doughnutChartData = this.storeData.map(x => x.sellingCount);
    this.doughnutChartLabels = this.storeData.map(x => x.productName);
    var colors=[]
    this.doughnutChartLabels.forEach(e=>{
      colors.push(randomColor());
    })
    this.donutColors=[
      {
        backgroundColor:colors
      }
    ];

  }

}
