import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollNavbarDirective } from '../scroll-navbar.directive';
import { DynamicComponentRegistry } from '../dynamic.page.registry';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // Importa FontAwesomeModule

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,ScrollNavbarDirective,FontAwesomeModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  faFacebook = faFacebook;  // Assegna l'icona a una proprietà
  faInstagram = faInstagram;

  // Array che contiene i nomi delle pagine dal registro
  pages: string[] = [];

  ngOnInit(): void {
    // Estrai i nomi delle pagine (le chiavi) dal registro
    this.pages = Object.keys(DynamicComponentRegistry);
  }
}
