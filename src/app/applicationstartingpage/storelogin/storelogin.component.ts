import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { Router } from '@angular/router';
import { StoreTable } from 'src/app/model/model';
import { TempserviceService } from 'src/app/services/tempservice.service';

@Component({
  selector: 'app-storelogin',
  templateUrl: './storelogin.component.html',
  styleUrls: ['./storelogin.component.scss']
})
export class StoreloginComponent implements OnInit {

  store:StoreTable;
  subscription:any;
  show = false;
  constructor(private api:ApiserviceService,private router:Router,private sharedData:TempserviceService) { }

  ngOnInit() {
    
  }
  login(store:StoreTable){
    // console.log(store);
    this.show = !this.show 
    this.subscription = this.api.signin(store).subscribe((data:StoreTable)=>{
      console.log(data);
      this.sharedData.store= data;
      console.log(this.subscription);
      this.show = !this.show 

      this.router.navigateByUrl('/userlogin')
      
  },error=>{
    setTimeout(() => {
      this.show = !this.show 
    }, 1000);
   
  });

  console.log(this.subscription);
}
}

