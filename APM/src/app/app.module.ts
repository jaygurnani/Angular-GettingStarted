import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-space';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './products/product-guard.service.service';

// JayG: Our components are declared in the declarations while Angular and custom ones are declare in the imports section
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // JayG: Routing is specified here. We should ideally seperate these in a seperate file. Routing is done
    // in downwards order
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      // JayG: For activating the guard we have to list it here
      { path: 'products/:id', canActivate: [ProductGuardService],
                              component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '** ', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  // JayG: Services pertaining to routing are registered here and not in app.component.ts
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
