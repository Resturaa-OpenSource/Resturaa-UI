import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { IngredientsTable } from 'src/app/model/model';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss'],
  animations:[fade,fadeout]
})
export class SkuComponent implements OnInit {
  searchText="";
  ingredient:IngredientsTable;
  constructor(private api:ApiserviceService) { }

  ngOnInit() {

 this.api.getIngredients().subscribe((data:IngredientsTable) => {
    this.ingredient= data;
    console.log(this.ingredient);
 });
  }

}
