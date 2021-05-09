import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { ProductTable, ProductView, IngredientsMapping, ProductEdit, ProductVariants } from 'src/app/model/model';
import { TempserviceService } from 'src/app/services/tempservice.service';

@Component({
  selector: 'app-statetransfer',
  templateUrl: './statetransfer.component.html',
  styleUrls: ['./statetransfer.component.scss'],
  animations: [fade, fadeout]
})
export class StatetransferComponent implements OnInit {
  showstate: boolean = false;
  productView:ProductView;
  varient:ProductVariants;
  ingreMapping:IngredientsMapping[]=[];
  constructor(private api: ApiserviceService,private shared:TempserviceService) { }
  products: ProductTable[] = [];
  ngOnInit() {
    this.api.getAllProducts().subscribe((data: ProductTable[]) => {
      console.log(data);
      this.products = data;
      this.api.getAllProductByStoreId(this.shared.store.storeId).subscribe((d:number[])=>{
        this.products=this.products.filter(x=>d.includes(x.itemCode));
        console.log(d);
      });
    })
  }
  stateshow() {
    this.showstate = !this.showstate;
  }
  clickOnVar(data:ProductVariants){
    this.varient  = data;
      this.api.getAllIngMappingBy(data.productID,data.productVariantID).subscribe((data:IngredientsMapping[])=>{
        
        console.log(data);
      })
  }
  viewProduct(data:ProductTable) {
    console.log(data);
    this.api.viewProduct(this.shared.store.storeId,data.itemCode).subscribe((data:ProductView)=>{
      this.productView = data;
      console.log(data)
      console.log(this.productView);
      
    });
  }
  remove(item:IngredientsMapping){
    
    this.ingreMapping.splice(this.ingreMapping.findIndex(x =>x.ingrediantID==item.ingrediantID),1)

  }
  update(){
    this.api.updateIngredients(this.ingreMapping).subscribe((data)=>{
      console.log(data);
    });
  }
  arrayValue(event:IngredientsMapping){
    console.log(event);
    var ingre:IngredientsMapping ={
      id:"",varientName:this.varient.name,totalExpense:event.totalExpense,productVarientID:this.varient.productID,
      productName:this.varient.productID,
      productID:this.productView.productName,
      ingrediantID:event.ingrediantID,
      ingrediantName:event.ingrediantName,
      value:""
    }

    this.ingreMapping.push(ingre);
    
  }
}
