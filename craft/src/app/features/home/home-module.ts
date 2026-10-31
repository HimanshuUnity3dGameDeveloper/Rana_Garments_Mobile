import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';

const routes: Routes = [
  {
    path:'',
    component: Home,
    children:[
      {
        path: '', redirectTo:'home', pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class HomeModule {}
