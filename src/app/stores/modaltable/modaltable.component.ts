import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { StoreSeatTable, StoreTable } from 'src/app/model/model';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modaltable',
  templateUrl: './modaltable.component.html',
  styleUrls: ['./modaltable.component.scss']
})
export class ModaltableComponent implements OnInit {
  edit = true;
  store: StoreTable;
  table: StoreSeatTable[]=[];
  @Output() public myOutput = new EventEmitter<StoreSeatTable[]>();
  @ViewChild('formRef', { static: false }) formRef: NgForm;
  constructor(private api: ApiserviceService, private shared: TempserviceService) { }

  ngOnInit() {
    this.store = this.shared.store;
    this.api.getAllStoreSeatTable(this.store.storeId).subscribe((data: StoreSeatTable[]) => {
      this.table = data;
      console.log(this.table);

    });

  }
  update(item: StoreSeatTable) {
    console.log(item)
    this.formRef.reset(item);
  }
  editable(item: StoreSeatTable) {
    // this.edit = !this.edit;
    if (item.storeId == 0 ||item.storeId==null) {
      item.storeId = this.store.storeId;

    }
    console.log(item)
    this.api.addTable(item).subscribe((data: StoreSeatTable) => {
      console.log(data);
      this.api.getAllStoreSeatTable(this.store.storeId).subscribe((data: StoreSeatTable[]) => {
        this.table = data;
        console.log(this.table);
        this.myOutput.emit(this.table);
  
      });
      this.formRef.reset();
      
    },
      (err: HttpErrorResponse) => {
        if (err.error.status === 602) {
          sweetAlert(
            'Table name exists',
            'Hi, A table with this name is already registered for this Store. Please provide another name to this table',
            'error'
          );
        } else {
          sweetAlert(
            'Oops! Failed',
            'We are sorry we were not able to add new table. please try again',
            'error'
          );
        }
      }
    );

  }
  remove(item: StoreSeatTable) {

    sweetAlert("Are you sure you want to delete this?", {
      buttons: ["No", "Yes!"],
    })
      .then((willDelete) => {
        if (willDelete) {
          this.api.deleteTable(item.tableId).subscribe((data) => {
            console.log(data);
            sweetAlert("Deleted!", {
              icon: "success",
            });
            // this.staffview= null;
            console.log(this.table.indexOf(item));
            this.table.splice(this.table.indexOf(item), 1);
          })
        } else {
          sweetAlert("Your file is safe!");
        }
      });
  }

}







