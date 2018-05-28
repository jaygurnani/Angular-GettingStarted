import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
// JayG: We need to import the Activated Router so that we can intepret the parameters from the URL
// JayG: The Router is for navigating routes with code
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'ProductDetail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    // JayG: Let is a block scoped variable
    // JayG: .get returns a string. Since we want a numeric value,
    // we use javascript short cut '+' to convert to number
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `:${id}`;
    this.product =  {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
