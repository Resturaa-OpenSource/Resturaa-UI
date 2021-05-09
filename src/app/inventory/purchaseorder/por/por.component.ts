import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { purchaseOderTable } from 'src/app/model/model';

@Component({
  selector: 'app-por',
  templateUrl: './por.component.html',
  styleUrls: ['./por.component.scss'],
  animations:[fade,fadeout]
})
export class PorComponent implements OnInit {
porchild=false;
por:purchaseOderTable[];
purchaseOder:purchaseOderTable;
  constructor(private api:ApiserviceService) { }

  ngOnInit() {
    this.api.getAllPo().subscribe((data:purchaseOderTable[]) => {
      this.por=data;
      console.log(this.por);
   });
  }
openpor(item:purchaseOderTable){
  console.log(item)
  this.porchild=!this.porchild;
  this.purchaseOder = item
}
}
