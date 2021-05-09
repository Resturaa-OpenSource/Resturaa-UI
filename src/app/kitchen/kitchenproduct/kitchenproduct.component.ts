import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { StoreTable, ProductTable, ProductView } from 'src/app/model/model';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-kitchenproduct',
  templateUrl: './kitchenproduct.component.html',
  styleUrls: ['./kitchenproduct.component.scss'],
  animations:[
    fade,fadeout
  ]
})
export class KitchenproductComponent implements OnInit {
  store:StoreTable;
  productView:ProductView;
  status:boolean = false;
  prd: ProductTable[]=[];
  prdlist: ProductTable[]=[];

  constructor(private shared:TempserviceService,private api:ApiserviceService) { }

  ngOnInit() {

    this.store = this.shared.store;
    this.api.getAllProducts().subscribe((data: ProductTable[]) => {
      this.prd = data;
      Object.assign(this.prdlist, this.prd);
      console.log(this.prd);
      this.product();

    });
  }
 product() {
    this.api.getAllProductByStoreId(this.shared.store.storeId).subscribe((data: number[]) => {
      this.prd = this.prdlist.filter(x => data.includes(x.itemCode))
      console.log(this.prd,data);
    })
    this.api.getAllStoreProducts
  }
  viewProduct(item: ProductTable) {
    console.log(item);
    this.api.viewProduct(this.shared.store.storeId, item.itemCode).subscribe((data: ProductView) => {
      console.log(data);
      this.productView = data;
    })
  }
  changeStatus(status:Boolean){
    console.log(status);
    this.api.enableProduct(this.shared.store.storeId,this.productView.productID,status).subscribe(data=>{
      console.log(data);
      this.productView.enable = status;
      sweetAlert("UPDATED","This product status is updated","success");
    })
  }
}
