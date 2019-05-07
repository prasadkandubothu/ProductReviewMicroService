export class Product{
    productId : number;
    productName : String;
    productDescription : String;
    productImage : String;
    
    constructor(productId : number, productName : String, productDescription : String, productImage : String){
        this.productId=productId;
        this.productName=productName;
        this.productDescription=productDescription;
        this.productImage=productImage;
    }        
}