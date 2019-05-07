import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationModel{
    
    userData:any;
    token:string;
    
    setUserData(userData){
        this.userData=userData;
    }
    
    getUserData(){
        return this.userData;
    }
    
    setToken(token: string){
        this.token=token;
    }
    
    getToken(){
        return this.token;
    }
    
    logout(){
        this.userData = null;
        this.token=null;
        this.router.navigateByUrl("prelogin");
    }
    
    constructor(private router:Router){      
    }
}