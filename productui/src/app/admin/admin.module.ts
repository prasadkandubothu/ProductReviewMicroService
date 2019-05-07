import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routes';
//import { ProductSearchPipe } from '../shared/pipes/productsearch.pipe.';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    FormsModule,
    SharedModule
  ],
  declarations: [AdminComponent, AddproductsComponent, DashboardComponent]
})
export class AdminModule { }
