import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../products/product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-prodadd',
  templateUrl: './prodadd.component.html',
  styleUrls: ['./prodadd.component.css']
})
export class ProdaddComponent implements OnInit {
  @Input() cname: string;
  private products = {};

  constructor(private productSrv: ProductService) {
  }

  ngOnInit() {
  }

  addProduct(product) {
    this.productSrv.addProduct(product)
      .subscribe(result => {
        console.log(result);
        return true;
      },
      error => {
        console.log("Error adding Product!");
        return Observable.throw(error);
      });

    console.log(product);
  }

}
