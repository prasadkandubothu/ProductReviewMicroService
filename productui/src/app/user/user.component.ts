import { Component, OnInit } from '@angular/core';
import { AppHttpClientService } from '../apphttpclient.service';
import { Product } from '../shared/models/product.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 products : Product[] = [];
 searchText :  String;


  ngOnInit() {
    this.getData();
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
  
  id:number;
  row:string;
  idText:string;
  imgHover(event: any)
  {
    this.id=parseInt(event.target.id.split("_")[1]);
    this.row=event.target.id.split("_")[0];
    for(let i=1; i<=this.id; i++){
      document.getElementById(this.row+"_"+i).src="../assets/star.png";
    }
  }
  imgUnHover(event:any){
     this.id=parseInt(event.target.id.split("_")[1]);
    this.row=event.target.id.split("_")[0];
    for(let i=1; i<=this.id; i++){
      document.getElementById(this.row+"_"+i).src="../assets/empty.png";
    }
  }
  
  saveReview(event:any){
    //this.idText=event.target.id;
    alert("You are given rating "+parseInt(event.target.id.split("_")[1])+" to the product with id "+ event.target.id.split("_")[0]);
  }
  
  
  constructor(private appHttpClientService : AppHttpClientService){}
  

}
