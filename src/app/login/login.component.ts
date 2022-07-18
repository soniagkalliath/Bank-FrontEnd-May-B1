import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //property / variable

  aim = 'Your Perfect banking Partner'

  account = 'Enter your account here'

  acno = ''
  pswd = ''

  //data base - bank
  userDetails: any = {
    1000: { acno: 1000, username: 'Neer', password: 1000, balance: 5000 },
    1001: { acno: 1001, username: 'Laisha', password: 1001, balance: 4000 },
    1002: { acno: 1002, username: 'Vyom', password: 1002, balance: 6000 }
  }

  //constructor - 
  constructor() { }

  //ngOnInint - Life Cyle Hook of angular
  ngOnInit(): void {
  }

  //user defined function

  //acnoChange()
  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno);
  }

  //pswdChange()
  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd);
  }

  //login
  // login() {
  //   var acno = this.acno
  //   var pswd = this.pswd

  //   let userDetails = this.userDetails

  //   if (acno in userDetails) {
  //     if (pswd == userDetails[acno]['password']) {
  //       alert('Login Successful')
  //     }
  //     else {
  //       alert('Incorrect password')
  //     }
  //   }
  //   else {
  //     alert('User doesnot exist!!')
  //   }
  // }

  //login - with 2 arg - template reference
  login(a:any,p:any) {
    // console.log(a.value);
    
    var acno = a.value
    var pswd = p.value

    let userDetails = this.userDetails

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        alert('Login Successful')
      }
      else {
        alert('Incorrect password')
      }
    }
    else {
      alert('User doesnot exist!!')
    }
  }

}
