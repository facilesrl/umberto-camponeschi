import { Component } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    items = [
        { src: 'assets/images/AntonioECleopatra.jpg', alt: 'Descrizione immagine 1', description: 'Antonio e Cleopatra' },
        { src: 'assets/images/Come-gli-uccelli_Ph_Giuseppe-Distefano51_da-sx-Palumeri-Forni.jpg', alt: 'Descrizione immagine 2', description: 'Come gli uccelli' },
        { src: 'assets/images/Lazarus.jpg', alt: 'Descrizione immagine 3', description: 'Lazarus' }
    ];

    customOptions = {
        items:1,
        loop: true,
        margin: 100,
        nav: true,
        dots: true
    };

}

