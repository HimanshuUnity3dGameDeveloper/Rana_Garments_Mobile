import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Shop } from './shop/shop';

const routes: Routes = [
  {
    path: '',
    component: Shop,
    children:[
      {
        path: '', redirectTo: 'shop', pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ShopModule {}
