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
  ){}

  ngOnInit(): void {
    this.loadListData();
  }

  loadListData(){
    if(isPlatformBrowser(this.platformId)){
      const data = localStorage.getItem('cart_list');
      if(!data) return;
      const list = JSON.parse(data);
      this.itemlist = list;
      console.log(this.itemlist);

      this.itemlist.map(prod=>{
        this.totalPay = `${prod.prod_Price * prod.quantity}`
        console.log(this.totalPay);
      })
    }
  }

  removeItem(prodId: any){
    
    console.log('hello');
    const index = this.itemlist.findIndex(prod => prod.id === prodId);

    console.log(index);
    if(this.itemlist[index].quantity > 1){
      this.itemlist[index].quantity--;
    }else{
      this.itemlist = this.itemlist.filter(prod=> prod.id !== prodId);
    }
    localStorage.setItem('cart_list', JSON.stringify(this.itemlist));
    this.loadListData();
  }
}
