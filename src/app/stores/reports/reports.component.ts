import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  animations:[fade,fadeout]
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
