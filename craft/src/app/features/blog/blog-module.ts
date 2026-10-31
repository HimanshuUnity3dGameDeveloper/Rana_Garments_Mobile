import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Blog } from './blog/blog';

const routes: Routes = [
  {
    path: '',
    component: Blog,
    children:[
      {
        path: '', redirectTo: 'blog', pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BlogModule {}
