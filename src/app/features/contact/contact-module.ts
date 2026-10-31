import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Contact } from './contact/contact';

const routes: Routes = [
  {
    path: '',
    component: Contact,
    children:[
      {
        path: '', redirectTo: 'contact', pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ContactModule {}
