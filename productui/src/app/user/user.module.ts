import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import  { UserRouting } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    UserRouting
  ],
  declarations: [UserComponent]
})
export class UserModule { }
