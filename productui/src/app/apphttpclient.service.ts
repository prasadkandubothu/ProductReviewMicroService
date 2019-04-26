import {Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AppHttpClientService {
    
    constructor(private http : Http) {}
            
    get(endpointURI){
        return this.http.get(endpointURI);
    }
}