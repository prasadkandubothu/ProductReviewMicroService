import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationModel } from '../../shared/models/AuthenticationModel';

@Injectable()
export class LoginCheckAuthguard implements CanActivate {
    
    constructor(private router:Router, private auth: AuthenticationModel){
        
    }
    
    canActivate(){
        if(this.auth.getUserData() != null && this.auth.getToken() != null){
            console.log("true");
            return true;
        }
        console.log("false");
        this.router.navigateByUrl("prelogin");
        return false;        
    }
}