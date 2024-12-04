import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-portfolio-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio-details.component.html',
    styleUrl: './portfolio-details.component.css'
})
export class PortfolioDetailsComponent {

    section_details: string[] = [];
    number_details: number = 5;

    ngOnInit(){
        this.popolaArrayDettagli();
    }

    popolaArrayDettagli(){
        for( let i= 0; i<this.number_details; i++){
            this.section_details[i]=`${i}`;
        }
    }

    isZoomed = false;
    imageUrl = 'path-to-your-image.jpg'; // Sostituisci con il percorso dell'immagine
  
    // Funzione per aprire l'immagine in modalità zoom
    zoomImage() {
      this.isZoomed = true;
    }
  
    // Funzione per chiudere la modale
    closeZoom() {
      this.isZoomed = false;
    }
}
