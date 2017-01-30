import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../products/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  optselected: String;

  constructor(private productSrv: ProductService) { }

  ngOnInit() {
  }

  loadComponent(componentname: String) {
    console.log("Component: " + componentname);
    this.optselected = componentname;
  }



}
