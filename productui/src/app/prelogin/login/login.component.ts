import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationModel } from '../../shared/models/AuthenticationModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


username;
password;
userData = {'username': 'Admin'};
token:string='00000-test-jwt-token-0000';

  constructor(private router : Router, private auth: AuthenticationModel) { }

  ngOnInit() {
  }
  
  
  login(loginForm : NgForm) : void {
    this.username=loginForm.value.username;
    this.password=loginForm.value.password;    
    if(this.username == "admin" && this.password == "admin"){
      console.log("admin ..logged in");
      this.auth.setUserData(this.userData);
      this.auth.setToken(this.token);
      this.router.navigateByUrl("/admin");
    }
    else{
      console.log("user ..logged in");
      this.auth.setUserData(this.userData);
      this.auth.setToken(this.token);
      this.router.navigateByUrl("/user");
      
    }
        
  }

}
