import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-gaby',
  templateUrl: './login-gaby.component.html',
  styleUrls: ['./login-gaby.component.scss']
})
export class LoginGabyComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit(){
  }

  loginForm: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onLogin(){
    if (!this.loginForm.valid){
      return;
    }
    console.log(this.loginForm.value);
  }

}
