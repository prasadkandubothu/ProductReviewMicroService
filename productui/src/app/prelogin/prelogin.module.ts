import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloginComponent } from './prelogin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PreloginRouting } from './prelogin.routes';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/components/header/header.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PreloginRouting
  ],
  exports:[PreloginComponent],
  declarations: [PreloginComponent, WelcomeComponent, LoginComponent, RegisterComponent]
})
export class PreloginModule { }
