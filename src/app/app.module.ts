import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { TrackOrdersComponent } from './Components/track-orders/track-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomepageCarouselComponent } from './Components/home/homepage-carousel/homepage-carousel.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsNavbarComponent } from './Components/products/products-navbar/products-navbar.component';
import { ProductManagerComponent } from './Components/products/product-manager/product-manager.component';
import { AddProductComponent } from './Components/products/add-product/add-product.component';
import { EditProductComponent } from './Components/products/edit-product/edit-product.component';
import { ViewProductComponent } from './Components/products/view-product/view-product.component';
import { SpinnerComponent } from './Components/products/spinner/spinner.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    TrackOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    SignupComponent,
    AboutUsComponent,
    HomepageCarouselComponent,
    ProductsNavbarComponent,
    ProductManagerComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent,
    SpinnerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
