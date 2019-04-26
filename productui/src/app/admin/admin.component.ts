import { Component, OnInit } from '@angular/core';
import { AppHttpClientService } from '../apphttpclient.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

posts= [];

  ngOnInit() {
    this.getData();
  }
  
  
  getData(){
    this.appHttpClientService.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res) =>{
        if(res.json()){
          this.posts = res.json();
          console.log("---"+this.posts);
        }
      },
      (err) => {          
      }
    );
  }
  
  constructor(private appHttpClientService : AppHttpClientService){}
  

}
