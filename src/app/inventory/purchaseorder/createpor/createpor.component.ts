import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IngredientsTable, purchaseOderTable, purchaseOderListTable } from 'src/app/model/model';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createpor',
  templateUrl: './createpor.component.html',
  styleUrls: ['./createpor.component.scss']
})
export class CreateporComponent implements OnInit {

  por: purchaseOderTable;
  items: purchaseOderListTable[] = [];

  constructor(private api: ApiserviceService) { }

  ngOnInit() {
    this.por = {
      orederName: "",
      status: "",
      date: "",
      id: "",
      totalAmount: "",
      items: [],
    }
  }
  view(event: purchaseOderListTable) {

    console.log(event);
    let temp: purchaseOderListTable = {
      code: event.code,
      name: event.name,
      reciQty: event.reciQty,
      requiredQty: event.requiredQty,
      sku: event.sku,
      storeQty: event.storeQty,
      unitPrice: event.unitPrice,
    };

    this.items.push(temp);
    console.log(this.items);
    this.cal();

  }
  remove(item: purchaseOderListTable) {
    sweetAlert("Are you sure you want to delete this?", {
      buttons: ["No", "Yes!"],
    })
      .then((willDelete) => {
        if (willDelete) {
          console.log(this.items.indexOf(item));
          this.items.splice(this.items.indexOf(item), 1);

        } else {
          sweetAlert("Your file is safe!");
        }
      });
  }
  submit() {
    this.por.items = this.items;
    console.log(this.por);

      this.api.addPOR( this.por ).subscribe((data:purchaseOderTable) => {
        this.por =data;
      console.log( this.por );
      sweetAlert("purchaseOderTable are added", "the purchaseorder add successfully ", "success");
      
   });
  }
  cal() {
    this.por.totalAmount = 0;
    this.items.forEach(x => {
      this.por.totalAmount = this.por.totalAmount + x.unitPrice * x.requiredQty;
    });
  }
}
