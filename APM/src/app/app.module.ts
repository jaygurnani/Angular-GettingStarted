import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

// JayG: Our components are declared in the declarations while Angular and custom ones are declare in the imports section
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // JayG: If routing is in a seperate module, it is registered in a downward order
  imports: [
    BrowserModule,
    HttpClientModule,
    // JayG: Routing is specified here. We should ideally seperate these in a seperate file. Routing is done
    // in downwards order
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '** ', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  // JayG: Bootstrap array should only be used once (only in App.Module)
  bootstrap: [AppComponent]
})
export class AppModule { }
