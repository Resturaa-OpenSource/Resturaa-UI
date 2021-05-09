import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { ChipCount } from 'src/app/model/model';

@Component({
  selector: 'app-menucontent',
  templateUrl: './menucontent.component.html',
  styleUrls: ['./menucontent.component.scss']
})
export class MenucontentComponent implements OnInit {
  sub_ordercount: any;

  constructor(private websocket:WebsocketService,private shared:TempserviceService) { }

  ngOnInit() {
    if (!this.websocket.isConnected) {
      console.log("inside");
      this.websocket.connect();
    }
    this.subscribeTopic();
   
  }
  ngOnDestroy(){
    console.log("distroyed");
    if (this.sub_ordercount) {
      this.sub_ordercount.unsubscribe();
    }
  }
  
  subscribeTopic() {
    var _this = this;
      this.websocket.socketReconn.subscribe(() => {
      if (this.websocket.isConnected) {
        this.sub_ordercount = this.websocket.stompClient.subscribe(
          "/topic/ordercount/"+this.shared.store.storeId,
          function(hello) {
            console.log(hello.body);
            // _this.chipCount = <ChipCount>JSON.parse(hello.body);
            _this.shared.sendJson(hello.body);
          }
        );
        // this.sub_print=this.websocket.stompClient.subscribe("/topic/print/" + this.selectedStore.storeId), (data) => {
        //   console.log(data);
        // }
       
      }
      console.log("sub is :", this.sub_ordercount);
    });
  }
}
