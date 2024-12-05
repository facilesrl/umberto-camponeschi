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
    category_id: number;
    productType: ProductType;  // Ogni articolo ha anche un tipo di prodotto
}

interface Page {
    id: number;
    name: string;
    title: string;
    subtitle: string;
    description: string;
    shortDescription: string;
    slug: string; // Slug per l'URL
    content?: string;  // Può contenere HTML o testo lungo
    images?: string[]; // Array di immagini
    subPages?: Page[]; // Nel caso volessi aggiungere delle sotto-pagine
    nav_groupName?: string; // opzionale
}



@Injectable({
    providedIn: 'root'
})


export class ServiceDataService {

    constructor() { }

    //Simulazione DB
    // Dati finti per le Pagine
    private pages: Page[] = [
        {
            id: 1,
            name: 'home',
            title: 'home',
            subtitle: 'Benvenuti sul nostro sito',
            description: 'La homepage del nostro sito vetrina.',
            shortDescription: 'Scopri i nostri servizi e prodotti.',
            slug: 'home',
            images: ['prova-header-foto.jpg']
        },
        {
            id: 2,
            name: 'menu',
            title: 'menu',
            subtitle: 'Il nostro menu',
            description: 'Scopri i vari piatti che offriamo.',
            shortDescription: 'Un viaggio nei nostri piatti unici.',
            slug: 'menu',
            images: ['prova-header-foto.jpg']
        },
        {
            id: 3,
            name: 'about',
            title: 'about',
            subtitle: 'Chi siamo',
            description: 'Una breve storia su di noi.',
            shortDescription: 'Conosci il nostro team e la nostra missione.',
            slug: 'about',
            images: ['prova-header-foto.jpg']
        },
        {
            id: 4,
            name: 'portfolio1',
            title: 'portfolio1',
            subtitle: 'I nostri progetti',
            description: 'Esplora i progetti che abbiamo realizzato.',
            shortDescription: 'Dai uno sguardo alle nostre creazioni.',
            slug: 'portfolio',
            images: ['prova-header-foto.jpg'],
            nav_groupName: 'portfolio'
        },
        {
            id: 5,
            name: 'portfolio2',
            title: 'portfolio2',
            subtitle: 'I nostri progetti',
            description: 'Esplora i progetti che abbiamo realizzato.',
            shortDescription: 'Dai uno sguardo alle nostre creazioni.',
            slug: 'portfolio',
            images: ['prova-header-foto.jpg'],
            nav_groupName: 'portfolio'
        },
        {
            id: 6,
            name: 'workshop1',
            title: 'workshop1',
            subtitle: 'I nostri workshop',
            description: 'Partecipa ai nostri workshop pratici.',
            shortDescription: 'Impara nuove abilità con noi.',
            slug: 'workshop',
            images: ['prova-header-foto.jpg'],
            nav_groupName: 'workshop'
        },
        {
            id: 7,
            name: 'workshop2',
            title: 'workshop2',
            subtitle: 'I nostri workshop',
            description: 'Partecipa ai nostri workshop pratici.',
            shortDescription: 'Impara nuove abilità con noi.',
            slug: 'workshop',
            images: ['prova-header-foto.jpg'],
            nav_groupName: 'workshop'
        }
    ];


    // Dati finti per ProductTypes
    private productTypes: ProductType[] = [
        { id: 0, name: 'Foto' },
        { id: 1, name: 'Video' },
        { id: 2, name: 'Tutorial' },
        { id: 3, name: 'Progetti' }
    ];

    // Dati finti per le Categorie
    private categories: Category[] = [
        { id: 0, name: 'Teatro', productType: this.productTypes[0] },
        { id: 1, name: 'Viaggi', productType: this.productTypes[0] },
        { id: 2, name: 'Borselli', productType: this.productTypes[0] },
        { id: 3, name: 'Gatti', productType: this.productTypes[0] },
        { id: 3, name: 'Video', productType: this.productTypes[3] },
        { id: 4, name: 'Tutorial', productType: this.productTypes[3]  },
        { id: 5, name: 'Luci Autocostruite', productType: this.productTypes[3] }
        // { id: 4, name: 'Tecnologia', productType: this.productTypes[2] },
        // { id: 5, name: 'CSS Tutorial', productType: this.productTypes[2] }
    ];

    // Dati finti per gli Articoli
    private articles: Article[] = [
        { id: 0, title: 'palco', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[0], category_id: this.categories[0].id, productType: this.productTypes[0] },
        { id: 1, title: 'quinte', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[0], category_id: this.categories[0].id, productType: this.productTypes[0] },
        { id: 2, title: 'attori', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[0], category_id: this.categories[0].id, productType: this.productTypes[0] },
        { id: 3, title: 'grecia', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[1], category_id: this.categories[1].id, productType: this.productTypes[0] },
        { id: 4, title: 'norvegia', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[1], category_id: this.categories[1].id, productType: this.productTypes[0] },
        { id: 5, title: 'russia', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[1], category_id: this.categories[1].id, productType: this.productTypes[0] },
        { id: 6, title: 'turchia', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[1], category_id: this.categories[1].id, productType: this.productTypes[0] },
        { id: 7, title: 'borsello rosso', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[2], category_id: this.categories[2].id, productType: this.productTypes[0] },
        { id: 8, title: 'borsello nero', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[2], category_id: this.categories[2].id, productType: this.productTypes[0] },
        { id: 9, title: 'borsello grigio', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[2], category_id: this.categories[2].id, productType: this.productTypes[0] },
        { id: 10, title: 'sphynx', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[3], category_id: this.categories[3].id, productType: this.productTypes[0] },
        { id: 11, title: 'siamese', description: 'Foto scattate durante uno spettacolo teatrale', category: this.categories[3], category_id: this.categories[3].id, productType: this.productTypes[0] },
        //
        { id: 12, title: 'Costruire Luci LED', description: 'Progetto pratico per costruire luci LED', category: this.categories[5], category_id: this.categories[5].id, productType: this.productTypes[3] },
        { id: 13, title: 'Video Workshop', description: 'Un workshop registrato su un tema specifico', category: this.categories[3], category_id: this.categories[3].id, productType: this.productTypes[3] }
        //{ id: 1, title: 'Video Workshop 1', description: 'Tutorial su come creare un sito web', category: this.categories[4], productType: this.productTypes[1] },
        //{ id: 2, title: 'Tutorial CSS', description: 'Introduzione alle basi del CSS', category: this.categories[5], productType: this.productTypes[2] },
        //{ id: 3, title: 'Foto Gatti 1', description: 'Foto di gatti simpatici', category: this.categories[1], productType: this.productTypes[0] }
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

    // GET per le categorie di tipo "Foto"
    getCategoriesByProductType(productType: string): Category[] {
        return this.categories.filter(category => category.productType.name === productType);
    }

    getArticlesByCategory(categoryName: string): Article[] {
        return this.articles.filter(article => article.category.name === categoryName);
    }

    getArticlesByCategory_id(category_id: number): Article[] {
        return this.articles.filter(article => article.category_id === category_id);
    }

}
