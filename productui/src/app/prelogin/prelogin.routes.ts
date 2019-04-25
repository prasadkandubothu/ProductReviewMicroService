import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PreloginComponent } from './prelogin.component';

const PreloginRoutes: Routes=[
    {
        path:'',
        component : PreloginComponent,
        children : [
            {
                path:'',
                redirectTo:'welcome',
                pathMatch:'full'
            },
            {
                path:'welcome',
                component:WelcomeComponent
            }
        ]        
    }
]

export const PreLoginRouting = RouterModule.forRoot(PreloginRoutes, {useHash:true});

