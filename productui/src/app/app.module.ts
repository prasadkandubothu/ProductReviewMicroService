import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routes'

import { AppComponent } from './app.component';

import { PreloginModule } from './prelogin/prelogin.module';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    AppComponent,HeaderComponent, FooterComponent  
  ],
  imports: [
    BrowserModule,
    AppRouting,    
    PreloginModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
