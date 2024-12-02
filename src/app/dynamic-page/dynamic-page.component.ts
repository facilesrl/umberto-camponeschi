import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, Type, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicComponentRegistry } from '../dynamic.page.registry'; // Assicurati che il percorso sia corretto
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { HeaderPageComponent } from '../header-page/header-page.component';
import { EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HostListener } from '@angular/core';
@Component({
    selector: 'app-dynamic-page',
    standalone: true,
    imports: [CommonModule, HeaderPageComponent, HeaderComponent],
    templateUrl: './dynamic-page.component.html',
    styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit, AfterViewInit, OnDestroy {

    componentName: string = '';
    @ViewChild('dynamicContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
    private routeSub: Subscription = new Subscription();

    //@Output() componentNameChanged:EventEmitter<string>= new EventEmitter<string>();

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        // Ascolta i cambiamenti della rotta e aggiorna il componente
        this.routeSub = this.route.params.subscribe(params => {
            this.componentName = params['componentName']; // 'componentName' è in realtà il nome della pagina
            console.log('Parametro componentName:', this.componentName);
            this.loadComponents(this.componentName);  // Carica i componenti quando il parametro è disponibile
            //this.componentNameChanged.emit(this.componentName);
        });
    }

    ngAfterViewInit(): void {
        if (this.componentName) {
            this.loadComponents(this.componentName);  // Carica il componente iniziale se necessario
        }
    }

    ngOnDestroy(): void {
        // Pulisci l'abbonamento quando il componente viene distrutto
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    }

    // Funzione per caricare un array di componenti per una pagina
    loadComponents(pageName: string): void {
        if (!this.container) {
            console.error('Dynamic container non inizializzato');
            return;
        }

        this.container.clear();

        const page = DynamicComponentRegistry[pageName];

        if (page) {
            page.components.forEach(({ component, template }) => {
                const componentRef = this.container.createComponent(component);

                // Passa il template al componente, se applicabile
                if (template && 'setTemplate' in componentRef.instance) {
                    (componentRef.instance as any).setTemplate(template);
                }
            });

            // Gestione del nav_group, se presente
            if (page.nav_group) {
                console.log(`Nav Group: ${page.nav_group}`);
            }
        } else {
            console.error(`Nessuna pagina trovata con il nome "${pageName}".`);
        }
    }


}
