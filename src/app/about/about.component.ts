import { Component,HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollManagerComponent } from '../scroll-manager/scroll-manager.component';


@Component({
    selector: 'app-about',
    standalone: true,
    imports: [ScrollManagerComponent, CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {

    currentStep: number = 0;
    
    boxes: number = 4;
    boxesArray: any[] = Array.from({ length: this.boxes });
    rowWidth: number = 1439;
    currentTranslateXRow: number = 0;

    minTranslateX: number = 0;
    maxTranslateX: number = -(this.boxes - 1) * this.rowWidth;  // Limite inferiore;;

    initialTranslateX: number[] = [];


    constructor() {
        // Calcola il limite massimo di traslazione per i box
        this.maxTranslateX = -(this.boxes - 1) * this.rowWidth;

        // Calcoliamo la posizione iniziale di ciascuna riga
        for (let i = 0; i < this.boxes; i++) {
            this.initialTranslateX.push(i * this.rowWidth);  // Ogni riga ha una posizione iniziale differente
        }
    }

    inputScrollStep(scrollStepChanged:number){
        this.currentStep = scrollStepChanged;
    }

    // Ascoltiamo l'evento di scroll con la rotella del mouse
    @HostListener('wheel', ['$event'])
    onWheelScroll(event: WheelEvent) {
        
        const scrollDelta = event.deltaY;  // Movimento verticale della rotella
        
        if(this.currentTranslateXRow>this.maxTranslateX && this.currentStep==0){
            event.preventDefault();  // Impedisce lo scroll verticale della pagina
            this.setTranslateX(scrollDelta);
        }
        else if(this.currentTranslateXRow==this.maxTranslateX && this.currentStep==0){
            if(scrollDelta<0){
                event.preventDefault();  // Impedisce lo scroll verticale della pagina
                this.setTranslateX(scrollDelta);
            }
        }
    }


    setTranslateX(scrollDelta:number){
        // Aggiorniamo la traslazione orizzontale delle righe in base allo scroll
        this.currentTranslateXRow -= scrollDelta / 4;  // Aggiungi deltaY per uno scroll continu
        // Limitiamo la traslazione per evitare che le righe si spostino troppo oltre i limiti

        if (this.currentTranslateXRow > this.minTranslateX) {
            this.currentTranslateXRow = this.minTranslateX;  // Non può superare il limite superiore
        }

        if (this.currentTranslateXRow < this.maxTranslateX) {
            this.currentTranslateXRow = this.maxTranslateX;  // Non può superare il limite inferiore
        }

        //console.log('Scroll Delta:', scrollDelta);
        //console.log('Traslazione finale della riga:', this.currentTranslateXRow);

    }

    // Metodo per ottenere la traslazione orizzontale della riga
    getTranslateXRow(): string {
        return `translateX(${this.currentTranslateXRow}px)`;  // Traslazione orizzontale delle righe
    }


    getInitialPosition(index: number): string {
        const initialPosition = this.initialTranslateX[index];
        return `${initialPosition}px`;
    }
}
