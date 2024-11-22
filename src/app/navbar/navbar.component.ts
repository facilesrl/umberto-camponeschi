import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollNavbarDirective } from '../scroll-navbar.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,ScrollNavbarDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

 
}
