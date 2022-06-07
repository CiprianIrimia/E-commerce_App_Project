import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ProductsComponent } from './Components/products/products.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProductsNavbarComponent } from './Components/products/products-navbar/products-navbar.component';
import { AddProductComponent } from './Components/products/add-product/add-product.component';
import { EditProductComponent } from './Components/products/edit-product/edit-product.component';
import { ViewProductComponent } from './Components/products/view-product/view-product.component';
import { ProductManagerComponent } from './Components/products/product-manager/product-manager.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ClientAreaComponent } from './Components/client-area/client-area.component';
import { ProdClientDetailsComponent } from './Components/client-area/prod-client-details/prod-client-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },

  { path: 'products', component: ProductManagerComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'products/edit/:productId', component: EditProductComponent },
  { path: 'products/view/:productId', component: ViewProductComponent },
  {
    path: 'client-area/view/:productId',
    component: ProdClientDetailsComponent,
  },
  { path: 'client-area/cart/:productId', component: CartComponent },
  {
    path: 'client-area/view/:productId/cart/:productId',
    component: CartComponent,
  },

  { path: 'about-us', component: AboutUsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-succes', component: OrderSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'client-area', component: ClientAreaComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
