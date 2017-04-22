import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Login } from './login';

@NgModule({
  declarations: [
    Login,
  ],
 
  exports: [
    Login
  ]
})
export class LoginModule {}
