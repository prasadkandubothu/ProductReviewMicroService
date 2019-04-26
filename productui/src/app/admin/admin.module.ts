import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
