import { PipeTransform, Pipe } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
    name : 'productSearch'
})

export class ProductSearchPipe implements  PipeTransform{
    
    transform(products : Product[], searchText : String) : Product[]{
        
        if(!products || !searchText)
        {
            return products;
        }
      
        return products.filter(product => {            
            return (product.productName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) || 
            (product.productId === parseInt(searchText.toString()))          
        });        
    }
}