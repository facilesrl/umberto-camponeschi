import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDataService } from '../service-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-portfolio-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio-details.component.html',
    styleUrl: './portfolio-details.component.css'
})
export class PortfolioDetailsComponent {

    constructor(private route: ActivatedRoute,private serviceData: ServiceDataService) {}


    //category: string = 'Viaggi';
    articles: any[] = [];
    selected_category: string=''
    ngOnInit() {
     

                // Recupera la categoria dall'URL
                this.route.paramMap.subscribe(params => {
                    this.selected_category = params.get('category') || '';
                    this.articles = this.serviceData.getArticlesByCategory(this.selected_category);
                });
    }

  
    //section_details: string[] = [];
    //number_details: number = 5;


    /*
        popolaArrayDettagli() {
            for (let i = 0; i < this.number_details; i++) {
                this.section_details[i] = `${i}`;
            }
        }
    */

    //logica per zoom
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
