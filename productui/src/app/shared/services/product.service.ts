import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class ProductService {
  constructor (
    private http: HttpClient
  ) {}

  getUser() {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/1`);
  }

}