import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollNavbarDirective } from '../scroll-navbar.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // Importa FontAwesomeModule

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { PagesDataService } from '../pages-data.service';
import { Page } from '../shared/models/page.model';

interface PageDetailDB {
    nav_group_name: string;
    page_name: string;
}

interface NavDetailDB {
    nav_group_name: string,
    pages: string[];
}

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule,
        FontAwesomeModule,
        RouterLink,
        ScrollNavbarDirective],

    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    faFacebook = faFacebook;  // Assegna l'icona a una proprietà
    faInstagram = faInstagram;

    pages: Page[] = [];

    constructor(private pagesDataService: PagesDataService) { }

    @ViewChildren('navItem') navItems!: QueryList<ElementRef>;


    ngOnInit(): void {

        this.pagesDataService.getPages().subscribe(
            (data: Page[]) => {
                this.pages = data;
                console.log(this.pages, 'da servizion')
                this.testDB();
                this.findMaxWidth();
            });
    }

    pages_details_DB: PageDetailDB[] = [];
    page_detail_DB: PageDetailDB = { nav_group_name: '', page_name: '' };
    nav_details_DB: NavDetailDB[] = [];

    //Metodo per raggruppamento navItem in navGroup
    testDB() {
        console.log(this.pages, 'pagine da db');
        var nav_group_array: string[] = [];
        var current_navGroup: string = '';
        var current_page_detail = { nav_group_name: '', page_name: '' };
        this.pages.forEach((item) => {
            current_page_detail = { nav_group_name: '', page_name: '' };
            if (item.nav_group_name) {
                current_navGroup = item.nav_group_name;
                current_page_detail.nav_group_name = current_navGroup;
                current_page_detail.page_name = item.page_name;
            }
            else {
                current_navGroup = '';
                current_page_detail.nav_group_name = current_navGroup;
                current_page_detail.page_name = item.page_name;
            }
            this.pages_details_DB.push(current_page_detail);
            nav_group_array.push(current_navGroup);
        })

        console.log(nav_group_array, 'current array of navgroup in test db');
        nav_group_array = [...new Set(nav_group_array)];
        console.log(nav_group_array, 'current array of navgroup in test db dopo eliminazione ripetizioni');
        console.log(this.pages_details_DB, 'dettagli delle pagine db con interfaccia');

        //finito di creare current navgroup
        this.pages.forEach((item) => {
            if (item.nav_group_name) { }
        })

        this.pages_details_DB.forEach((item) => {
            var current_navGroup: string = '';
            current_navGroup = item.nav_group_name;
        })
        var current_nav_detail: NavDetailDB = { nav_group_name: '', pages: [] };

        nav_group_array.forEach((item) => {
            // Crea un nuovo oggetto per ogni iterazione per evitare la sovrascrittura
            current_nav_detail = { nav_group_name: '', pages: [] };

            var current_navGroup: string = item;
            current_nav_detail.nav_group_name = current_navGroup;

            // Aggiungi le pagine associate a questo gruppo di navigazione
            for (let i = 0; i < this.pages_details_DB.length; i++) {
                if (this.pages_details_DB[i].nav_group_name === current_navGroup) {
                    current_nav_detail.pages.push(this.pages_details_DB[i].page_name);
                }
            }

            // Aggiungi il dettaglio al risultato
            this.nav_details_DB.push({ ...current_nav_detail });
        });

        console.log(this.nav_details_DB, 'oggetto finare per costruzione navbar')

    }


    ngAfterViewInit() {
        this.findMaxWidth();
    }

    //Metodo per ricerca del navItem con width maggiore. Poi applica stessa width a tutti navItem
    findMaxWidth() {
        let max_width: number = 0;

        this.navItems.toArray().forEach((item) => {
            const element = item.nativeElement as HTMLElement;
            const wasHidden = element.hidden;

            // Rimuovi il "hidden" temporaneamente per ottenere la larghezza reale
            if (wasHidden) {
                element.hidden = false;
            }

            const current_width = element.getBoundingClientRect().width;
            max_width = Math.max(max_width, current_width);

            // Ripristina lo stato originale
            if (wasHidden) {
                element.hidden = true;
            }
        });

        console.log(max_width, 'il massimo è');
        this.navItems.toArray().forEach((item) => {
            (item.nativeElement as HTMLElement).style.width = `${max_width}px`;
        });
    }

    //Metodi per funzionamento dropdown menu
    isDropdownOpen: { [key: number]: boolean } = {};

    toggleDropdown(index: number): void {
        // Toggle lo stato del dropdown specifico
        this.isDropdownOpen[index] = !this.isDropdownOpen[index];
    }

}
