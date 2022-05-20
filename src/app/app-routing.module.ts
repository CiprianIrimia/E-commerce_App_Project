import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ProductsDashboardComponent } from './Components/products-dashboard/products-dashboard.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'products-dashboard', component: ProductsDashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-succes', component: OrderSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
