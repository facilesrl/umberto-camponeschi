import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appScrollNavbar]',
    standalone: true
})
export class ScrollNavbarDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) { }

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
