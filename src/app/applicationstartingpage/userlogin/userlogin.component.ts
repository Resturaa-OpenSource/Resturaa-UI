import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { Router } from '@angular/router';
import { StaffTable, LoginRequest } from 'src/app/model/model';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  user:LoginRequest
  subscription:any;
  lottieConfig:Object;
  anim;
  constructor(private api:ApiserviceService,private router:Router) {
    this.lottieConfig = {
      path: 'assets/animation/3139-microwave-oven.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
   }

  ngOnInit() {
  }
  handleAnimation(anim: any) {
    this.anim = anim;
  }
  ulogin(user:LoginRequest){
    // console.log(store);
    this.subscription = this.api.authenticateUser(user).subscribe((data)=>{
      console.log(data);
      // this.api.staff= data;
      
      this.router.navigateByUrl('/pos')
      
  });
}
}


