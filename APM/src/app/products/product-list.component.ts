import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string  = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];

    // JayG Angular automatically injects the product service and assigns it to the private variable
    // _productService
    constructor(private _productService: ProductService) {
    }

    onRatingClicked(message: string) {
        this.pageTitle = 'Product List: ' + message;
    }

    // JayG You can run lambda functions in Typescript
    performFilter(filterBy: string): IProduct[] {
       filterBy = filterBy.toLocaleLowerCase();
       return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    // JayG: Component initalization can happen on the ngOnInit function
    // JayG: For multiple line functions on call backs, we can use the {} syntax
    ngOnInit(): void {
    this._productService.getProducts()
        .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        },
            error => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
