import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: String;
  password!: String;
  // private _trainUrl = "https://raw.githubusercontent.com/datameet/railways/master/trains.json";
  // items: any;

  constructor() { }

  ngOnInit(): void {
  //  this.http.get(this._trainUrl).subscribe(res => {
  //   this.items = res;
  //   console.log(this.items);
  //  })
  }

  onSubmit() {
    console.log("Email entered: ", this.email);
    console.log("For Testing purpose only: ", this.password);
    // this.http.get(this._trainUrl).subscribe(res => {
    //   this.items = res;
    //   console.log(this.items);
    //  })
  }
  /*
  login(username: string, password: string): void {
    this.userService.checkUser(username, password).subscribe(user => {
      if (user) {
        console.log('User found:', user);
        // Proceed with login
      } else {
        console.log('User not found');
        // Handle login failure
      }
    });
  }*/
}
