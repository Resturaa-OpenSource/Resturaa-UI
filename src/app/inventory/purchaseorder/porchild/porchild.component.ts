import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { purchaseOderListTable, purchaseOderTable } from 'src/app/model/model';

@Component({
  selector: 'app-porchild',
  templateUrl: './porchild.component.html',
  styleUrls: ['./porchild.component.scss']
})
export class PorchildComponent implements OnInit {

  constructor(private api:ApiserviceService) { }

  
 @Output() public porchange = new EventEmitter<purchaseOderListTable>();
 @Input() purchaseOder:purchaseOderTable;
  ngOnInit() {


  }
  openpor(){
    console.log(this.purchaseOder);
    
this.porchange.emit();
  }
  update()
  {
 
  this.api.addPOR( this.purchaseOder ).subscribe((data:purchaseOderTable) => {
  this.purchaseOder=data;
  console.log( this.purchaseOder );
});
}
}
