import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
// JayG: We need to import the Activated Router so that we can intepret the parameters from the URL
// JayG: The Router is for navigating routes with code
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'ProductDetail';
  product: IProduct;
  products: IProduct[];
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }

  ngOnInit() {
    // JayG: Let is a block scoped variable
    // JayG: .get returns a string. Since we want a numeric value,
    // we use javascript short cut '+' to convert to number
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `:${id}`;

    this._productService.getProducts()
    .subscribe(products => {
        this.products = products;
        this.product = this.products.filter((product: IProduct) => product.productId === id)[0];
    },
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
