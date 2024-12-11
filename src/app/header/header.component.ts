import { Component,HostListener, SimpleChanges ,ViewContainerRef, ViewChild, Type } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

import { ScrollManagerComponent } from '../scroll-manager/scroll-manager.component';
import { HeaderLayout1Component } from './header-layout-1/header-layout-1.component';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [  CarouselModule,
                CommonModule,
                ScrollManagerComponent,
                HeaderLayout1Component
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

    @ViewChild('layoutContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
    
    private layoutMap: { [key: string]: Type<any> } = {
        layout1: HeaderLayout1Component
    };

    selectedLayout: string = '';  // Cambia dinamicamente il nome del layout
    defaultLayout: string = 'layout1';

    items = [
        { src: 'assets/images/AntonioECleopatra.jpg', alt: 'Descrizione immagine 1', description: 'Antonio e Cleopatra' },
        { src: 'assets/images/Come-gli-uccelli_Ph_Giuseppe-Distefano51_da-sx-Palumeri-Forni.jpg', alt: 'Descrizione immagine 2', description: 'Come gli uccelli' },
        { src: 'assets/images/Lazarus.jpg', alt: 'Descrizione immagine 3', description: 'Lazarus' }
    ];

    setTemplate(templateName: string): void {
        if (templateName) {
            this.selectedLayout = templateName;
        }
        else {
            console.error(`Template "${templateName}" non trovato.`);
        }
    }

    layoutFind:boolean=false;

    ngAfterViewInit(){
        this.loadLayout(this.selectedLayout);
    }
    ngOnChanges(changes: SimpleChanges): void {
        // Ricarica il layout ogni volta che ci sono cambiamenti
        this.loadLayout(this.selectedLayout);
    }

    loadLayout(layoutName: string): void {
        const layoutComponent = this.layoutMap[layoutName];
        if (!layoutComponent) {
            console.error(`Layout "${layoutName}" non trovato`);
            this.layoutFind=false;
       
        }
        this.container.clear(); // Pulisce il contenitore
        const componentRef = this.container.createComponent(layoutComponent); // Crea il layout
        // Passa variabili come input al componente dinamico
        componentRef.instance.items = this.items;
        this.layoutFind=true;
    }

    translateY: number = 0;
    onScrollReceived(scrollStepChanged: number) {
        console.log('Received from child:', scrollStepChanged);
    }


    currentStep: number = 0; // Valore iniziale dello step

    // Funzione per ricevere lo step dalla scroll manager
    onScrollStepChanged(step: number): void {
        this.currentStep = step;  // Aggiorna currentStep con il nuovo valore
    }

 

    @HostListener('wheel', ['$event'])
    onWheelScroll(event: WheelEvent) {
        const scrollDelta = event.deltaY;  // Movimento verticale della rotella
        this.translateY += scrollDelta/4;
       const minTranslate :number = 0;
       const maxTranslate :number = 150;

       if(this.translateY>maxTranslate){
        this.translateY=150;
       }
       if(this.translateY<minTranslate){
        this.translateY=0;
       }
    }

    lazyScroll(): string {
       return `translateY(${this.translateY}px)`
    }
    

}




