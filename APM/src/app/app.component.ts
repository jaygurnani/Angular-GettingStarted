import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `,
  // JayG: This is how we register the services. All children can access this service
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
