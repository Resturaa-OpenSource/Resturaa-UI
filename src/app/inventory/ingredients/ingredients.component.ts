import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { IngredientsTable } from 'src/app/model/model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
  animations: [fade, fadeout]
})
export class IngredientsComponent implements OnInit {
  inglist: boolean = true;
  vdetails: boolean = false;
  ingr: IngredientsTable;
  ingredient: IngredientsTable[] = [];
  ingredientview: IngredientsTable;
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @ViewChild('formRef', { static: false }) formRef: NgForm;
  constructor(private api: ApiserviceService) { }
  popinglist() {
    this.inglist = !this.inglist;
    this.inglist = false;

  }

  ngOnInit() {

    this.api.getIngredients().subscribe((data: IngredientsTable[]) => {
      this.ingredient = data;
      console.log(this.ingredient);
    });
  }

  update(ingredient: IngredientsTable) {

    this.api.updateIngredients(ingredient).subscribe((data: IngredientsTable) => {
      console.log(data);
      ingredient = data;
      sweetAlert("Ingredients Added", "the Item add successfully ", "success");
      this.formRef.reset();
    });
    error => {
      sweetAlert("ERROR", "please try again", "error");
    }

  }
  viewdetails(Item: IngredientsTable) {
    // this.vdetails=!this.vdetails;
    this.inglist = true;
    this.ingr = Item;
    this.ingredientview = Item;

    // this.inglist=!this.inglist;




  }
}
