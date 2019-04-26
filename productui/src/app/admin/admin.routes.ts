import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';

const adminRoutes: Routes = [
    {
        path :'',
        component : AdminComponent,               
    }
];

export const AdminRouting = RouterModule.forChild(adminRoutes);