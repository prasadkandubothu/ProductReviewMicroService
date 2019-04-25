import { Component } from '@angular/core';
import { ProductService } from './shared/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  profile = {};

  constructor(private userService: ProductService) {}

  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = data);
  }
}
