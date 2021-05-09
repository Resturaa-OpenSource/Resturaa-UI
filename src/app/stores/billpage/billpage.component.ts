import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { fadeout, fade } from 'src/app/animations';
import { BillPage, StoreTable } from 'src/app/model/model';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { NgForm } from '@angular/forms';
import { TempserviceService } from 'src/app/services/tempservice.service';
@Component({
  selector: 'app-billpage',
  templateUrl: './billpage.component.html',
  styleUrls: ['./billpage.component.scss'],
  animations:[
    fade,fadeout
  ]
})
export class BillpageComponent implements OnInit {
  subscription:any;
  bill:BillPage;
  store:StoreTable;
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @ViewChild('formRef', { static: false }) formRef: NgForm;
  constructor(private api:ApiserviceService, private shared:TempserviceService) { }
  storeImage: File;
  imageUrl = 'assets/favicona.png';
  ngOnInit() {
    this.store = this.shared.store;
    this.bill = {
      id:"",
      imageLink:"",
      message:"",
      storeID:"",
      
    }
    this.api.getBill(this.store.storeId).subscribe((data:BillPage) => {
      console.log(data);
      
  });
}

  imageChangedEvent: any = '';
  croppedImage: any = '';
  
  uploadimg()
  {
    // this.show = !this.show 
  // item.message = this.bill.message;
  this.bill.storeID =this.store.storeId;
   console.log(this.bill);
     if(  this.croppedImage != null){
     this.bill.imageLink= this.croppedImage;
     console.log(this.bill);
    this.subscription = this.api.addBill(this.bill).subscribe((data:BillPage) => {
        console.log(data);
        // this.show= !this.show;
        // this.formRef.reset();
      });
  
  }
  
  }


  fileSelected(event: any) {
    this.storeImage = event.target.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.onload = (e: any) => {
      this.imageUrl= e.target.result;
    };
    fileReader.readAsDataURL(this.storeImage);
    console.log(this.storeImage);
  }
  openFileSelector() {
    this.fileUpload.nativeElement.click();
    console.log('clicked');
  }
  
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
}
