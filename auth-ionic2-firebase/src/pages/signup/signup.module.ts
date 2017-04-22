import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Signup } from './signup';

@NgModule({
  declarations: [
    Signup,
  ],
 
  exports: [
    Signup
  ]
})
export class SignupModule {}
