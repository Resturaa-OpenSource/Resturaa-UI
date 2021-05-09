import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { ProductTable, StoreTable } from 'src/app/model/model';
import { TempserviceService } from 'src/app/services/tempservice.service';

@Component({
  selector: 'app-modalproducts',
  templateUrl: './modalproducts.component.html',
  styleUrls: ['./modalproducts.component.scss']
})
export class ModalproductsComponent implements OnInit {
  prd: ProductTable[] =[];
  prdlist:ProductTable[]=[];
  addproducts: ProductTable[]=[];
  @Output() public myOutput = new EventEmitter<ProductTable[]>();
  constructor(private api: ApiserviceService, private shared: TempserviceService) { }

  ngOnInit() {

    this.api.getAllProducts().subscribe((data: ProductTable[]) => {
      this.prd = data;
      
      console.log(this.prd);
      Object.assign(this.prdlist,this.prd);
      this.product();
  
    });
    
  }
  product() {
    this.api.getAllProductByStoreId(this.shared.store.storeId).subscribe((data:number[]) => {
      this.addproducts = this.prdlist.filter(x=>data.includes(x.itemCode)) 
      
      this.prd = this.prdlist.filter(x=>!data.includes(x.itemCode))
      this.myOutput.emit(this.addproducts);
    })
  }
  addProduct(item:ProductTable){
    this.api.addProduct(this.shared.store.storeId,item.itemCode).subscribe((data)=>{
      console.log(data);
      this.product();
      
  
  
    })
  }
  remove(item:ProductTable){
    console.log(item)
    this.api.deleteProductFromStore(this.shared.store.storeId,item.itemCode).subscribe((data) => {
      console.log(data)
      this.product();
  })
}
}
