import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../products/product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-prodgrid',
  templateUrl: './prodgrid.component.html',
  styleUrls: ['./prodgrid.component.css']
})

export class ProdgridComponent implements OnInit {
  @Input() cname: string;
  optselected: String;
  products: Product[];
  minRange = 0;
  maxRange = 5;
  public pname: string;
  public pdescription: string;
  public pprice: string;
  public pbrand: string;
  public id: string;

  constructor(private productSrv: ProductService) {
    this.getProductList();
  }


  private getProductList() {
    this.productSrv.getProductList().subscribe(
      (result) => { this.products = result },
      error => {
        console.log("Error retrieving Products!");
        return Observable.throw(error);
      }
    );
    console.log(this.products);
  }


  ngOnInit() {
  }

  productDetails(componentname: String, product: Product, id: string) {
    this.optselected = componentname;
    this.id = id;
    this.pname = product.name;
    this.pdescription = product.description;
    this.pprice = product.price;
    this.pbrand = product.brand;
     console.log(this.id + ":"+ this.pname + " : " + this.pdescription + " : " + this.pprice + " : " + this.pbrand);
  }



}
