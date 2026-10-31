import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'', redirectTo:'home', pathMatch:'full'
    },
    {
        path:'home', loadChildren: ()=> import('./features/home/home-module').then(m => m.HomeModule)
    },
    {
        path:'shop', loadChildren: ()=> import('./features/shop/shop-module').then(m => m.ShopModule)
    },
    {
        path:'blog', loadChildren: ()=> import('./features/blog/blog-module').then(m => m.BlogModule)
    },
    {
        path:'about', loadChildren: ()=> import('./features/about/about-module').then(m => m.AboutModule)
    },
    {
        path:'contact', loadChildren: ()=> import('./features/contact/contact-module').then(m => m.ContactModule)
    },
    {
        path:'cart', loadChildren: ()=> import('./features/cart/cart-module').then(m => m.CartModule)
    }
];
