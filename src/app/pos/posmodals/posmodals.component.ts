import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { ProductView, ProductVariants, OrderedProductsTable } from 'src/app/model/model';

@Component({
  selector: 'app-posmodals',
  templateUrl: './posmodals.component.html',
  styleUrls: ['./posmodals.component.scss']
})
export class PosmodalsComponent implements OnInit {
  close = true;
  protected: ProductView;
  constructor(private api: ApiserviceService, private shared: TempserviceService) { }
  @Output() valueChange = new EventEmitter();
  @Input() productId: number;
  varientSelected: ProductVariants;

  ngOnInit() {

    this.api.viewProduct(this.shared.store.storeId, this.productId).subscribe((data: ProductView) => {
      this.protected = data;
      console.log(data);
    });
    this.varientSelected = {
      name: "",
      price: 0,
      productID: 0,
      productVariantID: 0
    }

  }
  toggle() {

    this.valueChange.emit("test");
  }
  addProduct() {
    if (this.varientSelected.productVariantID > 0) {


      var product: OrderedProductsTable;

      product = {
        isParcel: false,
        itemCode: this.protected.productID,
        itemcodePrefix: "",
        offerValue: this.protected.offerValue,
        price: this.varientSelected.price,
        productName: this.protected.productName,
        productVariantID: this.varientSelected.productVariantID,
        productVarientName: this.varientSelected.name,
        quantity: 1,
        status: ""
      }
      var index = this.shared.order.products.map(e => e.productVariantID).indexOf(product.productVariantID)
      if (index >= 0) {
        this.shared.order.products[index].quantity++;
      } else {
        this.shared.order.products.push(product);
      }
      this.varientSelected = {
        name: "",
        price: 0,
        productID: 0,
        productVariantID: 0
      }
      this.valueChange.emit("test");
    }
  }

  selected(item) {
    console.log(item);
    this.varientSelected = item;
  }

}
