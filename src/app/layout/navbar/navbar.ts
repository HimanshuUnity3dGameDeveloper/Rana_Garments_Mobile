import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavBar implements OnInit {

  isNavbarActive: boolean = false;

  constructor(
    private readonly router: Router
  ){}

  ngOnInit(): void {
    
  }

  selectedTab = 'home';
  activeNav = false;

  getTab(nav: string){
    this.selectedTab = nav;
    this.isNavbarActive = false
    this.router.navigate([nav]);
  }

  openNavbar(){
    this.isNavbarActive = true;
  }

  closeNavbar(){
    this.isNavbarActive = false
  }
}
