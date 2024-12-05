import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface ProductType {
    id: number;
    name: string;
}

interface Category {
    id: number;
    name: string;
    productType: ProductType;  // Categoria legata a un tipo di prodotto
}

interface Article {
    id: number;
    title: string;
    description: string;
    category: Category;  // Ogni articolo appartiene a una categoria
    productType: ProductType;  // Ogni articolo ha anche un tipo di prodotto
}

interface Page {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    shortDescription: string;
    slug: string; // Slug per l'URL
    content?: string;  // Può contenere HTML o testo lungo
    images?: string[]; // Array di immagini
    subPages?: Page[]; // Nel caso volessi aggiungere delle sotto-pagine
}



@Injectable({
    providedIn: 'root'
})


export class ServiceDataService {

    constructor() { }

    //Simulazione DB
    // Dati finti per ProductTypes
    private productTypes: ProductType[] = [
        { id: 1, name: 'Foto' },
        { id: 2, name: 'Video' },
        { id: 3, name: 'Tutorial' }
    ];

    // Dati finti per le Categorie
    private categories: Category[] = [
        { id: 1, name: 'Teatro', productType: this.productTypes[0] },
        { id: 2, name: 'Gatti', productType: this.productTypes[0] },
        { id: 3, name: 'Borselli', productType: this.productTypes[0] },
        { id: 4, name: 'Tecnologia', productType: this.productTypes[2] },
        { id: 5, name: 'CSS Tutorial', productType: this.productTypes[2] }
    ];

    // Dati finti per gli Articoli
    private articles: Article[] = [
        { id: 1, title: 'Foto Teatrali 1', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[0], productType: this.productTypes[0] },
        { id: 2, title: 'Video Workshop 1', description: 'Tutorial su come creare un sito web', category: this.categories[4], productType: this.productTypes[1] },
        { id: 3, title: 'Tutorial CSS', description: 'Introduzione alle basi del CSS', category: this.categories[5], productType: this.productTypes[2] },
        { id: 4, title: 'Foto Gatti 1', description: 'Foto di gatti simpatici', category: this.categories[1], productType: this.productTypes[0] }
    ];

    // Dati finti per gli Articoli
    private pages: Page[] = [
        {
            id: 1,
            title: 'Home',
            subtitle: 'Benvenuti sul nostro sito',
            description: 'La homepage del nostro sito vetrina.',
            shortDescription: 'Scopri i nostri servizi e prodotti.',
            slug: 'home',
            images: ['prova-header-foto.jpg']
        },
        {
            id: 2,
            title: 'Menu',
            subtitle: 'Il nostro menu',
            description: 'Scopri i vari piatti che offriamo.',
            shortDescription: 'Un viaggio nei nostri piatti unici.',
            slug: 'menu',
            images: ['prova-header-foto.jpg']
        },
        {
            id: 3,
            title: 'About',
            subtitle: 'Chi siamo',
            description: 'Una breve storia su di noi.',
            shortDescription: 'Conosci il nostro team e la nostra missione.',
            slug: 'about',
            images: ['prova-header-foto.jpg']
        },
        {
            id: 4,
            title: 'Portfolio',
            subtitle: 'I nostri progetti',
            description: 'Esplora i progetti che abbiamo realizzato.',
            shortDescription: 'Dai uno sguardo alle nostre creazioni.',
            slug: 'portfolio',
            images: ['prova-header-foto.jpg']
        },
        {
            id: 5,
            title: 'Workshop',
            subtitle: 'I nostri workshop',
            description: 'Partecipa ai nostri workshop pratici.',
            shortDescription: 'Impara nuove abilità con noi.',
            slug: 'workshop',
            images: ['prova-header-foto.jpg']
        }
    ];

    //Simulazione chiamata API
    // Metodo per ottenere i tipi di prodotto
    getProductTypes() {
        return this.productTypes;
    }

    // Metodo per ottenere le categorie
    getCategories() {
        return this.categories;
    }

    // Metodo per ottenere gli articoli
    getArticles() {
        return this.articles;
    }

    // Funzione per ottenere tutte le pagine
    getPages(): Observable<any[]> {
        return of(this.pages);
    }

}
