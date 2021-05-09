import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fade, fadeout } from 'src/app/animations';
import { OrderedProductsTable, OrderTable, storeProduct, TagTable } from 'src/app/model/model';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-posproductselection',
  templateUrl: './posproductselection.component.html',
  styleUrls: ['./posproductselection.component.scss'],
  animations: [
    fade, fadeout
  ]
})
export class PosproductselectionComponent implements OnInit {
  popup = false;
  type ="";
  searchText="";
  tags:TagTable;
  order: OrderTable;
  products:storeProduct[] = [];
  show=true;
  productID =0;
  offer=0;
  discount=0;
  service=0;
  productsTemp:storeProduct[]=[];
  constructor(private api: ApiserviceService, private shared: TempserviceService,private router:Router,private websocket:WebsocketService) { }

  ngOnInit() {
    this.order = this.shared.order;
    this.type = this.shared.order.orderType;
    console.log(this.type)
    this.api.getAllStoreProducts(this.shared.store.storeId).subscribe((data:storeProduct[])=>{
      this.products = data;
      Object.assign(this.productsTemp,this.products);
      this.products = data.filter(x=>x.enable==true);
      console.log(data);
    });
  
  }
  allProducts(){
    this.products = this.productsTemp.filter(x=>x.enable==true);
    this.show=true;
  }
  increment(item:OrderedProductsTable){
    item.quantity++;
  }
  decrement(item:OrderedProductsTable){
    item.quantity--;
    if(item.quantity<1){
      item.quantity =1;
    }
  }
  toggle() {
    
    this.popup = !this.popup;
    this.calculate();
  }
  toggleItem(item:storeProduct){
    console.log(item);
    this.popup = !this.popup;
    this.productID = item.productID;
  }
  calculate(){
    this.order.orderTotal = 0;
    this.offer = 0;
    this.service = 0;
    this.discount = 0;
    this.order.grandTotal = 0;

    this.shared.order.products.forEach(e=>{
        this.order.orderTotal= this.order.orderTotal + e.price * e.quantity;
        this.offer = this.offer +(e.price*e.offerValue)/100;
        
    });

    this.order.grandTotal  = this.order.orderTotal- this.offer-this.service - this.discount;
  }
  tag(){
   
    this.api.getAlltags().subscribe((data:TagTable)=>{
     this.tags = data;
      console.log(data);
      this.show = false;
    });
  }
  kot(){
    this.shared.order.orderDate = new Date().toUTCString();
    this.shared.order.status="KOT";
    this.shared.order.storeID = this.shared.store.storeId;
    this.shared.order.orderProCount = this.order.products.length;
      this.api.addNewOrder(this.shared.order).subscribe(data=>{
        console.log(data);
        // this.websocket.sendName("/")
        sweetAlert("ORDER TAKEN","the order successfully uploaded","success");
      },error=>{
        sweetAlert("ERROR","please try again","error");
      })
  }
  cancel(){
    this.router.navigateByUrl('/module/pos/');
  }
  confirmOrder(){
    this.shared.order.orderDate = this.shared.reserve.startTime;
    this.shared.order.status="RESERVED";
    this.shared.order.storeID = this.shared.store.storeId;
    this.shared.order.orderProCount = this.order.products.length;
      this.api.addNewOrder(this.shared.order).subscribe((data:OrderTable)=>{
        console.log(data);
        this.shared.reserve.orderId = data.orderNumber;
        this.api.addReservationTable(this.shared.reserve).subscribe(data=>{
          this.router.navigateByUrl('/module/pos/');
          sweetAlert("RESERVATION COMPLETE","The reservation is complete","success");
        })
      },error=>{
        sweetAlert("ERROR","please try again","error");
      })
    
  }
  closeorder(){
    if(this.order.products.length>0){
    sweetAlert({
      title: "CLOSE THIS ORDER?",
      text: "Do you want to close this order?",
      icon: "warning",
      // buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
       
        this.router.navigateByUrl("/module/pos/Customersection")
      } else {
        sweetAlert("error");
      }
    });
  }
  
  }
  tagSelected(tagid){
      this.api.getAllProductByTagId(tagid).subscribe((data:number[])=>{
        console.log(data.length);
        this.show = true;
        this.products  =this.productsTemp.filter(x=>data.includes(x.productID));
          console.log(this.products);
          this.products = this.products.filter(x=>x.enable==true);
        if(this.products.length==0){
          this.show=false;
          this.products = null;
          console.log("inside thefor ");
        }else{
          
          
        }
       
      })
  }
  delete(item){
    this.shared.order.products.splice(this.order.products.findIndex(item =>item.productVariantID),1)
  }
  
}