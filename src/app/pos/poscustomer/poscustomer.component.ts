import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { CustomerTable } from 'src/app/model/model';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-poscustomer',
  templateUrl: './poscustomer.component.html',
  styleUrls: ['./poscustomer.component.scss'],
  animations:[
    fade,fadeout
  ]
})
export class PoscustomerComponent implements OnInit {
  cus:CustomerTable;
cust:CustomerTable[] = [];
searchText="";
  subscription: any;
  toggle:boolean= true;
  
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @ViewChild('formRef', { static: false }) formRef: NgForm;
  
  constructor(private api: ApiserviceService, private shared: TempserviceService) { }

  ngOnInit() {
    this.api.getAllUsers().subscribe((data: CustomerTable[]) => {
      this.cust = data;
      console.log(this.cust);
    });

  }

  viewDetils(item:CustomerTable){
  console.log(item);
  this.cus=item; 
  // this. toggle=!this.toggle;
  this.toggle=false;
 
  }
  addcus(cust: CustomerTable) {

    console.log(cust);
    if (this.storeImage != null) {

      this.api.addNewCustomer(cust).subscribe((data: CustomerTable) => {
        console.log(data);
        cust = data;
        const extStartIndexImage = this.storeImage.name.lastIndexOf(".");
        const fileExtImage = this.storeImage.name.substring(extStartIndexImage);
        const newFileNameImage = "tag_" + cust.custID + fileExtImage;

        const formData: FormData = new FormData();
        cust.custImage = newFileNameImage;

        console.log(newFileNameImage);
        formData.append("file", this.storeImage, newFileNameImage);

        this.subscription = this.api.handleFileUpload(formData).subscribe(data => {
          console.log("updated img", data);
          console.log(data);
        });
        this.subscription = this.api.addNewCustomer(cust).subscribe((data: CustomerTable) => {
          console.log(data);
          setTimeout(() => {
            this.cust.push(data);
            this.formRef.reset();
            this.imageUrl = 'assets/favicona.png';
          });
        });
      });
    }

  }
  storeImage: File;
  imageUrl = 'assets/icons8-user-96.png';

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
