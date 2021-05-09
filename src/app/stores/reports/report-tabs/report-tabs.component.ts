import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';

@Component({
  selector: 'app-report-tabs',
  templateUrl: './report-tabs.component.html',
  styleUrls: ['./report-tabs.component.scss'],
  animations:[fade,fadeout]
})
export class ReportTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
