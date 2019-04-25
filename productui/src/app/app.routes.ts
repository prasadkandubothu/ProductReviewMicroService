import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const AppRoutes: Routes=[
    {
        path:'',
       redirectTo:'prelogin',
       pathMatch:'full'

    },
    {
        path :'prelogin',
        loadChildren: './prelogin/prelogin.module#PreloginModule'
    }

]

export const AppRouting = RouterModule.forRoot(AppRoutes);

