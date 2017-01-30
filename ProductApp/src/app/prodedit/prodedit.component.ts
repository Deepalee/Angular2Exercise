import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-prodedit',
  templateUrl: './prodedit.component.html',
  styleUrls: ['./prodedit.component.css']
})

export class ProdeditComponent implements OnInit {
  @Input() componentname: string;
  @Input() sname: string;
  @Input() sdescription:string;
  @Input() sprice:string;
  @Input() sbrand:string;

  product = {
    name: "",
    description: "",
    price: "",
    brand: ""
  };

  constructor(private productSrv: ProductService) {

  }


  ngOnInit() {
  }


  updateProduct(product) {
    console.log("Product Name:" + product.name);
    console.log("Description:" + product.description);
    console.log("Price:" + product.price);
    console.log("Brand:" + product.brand);

    this.productSrv.updateProduct(product)
      .subscribe(result => {
        this.productSrv.getProductList();
        return true;
      },
      error => {
        console.log("Error updating Product!");
        return Observable.throw(error);
      })

  }

}
