import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

const AppRoutes: Routes=[
    {
        path:'',
       redirectTo:'prelogin',
       pathMatch:'full'

    },
    {
        path :'prelogin',
        loadChildren: './prelogin/prelogin.module#PreloginModule'
    },
    {
        path:'admin',
        loadChildren:'./admin/admin.module#AdminModule'
    },
     {
        path:'user',
        loadChildren:'./user/user.module#UserModule'
    }

]

export const AppRouting = RouterModule.forRoot(AppRoutes);

