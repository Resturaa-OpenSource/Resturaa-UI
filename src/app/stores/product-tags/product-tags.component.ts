import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { TagTable, ProductTable, TagMappingTable, StoreTable } from 'src/app/model/model';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { NgForm } from '@angular/forms';
import { TempserviceService } from 'src/app/services/tempservice.service';

@Component({
  selector: 'app-product-tags',
  templateUrl: './product-tags.component.html',
  styleUrls: ['./product-tags.component.scss'],
  animations: [
    fade, fadeout
  ]
})
export class ProductTagsComponent implements OnInit {
  
  tagg = true;
  tagpopup;
  tagView: TagTable;
  taglist: ProductTable;
  tagmapp: TagMappingTable;
  subscription: any;
  tag: TagTable[] = [];
  tagpro: ProductTable[];
  tagmap: TagMappingTable[];
  modelallprd:ProductTable[]=[];
  store: StoreTable;
  prdlist: ProductTable[]= [];
  productImage:"";
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @ViewChild('formRef', { static: false }) formRef: NgForm;
  // tagpopdown=true;
  constructor(private api: ApiserviceService, private shared: TempserviceService) { }

  ngOnInit() {
    this.api.getAlltags().subscribe((data: TagTable[]) => {
      this.tag = data;
      console.log(this.tag);
    });
 
    
  }
  addmore(){
  this.store= this.shared.store;
    this.api.getAllProducts().subscribe((data: ProductTable[]) => {
      this.tagpro = data;
      
      console.log(this.tagpro );
      Object.assign(this.prdlist,this.tagpro );
      this.product();
  
    });
  }
  product() {
    this.api.getAllProductByTagId(this.tagView.tagID).subscribe((data:number[]) => {
      this.tagpro = this.prdlist.filter(x=>data.includes(x.itemCode));
      this.modelallprd= this.prdlist.filter(x=>!data.includes(x.itemCode));
    });
  }
  addProduct(item:ProductTable){
    this.api.addTagProduct(this.tagView.tagID,item.itemCode).subscribe((data)=>{
      console.log(data);
      this.product();
    });
  }
  remove(item:ProductTable){
    console.log(item);
    this.api.deleteBytpId(this.tagView.tagID,item.itemCode).subscribe((data) => {
      console.log(data);
      this.product();
  });
}
delete(item:TagTable){
  sweetAlert("Are you sure you want to delete this?", {
    buttons: ["No", "Yes!"],
  })
    .then((willDelete) => {
      if (willDelete) {
        this.api.deleteTag(this.tagView.tagID).subscribe((data) => {
          sweetAlert("Deleted!", {
            icon: "success",
          });
          this.tagView = null;
          console.log(this.tag.indexOf(item));
          this.tag.splice(this.tag.indexOf(item));
        })
      } else {
        // sweetAlert("Your file is safe!");
      }
    });
}

  
  viewoffer(tag) {
    // this.tagg = true;
    this.tagView = tag;
    this.api.getTaggedProduct(this.tagView.tagID).subscribe((data: ProductTable[]) => {
      this.tagpro= data;
      console.log(data);
    });
  }
  clear() {
    setTimeout(() => {
      this.formRef.reset();
    }, 30);
  }

  addtag(tag: TagTable) {

    console.log(tag);
    if (this.storeImage != null) {

      this.api.addNewTag(tag).subscribe((data: TagTable) => {
        console.log(data);
        tag = data;
        const extStartIndexImage = this.storeImage.name.lastIndexOf(".");
        const fileExtImage = this.storeImage.name.substring(extStartIndexImage);
        const newFileNameImage = "tag_" + tag.tagID + fileExtImage;

        const formData: FormData = new FormData();
        tag.imageID = newFileNameImage;

        console.log(newFileNameImage);
        formData.append("file", this.storeImage, newFileNameImage);

        this.subscription = this.api.handleFileUpload(formData).subscribe(data => {
          console.log("updated img", data);
          console.log(data);
        });
        this.subscription = this.api.addNewTag(tag).subscribe((data: TagTable) => {
          console.log(data);
          setTimeout(() => {
            this.tag.push(data);
            this.formRef.reset();
            this.imageUrl = 'assets/favicona.png';
          });
        });
      });
    }

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
  
  // addmore() {
  // this.api.getAllProducts().subscribe((data: ProductTable[]) => {
  //   this.prd = data;
  //   console.log(this.prd);
  //   Object.assign(this.prdlist,this.prd);
  //   this.product();

  // });
  
  

  

}
