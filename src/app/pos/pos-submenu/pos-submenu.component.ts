import { Component, OnInit } from '@angular/core';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { ChipCount } from 'src/app/model/model';

@Component({
  selector: 'app-pos-submenu',
  templateUrl: './pos-submenu.component.html',
  styleUrls: ['./pos-submenu.component.scss']
})
export class PosSubmenuComponent implements OnInit {


  title ="";
  count:ChipCount;
  constructor(private shared:TempserviceService) { }

  ngOnInit() {
  }
  titleChange(item:string){
 
    this.shared.sendMessage(item.toUpperCase());
    this.shared.initOrder();
    this.title  = item;
    this.shared.getJson().subscribe(data=>{
      console.log(data);
      this.count = <ChipCount>JSON.parse(data.text);
    })
    // this.shared.reserve
  }

}
