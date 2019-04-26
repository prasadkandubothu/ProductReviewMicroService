import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';

const userRoutes: Routes = [
    {
        path :'',
        component : UserComponent,               
    }
];

export const UserRouting = RouterModule.forChild(userRoutes);