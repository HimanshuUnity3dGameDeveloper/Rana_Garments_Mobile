import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  items: any[] = [
    {id:1, category:"T-shirt", brandName:'adidas', mainImage:'assets/img/products/f1.jpg', prodCategory:"Cartoon colored T-Shirt", rating:`5/5`, prodPrice:150, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:2, category:"T-shirt", brandName:'adidas', mainImage:'assets/img/products/f2.jpg', prodCategory:"Cartoon lily T-Shirt", rating:`5/5`, prodPrice:150, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:3, category:"T-shirt", brandName:'adidas', mainImage:'assets/img/products/f3.jpg', prodCategory:"Cartoon brown T-Shirt", rating:`5/5`, prodPrice:150, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:4, category:"T-shirt", brandName:'adidas', mainImage:'assets/img/products/f4.jpg', prodCategory:"Cartoon White T-Shirt", rating:`5/5`, prodPrice:150, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:5, category:"T-shirt", brandName:'adidas', mainImage:'assets/img/products/f5.jpg', prodCategory:"Cartoon Purple T-Shirt", rating:`5/5`, prodPrice:150, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:6, category:"T-shirt", brandName:'adidas', mainImage:'assets/img/products/f6.jpg', prodCategory:"Cartoon Red-Blue T-Shirt", rating:`5/5`, prodPrice:150, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:7, category:"T-shirt", brandName:'adidas', mainImage:'assets/img/products/f7.jpg', prodCategory:"Cartoon Girls Leggy", rating:`5/5`, prodPrice:250, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:8, category:"T-shirt", brandName:'adidas', mainImage:'assets/img/products/f8.jpg', prodCategory:"Cartoon Girls Top", rating:`5/5`, prodPrice:175, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:9, category:"shirt", brandName:'adidas', mainImage:'assets/img/products/n1.jpg', prodCategory:"Light Blue Shirt", rating:`5/5`, prodPrice:300, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:10, category:"shirt", brandName:'adidas', mainImage:'assets/img/products/n2.jpg', prodCategory:"Lined Gray Shirt", rating:`5/5`, prodPrice:300, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:11, category:"shirt", brandName:'adidas', mainImage:'assets/img/products/n3.jpg', prodCategory:"White Plan Shirt", rating:`5/5`, prodPrice:300, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:12, category:"shirt", brandName:'adidas', mainImage:'assets/img/products/n4.jpg', prodCategory:"Half-slives designed Shirt", rating:`5/5`, prodPrice:300, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:13, category:"shirt", brandName:'adidas', mainImage:'assets/img/products/n5.jpg', prodCategory:"Denim blue Shirt", rating:`5/5`, prodPrice:450, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:14, category:"shirt", brandName:'adidas', mainImage:'assets/img/products/n6.jpg', prodCategory:"Short pant", rating:`5/5`, prodPrice:100, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:15, category:"shirt", brandName:'adidas', mainImage:'assets/img/products/n7.jpg', prodCategory:"Dark Yellow Plan Shirt", rating:`5/5`, prodPrice:250, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"},
    {id:16, category:"shirt", brandName:'adidas', mainImage:'assets/img/products/n8.jpg', prodCategory:"Dark Gray Plan Shirt", rating:`5/5`, prodPrice:230, description:"The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per.sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package"}      
  ];

  constructor(
    private readonly router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ){
    
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      localStorage.setItem('items', JSON.stringify(this.items));
    }
  }
  get tshirts() {
    return this.items.filter(prod => prod.category === 'T-shirt');
  }

  get shirts(){
    return this.items.filter(prod => prod.category === 'shirt');
  }

  getSelectedItem(item: string){
    localStorage.setItem('selected_item', JSON.stringify(item));
    this.router.navigate(['./sproduct'])
  }
}
