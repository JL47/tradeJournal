import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  firstName!: String;
  lastName!: String;
  email!: String;
  password!: String;
  country!: String;


  constructor() {}
 
  ngOnInit(): void {
    // this.formTest = this.formBuilder.group({
    //   country: [''],
    //   areaCode: ['']
    // });
    // this.formTest.get('country').valueChanges.subscribe(country => {
    //   const areaCode = this.areaCodes[country];
    //   this.formTest.get('areaCode').setValue(areaCode ? areaCode : '');
    // });
  }
  // onCountryChange(country: string){
  //  this.formBuilder.get['areaCode'].valueChanges.subscribe()
  // }

  onSubmit() {
    console.log('Hello ', this.firstName," ", this.lastName);
    // console.log('Last Name: ', this.lastName);
    console.log('Email: ', this.email);
    console.log('Password', this.password);
    console.log('Country: ', this.country);
  }
}
