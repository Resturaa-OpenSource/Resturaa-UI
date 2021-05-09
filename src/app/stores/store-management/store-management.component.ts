import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fadeout, fade } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { StoreTable, ProductTable, StoreSeatTable } from 'src/app/model/model';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.scss'],
  animations: [
    fade, fadeout
  ]
})

export class StoreManagementComponent implements OnInit {
  modalpopup = false;
  store: StoreTable;
  // prd: ProductTable[];
  // prdlist: ProductTable[];
  // table: StoreSeatTable[];
  editable = true;
  prd: ProductTable[] = [];
  prdlist: ProductTable[] = [];
  table: StoreSeatTable[] = [];
  subscription: any;
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @ViewChild('formRef', { static: false }) formRef: NgForm;
  constructor(private api: ApiserviceService, private datePipe:DatePipe,private shared: TempserviceService) { }

  ngOnInit() {
    this.store = this.shared.store;
    this.api.getAllProducts().subscribe((data: ProductTable[]) => {
      this.prd = data;
      Object.assign(this.prdlist, this.prd);
      console.log(this.prd);
      this.product();

    });
    this.api.getAllStoreSeatTable(this.store.storeId).subscribe((data: StoreSeatTable[]) => {
      this.table = data;
      console.log(this.table);
    })
  }
  editdetails() {

    this.editable = !this.editable;
    // this.shared.store.createdDate = this.datePipe.transform(this.shared.store.createdDate ,"dd/MM/yyyy");
    setTimeout(() => {
      console.log(this.shared.store);
      this.formRef.reset(this.shared.store)
    }, 500);
  }

  product() {
    this.api.getAllProductByStoreId(this.shared.store.storeId).subscribe((data: number[]) => {
      this.prd = this.prdlist.filter(x => data.includes(x.itemCode))
      console.log(this.prd, data);
    })
  }
  viewproducts() {
    this.modalpopup = !this.modalpopup;
  }

  edit(item: StoreTable) {
    console.log(item);

  }
  updatetable(event) {
    console.log(event);
    this.table = event;
  }
  updateproduct(event) {
    console.log(event);
    this.prd = event;

  }


  editupdatestore(store: StoreTable) {
    console.log(store);


    this.api.addNewStore(store).subscribe((data: StoreTable) => {
      console.log(data);
      store = data;
      if (this.storeImage != null) {
        const extStartIndexImage = this.storeImage.name.lastIndexOf(".");
        const fileExtImage = this.storeImage.name.substring(extStartIndexImage);
        const newFileNameImage = "staff_" + store.storeId + fileExtImage;

        const formData: FormData = new FormData();
        store.imageLink = newFileNameImage;

        console.log(newFileNameImage);
        formData.append("file", this.storeImage, newFileNameImage);

        this.subscription = this.api.handleFileUpload(formData).subscribe(data => {
          console.log("updated img", data);
          console.log(data);
        });
      
      this.subscription = this.api.addNewStore(store).subscribe((data: StoreTable) => {
        console.log(data);
        // this.show= !this.show;
        this.formRef.reset();
        this.shared.store = data;
        this.store=data;
      });
    }
    else{
      this.formRef.reset();
      this.shared.store = data;
      this.store=data;
    }
    });



  }
  storeImage: File;
  imageUrl = 'assets/favicona.png';

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