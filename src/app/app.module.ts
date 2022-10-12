 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListView } from './views/productListView.component';
import { HttpClientModule } from "@angular/common/http";
import { CartView } from './views/cartView.component';
import { Store } from './services/store.service';
import router from './router';
import { CheckoutPage } from './pages/checkout.component';
import { ShopPage } from './pages/shopPage.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListView,
    CartView,
    ShopPage,
    CheckoutPage
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    router
  ],
  providers: [
      Store
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
