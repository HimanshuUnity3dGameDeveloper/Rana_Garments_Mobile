import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {

  itemlist: any[] = [];
  totalPay = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ){
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      const data = localStorage.getItem('cart_list');
      if(!data) return;
      this.itemlist.push(JSON.parse(data));
      console.log(this.itemlist);

      this.itemlist.map(prod=>{
        this.totalPay = `${prod.prod_Price * prod.quantity}`
        console.log(this.totalPay);
      })
    }
  }
}
