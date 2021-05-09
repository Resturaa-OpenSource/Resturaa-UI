import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { TempserviceService } from 'src/app/services/tempservice.service';
import { IngredientsTable, IngredientsMapping } from 'src/app/model/model';

@Component({
  selector: 'app-storetranfer-model',
  templateUrl: './storetranfer-model.component.html',
  styleUrls: ['./storetranfer-model.component.scss']
})
export class StoretranferModelComponent implements OnInit {

  constructor(private api: ApiserviceService, private shared: TempserviceService) { }
  ingrediant: IngredientsTable[] = [];
  ingredientMapping: IngredientsMapping;
  
  @Output()  public myOutput = new EventEmitter<IngredientsMapping>();

  ngOnInit() {
    this.ingredientMapping = {
      id: "",
      ingrediantID: "",
      ingrediantName: "", productID: "", productName: "",
      productVarientID: "",
      totalExpense: "", value: "", varientName: ""
    }
    this.api.getIngredients().subscribe((data: IngredientsTable[]) => {
      this.ingrediant = data;
    })
  }

  viewdetails(details:IngredientsTable) {
    console.log(details);
    this.ingredientMapping.ingrediantID= details.id;
    this.ingredientMapping.ingrediantName = details.name;
    this.ingredientMapping.value = 0;
    this.ingredientMapping.totalExpense = details.unitPrice;
    // this.ingredientMapping./
    console.log(this.ingredientMapping);
  }
  add(){
    this.myOutput.emit(this.ingredientMapping);
  }
}
