import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import  { UserRouting } from './user.routes';
//import { ProductSearchPipe } from '../shared/pipes/productsearch.pipe.';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    UserRouting,
    SharedModule
  ],  
  declarations: [UserComponent]
})
export class UserModule { }
