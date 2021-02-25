import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {

  // login = {
  //   username: "",
  //   password: ""
  // }

  constructor() { }
  
  ngOnInit() {}

  // onLogin(form: NgForm) {
  //   if ((this.login.username === this.loginData.username) && (this.login.password === this.loginData.password)) {
  //     this.userData.login(this.login.username);
  //     this.router.navigateByUrl('/admin/home');
  //   }
  }

