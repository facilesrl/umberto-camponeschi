import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { GeometricBackgroundComponent } from '../geometric-background/geometric-background.component';
@Component({
    selector: 'app-in-evidenza-box',
    standalone: true,
    imports: [CommonModule, CarouselModule,GeometricBackgroundComponent],
    templateUrl: './in-evidenza-box.component.html',
    styleUrl: './in-evidenza-box.component.css'
})
export class InEvidenzaBoxComponent {

    items = [
        { src: 'assets/images/AntonioECleopatra.jpg', alt: 'Descrizione immagine 1', description: 'Antonio e Cleopatra' },
        { src: 'assets/images/Come-gli-uccelli_Ph_Giuseppe-Distefano51_da-sx-Palumeri-Forni.jpg', alt: 'Descrizione immagine 2', description: 'Come gli uccelli' },
        { src: 'assets/images/Lazarus.jpg', alt: 'Descrizione immagine 3', description: 'Lazarus' }
    ];

    customOptions = {
        loop: true,
        margin: 100,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };

}
