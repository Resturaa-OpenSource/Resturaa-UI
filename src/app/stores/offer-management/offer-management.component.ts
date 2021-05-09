import { Component, OnInit, ViewChild } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { OfferTable } from 'src/app/model/model';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { NgForm } from '@angular/forms';
import sweetAlert from 'sweetalert';

@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  styleUrls: ['./offer-management.component.scss'],
  animations: [
    fade, fadeout
  ]
})
export class OfferManagementComponent implements OnInit {
  offer = true;
  offerView: OfferTable;
  offerList: OfferTable[] = [];
  tittle ="Create New Offer"
  show=false;
  @ViewChild('formRef',{static:false}) formRef: NgForm;

  constructor(private api: ApiserviceService, private shared: TempserviceService) { }

  ngOnInit() {
    this.fetchOffer();
  }
  viewoffer(item) {
    this.offer = true;
    this.offerView = item;
    

  }
  clear(){
    setTimeout(() => {
      this.formRef.reset();
    }, 30 );
  }
  fetchOffer() {
    this.api.getAllOffers().subscribe((data: OfferTable[]) => {
      console.log(data);
      this.offerList = data;
    })
  }
  edit(item: OfferTable) {
    this.tittle = "Edit Offer"
    this.offer = false;
    setTimeout(() => {
      this.formRef.reset(item);
    }, 100);
    
  }
  updateOffer(item: OfferTable) {

    item.storeID = this.shared.store.storeId;
    this.show  = true;
    console.log(item);
    this.api.addNewOffer(item).subscribe((data: OfferTable) => {
      console.log(data);
      this.show = false;
      this.fetchOffer();
    });
  }
  changeStatus(item,event){
    console.log(item, event);
    this.api.addNewOffer(item).subscribe((data: OfferTable) => {
      console.log(data);
      this.show = false;
      this.fetchOffer();
    });
  }
  delete(item:OfferTable){
    sweetAlert("Are you sure you want to delete this?", {
      buttons: ["No", "Yes!"],
    })
      .then((willDelete) => {
        if (willDelete) {
          this.api.deleteOffer(item.offerId).subscribe((data) => {
            sweetAlert("Deleted!", {
              icon: "success",
            });
            this.offerView = null;
            console.log(this.offerList.indexOf(item));
            this.offerList.splice(this.offerList.indexOf(item), 1);
          })
        } else {
          // sweetAlert("Your file is safe!");
        }
      });
  }
}
