import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { ProductManagerComponent } from 'src/app/Components/products/product-manager/product-manager.component';

const routes: Routes = [{ path: '', component: ProductManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
