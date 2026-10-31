import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';

const routes: Routes = [
  {
    path: '',
    component: About,
    children:[
      {
        path: '', redirectTo: 'about', pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AboutModule {}
