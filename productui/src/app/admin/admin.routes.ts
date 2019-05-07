import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const adminRoutes: Routes = [
    {
        path :'',
        component : AdminComponent,
        children:[
            {
                path :'',
                component : DashboardComponent,
                pathMatch:'full'
            },
             {
                path : 'add',
                component : AddproductsComponent
            }
                    
        ]               
    }
];

export const AdminRouting = RouterModule.forChild(adminRoutes);