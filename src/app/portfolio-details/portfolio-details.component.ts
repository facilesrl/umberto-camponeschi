import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticlesDataService } from '../articles-data.service';
import { Article } from '../shared/models/article.model';

@Component({
    selector: 'app-portfolio-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio-details.component.html',
    styleUrl: './portfolio-details.component.css'
})
export class PortfolioDetailsComponent {

    constructor(private route: ActivatedRoute, 
                private articleService:ArticlesDataService) 
    { }


    //category: string = 'Viaggi';

    articles_db: Article[]=[];

    selected_category: string = ''
    ngOnInit() {
        
        console.log(this.articles_db,'articoli filtrati per category name')
        // Recupera la categoria dall'URL
        this.route.paramMap.subscribe(params => {
            this.selected_category = params.get('category') || '';
            this.loadArticles();
        });
    }

    loadArticles(){
        this.articleService.getArticlesByCategoryName(this.selected_category).subscribe((data:Article[])=>{
            console.log(this.selected_category,'selected category dentro laod')
            this.articles_db=data;
            console.log(data,'consol log data');
            console.log('stampa articoli db dentro load', this.articles_db)
        })
       
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
