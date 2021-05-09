import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { StoreSeatTable, OrderTable, SelectedTable } from 'src/app/model/model';
import { TempserviceService } from 'src/app/services/tempservice.service';
import swal from 'sweetalert';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-tableselection',
  templateUrl: './tableselection.component.html',
  styleUrls: ['./tableselection.component.scss'],
  animations: [
    fade, fadeout
  ]
})
export class TableselectionComponent implements OnInit {

  seat: StoreSeatTable[] = [];
  seatFinal: StoreSeatTable[] = [];
  order: OrderTable;
  seats: any; searchText;
  constructor(private api: ApiserviceService, private route: Router, private shared: TempserviceService) { }

  ngOnInit() {
    this.order = this.shared.order;
    var d1;
    if (this.order.orderEndTime != "") {
      d1 = this.order.orderEndTime;
    } else {
      d1 = new Date();
    }
    console.log(d1);
    var d2 = new Date(d1);
    d2.setHours(d1.getHours() + 1);
    this.api.getAvailableTables(this.shared.store.storeId, d1.toUTCString(), d2.toUTCString()).subscribe((data: StoreSeatTable[]) => {
      console.log(data);
      this.seat = data;
      // this.seatFinal.c this.seat;
      Object.assign(this.seatFinal, this.seat);
      console.log(this.seat);
    });
  }
  selected(item: StoreSeatTable) {
    var seats: SelectedTable;
    seats = {
      seatCount: item.seatCount - item.seatOccupied,
      max: item.seatCount - item.seatOccupied,
      tableID: item.tableId,
      tableName: item.tableName
    }
    const index = this.seat.indexOf(item);
    this.seat.splice(index, 1);

    this.order.tables.push(seats)

  }
  increment(pro: SelectedTable) {
    if (pro.seatCount < pro.max) {
      pro.seatCount += 1;
    }
  }

  decrement(pro: SelectedTable) {
    if (pro.seatCount > 1) {
      pro.seatCount -= 1;

    }

  }
  delete(item: SelectedTable) {
    const index = this.order.tables.indexOf(item);
    this.order.tables.splice(index, 1);
    var ind = this.seatFinal.findIndex(x => x.tableId == item.tableID);
    console.log(this.seatFinal, ind);
    this.seat.push(this.seatFinal[ind])

  }
  next() {
    console.log(this.shared.order);
    if (this.order.tables.length > 0) {
      // this.shared.order.tables
      this.route.navigateByUrl("/module/pos/pselection");
    }
  }
}
