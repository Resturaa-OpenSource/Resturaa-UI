import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { ProductTable, ProductEdit, ProductView, ProductVariants, OfferTable } from 'src/app/model/model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
  animations: [
    fade, fadeout
  ]
})
export class ProductManagementComponent implements OnInit {

  storetable = true;
  products: ProductTable[] = [];
  productView: ProductView;
  protectedit: ProductEdit;
  varient: ProductVariants[] = [];
  newVarient: ProductVariants;

  searchText="";

  storeImage: File;
  imageUrl = 'assets/favicona.png';
  offers: OfferTable[] = [];

  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @ViewChild('formRef', { static: false }) formRef: NgForm;
  constructor(private api: ApiserviceService, private shared: TempserviceService) { }

  ngOnInit() {

    this.newVarient = {
      name: "",
      price: "",
      productID: "",
      productVariantID: ""
    }
    this.protectedit = {
      product: {
        deliveryTime: "",
        itemCode: "",
        itemcodePrefix: "",
        prductRating: "",
        productDesc: "",
        productImage: "",
        productName: "",
        productNature: "",
        productPrice: "",
        productTax: "",
      }, productVariants: []
    }
    this.api.getAllProducts().subscribe((data: ProductTable[]) => {
      this.products = data;
      console.log(data);
    })
    this.api.getAllOffers().subscribe((data: OfferTable[]) => {
   
      this.offers = data.filter(x => x.offerEnable == true);
      console.log(this.offers);
    });

  }
  onChange(event)
  {
    if(event!="No Offer"){
      var off=this.offers.find(x=>x.offerTittle.trim()===event.trim());
      // console.log(this.offers.find(x=>x.offerTittle.trim()===event.trim()));
      
      this.api.applyOffer(this.shared.store.storeId,this.productView.productID,off.offerId).subscribe((data)=>{
         console.log(data);
      })
    }else{
      this.api.applyOffer(this.shared.store.storeId,this.productView.productID,0).subscribe((data)=>{
        console.log(data);
      })
    }
   
console.log(event);
  }
  poptable() {
    this.storetable = !this.storetable;
  }
  viewProduct(item: ProductTable) {
    console.log(item);
    this.storetable = true;
    this.api.viewProduct(this.shared.store.storeId, item.itemCode).subscribe((data: ProductView) => {
      console.log(data);
      this.productView = data;
    })
  }
  prdEdit() {
    console.log("edit");
    this.api.editProduct(this.productView.productID).subscribe((data: ProductEdit) => {
      console.log(data);
      this.varient = data.productVariants;
      setTimeout(() => {
        this.formRef.reset(data.product);
      }, 100);

      this.poptable();
    })
  }
  addvarient() {
    console.log(this.newVarient);
    if (this.newVarient.name != "") {
      this.varient.push(this.newVarient);
      this.newVarient = {
        name: "",
        price: "",
        productID: "",
        productVariantID: ""
      }
    }
  }
  updateProduct(protect: ProductTable) {
    console.log(protect);
    this.protectedit.product = protect;
    this.protectedit.productVariants = [];

    this.protectedit.productVariants = this.varient;
    console.log(this.protectedit);

    this.api.updateProduct(this.protectedit).subscribe((data: ProductTable) => {
      this.protectedit.product = data;
      console.log(this.protectedit);
      if (this.storeImage != null) {
        const extStartIndexImage = this.storeImage.name.lastIndexOf(".");
        const fileExtImage = this.storeImage.name.substring(extStartIndexImage);
        const newFileNameImage = "product_" + this.protectedit.product.itemCode + fileExtImage;

        const formData: FormData = new FormData();
        this.protectedit.product.productImage = newFileNameImage;

        console.log(newFileNameImage);
        formData.append("file", this.storeImage, newFileNameImage);

        this.api.handleFileUpload(formData).subscribe(data => {
          console.log("updated img", data);
          console.log(data);
        });
      }
      this.api.updateProduct(this.protectedit).subscribe((data: ProductEdit) => {
        console.log(data);
        setTimeout(() => {
          this.formRef.reset();
          this.varient = [];
        }, 100);
      });
    });
  }
  deleteVar(item: ProductVariants) {
    if (item.productVariantID == 0) {
      this.varient.splice(this.varient.indexOf(item), 1);
    } else {
      //  this.api.product
    }
  }
  fileSelected(event: any) {
    this.storeImage = event.target.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    fileReader.readAsDataURL(this.storeImage);
    console.log(this.storeImage);
  }
  openFileSelector() {
    this.fileUpload.nativeElement.click();
    console.log('clicked');
  }
}
