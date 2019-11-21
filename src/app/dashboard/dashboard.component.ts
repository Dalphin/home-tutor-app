import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit() {
  }

  searchCourse(value) {
    console.info("Value :::: ", value.value);
  }

  enrollCourse(value) {

  }

}
