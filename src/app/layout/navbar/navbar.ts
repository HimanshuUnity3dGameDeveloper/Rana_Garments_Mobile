import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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

  activeNav = false;

  openNavbar(){
    this.isNavbarActive = true;
  }

  closeNavbar(){
    this.isNavbarActive = false
  }
}
