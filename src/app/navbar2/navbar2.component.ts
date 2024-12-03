import { Component, ViewChildren, QueryList } from '@angular/core';
import { DynamicComponentRegistry } from '../dynamic.page.registry';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface PageDetail {
    nav_groupName: string;
    pagesName: string[];
}

@Component({
    selector: 'app-navbar2',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterModule],
    templateUrl: './navbar2.component.html',
    styleUrl: './navbar2.component.css'
})

export class Navbar2Component {



    @ViewChildren('navItem') navItems!: QueryList<ElementRef>;
    // Array che contiene i nomi delle pagine dal registro
    pages_key: string[] = [];
    nav_group_array: string[] = [];
    page_detail: PageDetail = { nav_groupName: '', pagesName: [] };
    pages_details: PageDetail[] = [];
    array_page__details: any[] = [];

    nav_items: string[] = [];

    ngOnInit(): void {
        // Estrai i nomi delle pagine (le chiavi) dal registro
        const registry = DynamicComponentRegistry;
        this.pages_key = Object.keys(registry);
        console.log('dentroOnInit this pages', this.pages_key);
        //Popolo Navgroup Array. contiene i nav group senza ripetizioni


        var current_nav_group_array: string[] = []
        for (let i = 0; i < this.pages_key.length; i++) {
            const current_pageName = this.pages_key[i];
            const current_navgroup = registry[current_pageName]?.nav_group;
            var nav_groupName:string = current_navgroup||'';
            // Crea un nuovo oggetto page_details per ogni iterazione
            const page_details = {
                pageName: current_pageName,
                nav_groupName: current_navgroup || '',
            };

            this.array_page__details[i] = page_details;
            current_nav_group_array[i] = page_details.nav_groupName;
            
        }
        console.log(current_nav_group_array, 'arrai nav con tutti gli elementi');
        this.nav_group_array = [...new Set(current_nav_group_array)];
        console.log(this.nav_group_array,'array senza eleemnti ripetuti'); 

        for(let i = 0; i<this.nav_group_array.length; i++){

            var current_navgroup = this.nav_group_array[i];

            const pages_details: PageDetail = {
                nav_groupName: current_navgroup,
                pagesName:[]
            };

            pages_details.nav_groupName= this.nav_group_array[i];
            
            for(let j=0; j<this.array_page__details.length; j++){
                if(this.nav_group_array[i]===this.array_page__details[j].nav_groupName){
                    
                    pages_details.pagesName.push(this.array_page__details[j].pageName);

                }
            
                
            }
            this.pages_details.push(pages_details);
            console.log('dentro secondo ciclo',this.pages_details)
        }
        console.log(this.array_page__details, 'stampa array page_details');
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
