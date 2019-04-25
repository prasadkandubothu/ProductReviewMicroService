import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { PreLoginRouting } from './prelogin.routes';
import { PreloginComponent } from './prelogin.component';

@NgModule({
  imports: [
    CommonModule,
    PreLoginRouting
  ],
  declarations: [WelcomeComponent, PreloginComponent],
  exports:[PreloginComponent]
})
export class PreloginModule { }
