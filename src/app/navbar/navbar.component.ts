import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollNavbarDirective } from '../scroll-navbar.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // Importa FontAwesomeModule

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,ScrollNavbarDirective,FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  faFacebook = faFacebook;  // Assegna l'icona a una proprietà
  faInstagram = faInstagram;
}
