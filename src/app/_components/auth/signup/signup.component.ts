import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;

  constructor() { }

  ngOnInit() {
    this.maxDate = moment(new Date());
    this.maxDate.year(this.maxDate.year() - 18);
  }

  onSignUpSubmit(form: NgForm) {
    console.log(form);
  }

}
