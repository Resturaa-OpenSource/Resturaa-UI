import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fadeout, fade } from 'src/app/animations';
import { StaffTable } from 'src/app/model/model';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { NgForm } from '@angular/forms';
import sweetAlert from 'sweetalert';

@Component({
  selector: 'app-staffmanagement',
  templateUrl: './staffmanagement.component.html',
  styleUrls: ['./staffmanagement.component.scss'],
  animations:[
    fade,fadeout
  ]
})
export class StaffmanagementComponent implements OnInit {
popstaffview=true;
subscription: any;
show = false;
searchText="";
// storeImage: File;
viewstaff=true;
staff:StaffTable[]=[];
staffview:StaffTable;
@ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
@ViewChild('formRef', { static: false }) formRef: NgForm;
  constructor(private api:ApiserviceService) { }

  ngOnInit() {
    this.api.getListofstaff().subscribe((data:StaffTable[]) => {
      this.staff=data;
      console.log(this.staff);
      
    });
  }

popstaff(item:StaffTable){
  this.popstaffview=!this.popstaffview;
  this.popstaffview= false;
  setTimeout(() => {
    this.formRef.reset(item);
  }, 100);
}


status(item:StaffTable){
  this.popstaffview= true;
  this.staffview=item;

 
}


delete(item:StaffTable)
{
  sweetAlert("Are you sure you want to delete this?", {
    buttons: ["No", "Yes!"],
  })
    .then((willDelete) => {
      if (willDelete) {
        this.api.deleteByID(item.staffID).subscribe((data) => {
          sweetAlert("Deleted!", {
            icon: "success",
          });
          this.staffview= null;
          console.log(this.staff.indexOf(item));
          this.staff.splice(this.staff.indexOf(item), 1);
        })
      } else {
        sweetAlert("Your file is safe!");
      }
    });
}


view(item){
  
  }
updatestaff(staff:StaffTable)
{
  this.show = !this.show 
  console.log(staff);
if( this.storeImage != null){

  this.api.addNewUser(staff).subscribe((data:StaffTable) => {
    console.log(data);
    staff = data;
    const extStartIndexImage = this.storeImage.name.lastIndexOf(".");
    const fileExtImage = this.storeImage.name.substring(extStartIndexImage);
    const newFileNameImage = "staff_" + staff.staffID+ fileExtImage;

    const formData: FormData = new FormData();
    staff.staffImage= newFileNameImage;

    console.log(newFileNameImage);
    formData.append("file", this.storeImage, newFileNameImage);

    this.subscription = this.api.handleFileUpload(formData).subscribe(data => {
      console.log("updated img",data);
      console.log(data);
    });
    this.subscription = this.api.addNewUser(staff).subscribe((data:StaffTable) => {
        console.log(data);
        this.show= !this.show;
        this.staff.push(data);
        this.formRef.reset();
        
      });
    });
  }
  else{
    this.show= !this.show;

    sweetAlert("image did not select","select your image","error")
  }
  
}
storeImage: File;
imageUrl = 'assets/favicona.png';

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

}
