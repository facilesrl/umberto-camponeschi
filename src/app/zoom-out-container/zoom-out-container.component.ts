import { Component } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';

@Component({
    selector: 'app-zoom-out-container',
    standalone: true,
    imports: [],
    templateUrl: './zoom-out-container.component.html',
    styleUrl: './zoom-out-container.component.css'
})
export class ZoomOutContainerComponent {

    constructor(private el: ElementRef) { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const image = this.el.nativeElement.querySelectorAll('.zoom-out-image');

        // Ottieni la posizione di scroll della pagina
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Calcola il valore di scala per lo zoom out
        const scaleValue = Math.max(1 - scrollTop / 1000, 0.5); // Limita lo zoom out al 70%

        // Applica la trasformazione di scala all'immagine

        var length = image.length;

        for (let i = 0; i < length; i++) {
            image[i].style.transform = `scale(${scaleValue})`;
        }
    }
}
