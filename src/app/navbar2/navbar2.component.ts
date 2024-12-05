import { Component, ViewChildren, QueryList } from '@angular/core';
import { DynamicComponentRegistry } from '../dynamic.page.registry';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { ServiceDataService } from '../service-data.service';

interface PageDetail {
    nav_groupName: string;
    pagesName: string[];
}

interface PageDetailDB {
    nav_groupName: string;
    page_name: string;
}

interface NavDetailDB {
    nav_groupName: string,
    pages: string[];
}


@Component({
    selector: 'app-navbar2',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterModule, HttpClientModule],
    templateUrl: './navbar2.component.html',
    styleUrl: './navbar2.component.css'
})

export class Navbar2Component {

    pages: any[] = [];

    constructor(private serviceData: ServiceDataService) { }


    @ViewChildren('navItem') navItems!: QueryList<ElementRef>;
    // Array che contiene i nomi delle pagine dal registro

    ngOnInit(): void {
       
        //test servizio 
        this.serviceData.getPages().subscribe(data => {
            this.pages = data;
        });
        this.testDB();
    }

    pages_details_DB: PageDetailDB[] = [];
    page_detail_DB: PageDetailDB = { nav_groupName: '', page_name: '' };
    nav_details_DB: NavDetailDB[] = [];
    //test finto db
    testDB() {
        console.log(this.pages, 'pagine da db');
        var nav_group_array: string[] = [];
        var current_navGroup: string = '';
        var current_page_detail = { nav_groupName: '', page_name: '' };
        this.pages.forEach((item) => {
            current_page_detail = { nav_groupName: '', page_name: '' };
            if (item.nav_groupName) {
                current_navGroup = item.nav_groupName;
                current_page_detail.nav_groupName = current_navGroup;
                current_page_detail.page_name = item.name;
            }
            else {
                current_navGroup = '';
                current_page_detail.nav_groupName = current_navGroup;
                current_page_detail.page_name = item.name;
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
            if (item.nav_groupName) { }
        })

        this.pages_details_DB.forEach((item) => {
            var current_navGroup: string = '';
            current_navGroup = item.nav_groupName;
        })
        var current_nav_detail: NavDetailDB = { nav_groupName: '', pages: [] };

        nav_group_array.forEach((item) => {
            // Crea un nuovo oggetto per ogni iterazione per evitare la sovrascrittura
            current_nav_detail = { nav_groupName: '', pages: [] };

            var current_navGroup: string = item;
            current_nav_detail.nav_groupName = current_navGroup;

            // Aggiungi le pagine associate a questo gruppo di navigazione
            for (let i = 0; i < this.pages_details_DB.length; i++) {
                if (this.pages_details_DB[i].nav_groupName === current_navGroup) {
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


    isDropdownOpen: { [key: number]: boolean } = {};

    toggleDropdown(index: number): void {
        // Toggle lo stato del dropdown specifico
        this.isDropdownOpen[index] = !this.isDropdownOpen[index];
    }





}
