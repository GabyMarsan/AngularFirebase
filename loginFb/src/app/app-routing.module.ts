import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { LoginGabyComponent } from './login-gaby/login-gaby.component';

const routes: Routes = [
  { path: '', component:AppComponent,
  children : [
    {
      path: '',
      component: LoginGabyComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
