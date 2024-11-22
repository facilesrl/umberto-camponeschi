import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    const navItems = document.getElementById('nav-items-list');
    const nav = document.getElementById('navbar');
    const submenu = document.getElementById('uc-submenu');
    const socialRow = document.getElementById('uc-social-row');
    if (nav && navItems && submenu && socialRow) {
      if (scrollPosition > 50) {
        nav.classList.add('navbar-scrolled');
        nav.classList.add('position-properties-scrolled');
        navItems.classList.add('nav-item-properties-scrolled');
        submenu.classList.add('submenu-reposition');
        socialRow.classList.add('social-row-scrolled');
      } else {
        nav.classList.remove('navbar-scrolled');
        nav.classList.remove('position-properties-scrolled');
        navItems.classList.remove('nav-item-properties-scrolled');
        submenu.classList.remove('submenu-reposition');
        socialRow.classList.remove('social-row-scrolled');
      }
    }
  }
}
