import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './single-product.html',
  styleUrl: './single-product.scss',
})

export class SingleProduct implements OnInit{

  prod_id: string = '';
  mainImage: string = ''; 
  prodCategory: string = ''; 
  prodPrice: string = ''; 
  description: string = '';

  getAllItems: any[] = [];

  selectedSize: string = '';
  quantity: number = 1;

  constructor(    
    private readonly router: Router,
    @Inject(PLATFORM_ID) private platformId: Object){
  }

  ngOnInit(): void{
    this.loadProduct();
  }

  ionViewWillEnter(){
    this.loadProduct();
  }

  loadProduct(){
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem('selected_item');
    
      console.log(data);
      if(!data) return;

      const selectData = JSON.parse(data);
      
      this.prod_id = selectData.id;
      this.mainImage = selectData.mainImage;
      this.prodCategory = selectData.prodCategory;
      this.prodPrice = selectData.prodPrice;
      this.description = selectData.description;

      const restProd = localStorage.getItem('items');
      if(!restProd) return;

      const prod: any[] = JSON.parse(restProd);
      this.getAllItems = prod.filter(prod => prod.category === selectData.category && prod.id !== selectData.id);
    }
  }

  onAddToCart(product: any){
    let carts: any[] = [];    
    if(localStorage.getItem('cart_list')){
      const list = localStorage.getItem('cart_list');
      carts = list ? JSON.parse(list) : null;
    }

    if(carts.length === 0){
      carts.push({id:this.prod_id, mainImage:this.mainImage, prodName: this.prodCategory, prod_Price: this.prodPrice, quantity: this.quantity, size: this.selectedSize});
      localStorage.setItem('cart_list', JSON.stringify(carts));
    }else{
      const elementExist = carts.find(prod => prod.prodName === product);
      if(elementExist){
        elementExist.quantity++;
      }else{
        carts.push({id:this.prod_id, mainImage:this.mainImage, prodName: this.prodCategory, prod_Price: this.prodPrice, quantity: this.quantity, size: this.selectedSize});
      }
      
      localStorage.setItem('cart_list', JSON.stringify(carts));
    }
    this.router.navigate(['./cart']);
  }

  getSelectedItem(item: string){
    localStorage.setItem('selected_item', JSON.stringify(item));
    this.loadProduct();
  }
}
