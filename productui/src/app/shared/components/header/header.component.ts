import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationModel } from '../../models/AuthenticationModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth : AuthenticationModel) { }

logoutUser(){
  this.auth.logout();
}
  ngOnInit() {
  }

}
