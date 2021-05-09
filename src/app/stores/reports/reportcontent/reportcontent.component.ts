import { Component, OnInit } from '@angular/core';
import { fade, fadeout } from 'src/app/animations';
import { Moment } from 'moment';

@Component({
  selector: 'app-reportcontent',
  templateUrl: './reportcontent.component.html',
  styleUrls: ['./reportcontent.component.scss'],
  animations:[fade,fadeout]
})
export class ReportcontentComponent implements OnInit {
  selected: {start: Moment, end: Moment};
  constructor() { }

  ngOnInit() {
  }

}
