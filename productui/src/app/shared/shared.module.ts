import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product} from './models/product.model';
import { ProductSearchPipe } from './pipes/productsearch.pipe.';


@NgModule({
  imports: [
    CommonModule
  ],
  exports : [ ProductSearchPipe ],
  declarations: [ProductSearchPipe]
})
export class SharedModule { }
