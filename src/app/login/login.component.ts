import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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


  //constructor - 
  constructor(private router:Router,private ds:DataService) { }

  //ngOnInint - Life Cyle Hook of angular
  ngOnInit(): void {
  }

  //user defined function

 //login
  login() {
    var acno = this.acno   
    var pswd = this.pswd   
  
    const result = this.ds.login(acno,pswd)
    if(result){
      alert('Login Successful')
      this.router.navigateByUrl('dashboard')
    }
   
  }

  //login - with 2 arg - template reference
  

}
