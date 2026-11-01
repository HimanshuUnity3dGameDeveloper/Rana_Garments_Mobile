import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SingleProduct } from './single-product/single-product';

const routes: Routes = [
  {
    path:'',
    component: SingleProduct,
    children:[
      {
        path: '', redirectTo:'sproduct', pathMatch:'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SingleProductModule {}
