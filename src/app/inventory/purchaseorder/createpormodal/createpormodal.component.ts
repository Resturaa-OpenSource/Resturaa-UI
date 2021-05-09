import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { IngredientsTable, purchaseOderListTable } from 'src/app/model/model';

@Component({
  selector: 'app-createpormodal',
  templateUrl: './createpormodal.component.html',
  styleUrls: ['./createpormodal.component.scss']
})
export class CreatepormodalComponent implements OnInit {
por:IngredientsTable[];
inglist:boolean=true;
vdetails:boolean=false;
ingredientview:purchaseOderListTable;
@Output() public myOutput = new EventEmitter<purchaseOderListTable>();
  constructor(private api:ApiserviceService) {
    this.ingredientview={
      code:"",
      name:"",
      reciQty:"",
      requiredQty:"",
      sku:"",
      storeQty:"",
      unitPrice:"",
    }
   }

  ngOnInit() {
   
    this.api.getIngredients().subscribe((data:IngredientsTable[]) => {
      this.por=data;
      console.log(this.por);
   });

  }
  popinglist(){
    this.inglist=!this.inglist;
    this.inglist= false;
   
  }
  viewdetails(Item:IngredientsTable){
    this.inglist= true;
    this.ingredientview.code=Item.id;
    this.ingredientview.name=Item.name;
    this.ingredientview.unitPrice=Item.unitPrice;
    this.ingredientview.sku=Item.sku;  
}
add(){
  
  this.myOutput.emit(this.ingredientview);
  this.ingredientview={
    code:"",
    name:"",
    reciQty:"",
    requiredQty:"",
    sku:"",
    storeQty:"",
    unitPrice:"",
  }

}

}
