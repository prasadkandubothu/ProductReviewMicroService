import { Component, OnInit } from '@angular/core';
import { AppHttpClientService } from '../../apphttpclient.service';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

products : Product[] = [];
searchText :  String;

  ngOnInit() {
    this.getData();
    this.ratingDisplay();
  }
  
  
  getData(){
   /* this.appHttpClientService.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res) =>{
        if(res.json()){
          this.posts = res.json();
          console.log("---"+this.posts);
        }
      },
      (err) => {          
      }
    );*/
    
    this.products=[
      new Product(1,"Laptops", "Lenovo laptops", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-_pQ2NB80iIGwbWDMcCCmP_2VCpizokD7g_d19Manievc02WNw"),
      new Product(2,"Mobiles", "Coolpad Mobiles", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPosr7xhnDiNI-MLIxcvyZ9v9B107ujfmlWqp28iXxi3_4z8D")
    ];
       // let product2 = 
     
    
  }
  
 
  ratingDisplay(){
    //empty or user given rating swill be displayed here
  }
 
  constructor(private appHttpClientService : AppHttpClientService){}
  

}
