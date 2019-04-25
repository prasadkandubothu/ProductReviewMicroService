import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloginComponent } from './prelogin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PreloginRouting } from './prelogin.routes';

@NgModule({
  imports: [
    CommonModule,
    PreloginRouting
  ],
  declarations: [PreloginComponent, WelcomeComponent, LoginComponent, RegisterComponent]
})
export class PreloginModule { }
