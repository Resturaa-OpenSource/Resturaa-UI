import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreTable, StaffTable, OrderTable, ReservationTable } from '../model/model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempserviceService {


  store: StoreTable;
  staff: StaffTable;
  order: OrderTable;
  reserve: ReservationTable;
  tittle = "RESTURA";
  private subject = new Subject<any>();
  private json = new Subject<any>();

  reservationView: any;
  constructor(private http: HttpClient) {
    this.initOrder();
    this.staffs();
    this.initStore();

  }
  sendMessage(message: string) {
    this.subject.next({ text: message });
  }
  sendJson(message : string){
    this.json.next({text:message})
  }

  getJson():Observable<any>{
    return this.json.asObservable();
  }
  
  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  initStore() {
    this.store = {
      country: "IN",
      createdDate: null,
      email: "ganvitha@gmail.com",
      imageLink: "https://img.icons8.com/color/48/000000/ferrari-land.png",
      password: "2222",
      state: "Karnataka",
      status: false,
      storeAddress1: "Hsr  Layout",
      storeAddress2: "Bangalore",
      storeCounter: 4,
      storeId: 1111,
      storeManager: "RINTU",
      storeName: "GANVITHA",
      storePincode: "560102",
      storeTaxinfo: "GST1100SGS",
      storeType: null,
      subscription: "MONTHLY",

    }
  }
  initOrder() {
    this.order = {
      customerId: "",
      customerName: "",
      customerPhone: "",
      deliveryTime: "",
      deviceID: "",
      grandTotal: "",
      orderDate: "",
      orderEndTime: "",
      orderNumber: "",
      orderProCount: "",
      orderTotal: "",
      orderType: "",
      paymentMode: "",
      products: [],
      staffUsername: "",
      status: "",
      storeID: "",
      tables: [],

    }
  }
  staffs() {
    this.staff = {
      country: "",
      staffAddress1: "",
      staffAddress2: "",
      staffDOB: "",
      staffEmail: "",
      staffGender: "",
      staffID: "",
      staffImage: "",
      staffJobTittle: "",
      staffName: "No NAME",
      staffPassword: "",
      staffPermission: "",
      staffPh: "989898989898",
      staffPincode: "",
      staffUserName: "",
      staffjoinedDate: "",
      state: ""
    }
  }

}
