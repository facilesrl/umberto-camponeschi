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
        const socialIcons = document.getElementById('uc-social-icon-containter');
        if (nav && navItems && submenu && socialRow &&socialIcons) {
          if (scrollPosition > 50) {
            nav.classList.add('navbar-scrolled');
            nav.classList.add('position-properties-scrolled');
            navItems.classList.add('nav-item-properties-scrolled');
            submenu.classList.add('submenu-reposition');
            socialRow.classList.add('social-row-scrolled');
            socialIcons.classList.add('social-icons-container-scrolled');
          } else {
            nav.classList.remove('navbar-scrolled');
            nav.classList.remove('position-properties-scrolled');
            navItems.classList.remove('nav-item-properties-scrolled');
            submenu.classList.remove('submenu-reposition');
            socialRow.classList.remove('social-row-scrolled');
            socialIcons.classList.remove('social-icons-container-scrolled');
          }
        }
    }

}
