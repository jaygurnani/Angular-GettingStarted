import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-space';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      // JayG: For activating the guard we have to list it here
      { path: 'products/:id', canActivate: [ProductGuardService],
                              component: ProductDetailComponent}]
    ),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    // JayG: This is how we register the services. All children can access this service
    // JayG: There is no need to export services since everyone will have access to this already (services are registered at the root)
    ProductService,
    // JayG: Services pertaining to routing are registered here and not in app.component.ts
    ProductGuardService
  ]
})
export class ProductModule { }
