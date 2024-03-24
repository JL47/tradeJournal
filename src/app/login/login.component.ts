import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: String;
  password!: String;

  constructor() { }

  ngOnInit(): void {
   
  }

  onSubmit() {
    console.log("Email entered: ", this.email);
    console.log("For Testing purpose only: ", this.password);
  }

}
