import { Component, OnInit } from '@angular/core';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { StoreTable, StaffTable } from 'src/app/model/model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  store:StoreTable;
  staff:StaffTable;
  title:any;
  constructor(private sharedData:TempserviceService, private route: ActivatedRoute,private location:Location ) { }

  ngOnInit() {
    this.store = this.sharedData.store;
    this.staff = this.sharedData.staff;
    this.title = this.sharedData.tittle;
    this.sharedData.getMessage().subscribe(message => { 
      console.log(message)
      this.title = message.text; });
  }
  goBack(){
    this.location.back();
  }
  alert(){
    sweetAlert({
      title:'LOGOUT',
      text:'Are you sure to logout?',
      icon:'warning'
    })
  }

}
