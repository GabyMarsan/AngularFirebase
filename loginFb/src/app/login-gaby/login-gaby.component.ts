import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-gaby',
  templateUrl: './login-gaby.component.html',
  styleUrls: ['./login-gaby.component.scss']
})
export class LoginGabyComponent implements OnInit {

  loginForm?: FormGroup;
  constructor() { }

  ngOnInit(){
    this.loginForm = new FormGroup(
      {
        email : new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required, Validators.minLength(6)])
      }
    );
  }
  onLogin(){

  }

}
