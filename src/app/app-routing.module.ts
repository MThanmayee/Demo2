import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductUIComponent } from './update-product-ui/update-product-ui.component';

const routes: Routes = [
  { path:'Home', component: ProductListComponent },
  { path :'update-product-ui/:productid',component : UpdateProductUIComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
