import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  enrollDetails: any = {};
  showEnrollSection:Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onchangeCourse(value){
    console.info("Value :::: ", value.value);
  }

  searchCourse(value) {
    console.info("Value :::: ", value.value);
    if(value.value == "") {
      this.showEnrollSection = false;
      return false;
    }
    this.showEnrollSection = true;
  }

  enrollCourse(form) {
      console.log(form, " || ", this.enrollDetails)
  }

}
