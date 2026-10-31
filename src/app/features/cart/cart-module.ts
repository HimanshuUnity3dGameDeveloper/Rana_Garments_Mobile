import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Cart } from './cart/cart';

const routes: Routes = [
  {
    path:'',
    component: Cart,
    children:[
      {
        path: '', redirectTo:'cart', pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CartModule {}
