import { Injectable } from "@angular/core";
import * as Stomp from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { Socket } from "dgram";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class WebsocketService {
  stompClient = null;
  public socketReconn: Subject<string>=new Subject<string>();
  isConnected: boolean;
  constructor() {
    this.isConnected = false;
  }

  connect() {
    const socket = new SockJS("/auri");
    console.log(socket);
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect(
      {},
      function(frame) {
        console.log("Connected: " + frame);
        _this.isConnected = true;
        _this.socketReconn.next("connected");

      },
      () => {
        _this.isConnected = false;
        _this.stompClient = null;
        console.log("Reconnecting .....", this.isConnected);
        this.reconnect();
      }
    );

  }
  reconnect() {
    let reconInv = setInterval(() => {
      console.log("intervel is");

      const socket = new SockJS("/auri");
      console.log(socket);
      this.stompClient = Stomp.over(socket);
      let _this=this
      this.stompClient.connect({},(frame)=> {
        console.log("nested connection: " + frame);
        _this.isConnected = true;
        _this.socketReconn.next("connected");
        clearInterval(reconInv);
        //reconnected
        _this.socketReconn.next("connected");
      }, () => {
          this.reconnect();
          clearInterval(reconInv);
          console.log("messaging");
      });
    }, 5000);
  }
  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    this.isConnected = false;
    // this.setConnected(false);
    console.log("Disconnected!");
  }

  sendName(topic: string, data) {
    this.stompClient.send(topic, {}, data);
  }
  
}
