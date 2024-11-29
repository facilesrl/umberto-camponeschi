import { Component, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollManagerComponent } from '../scroll-manager/scroll-manager.component';
import { AfterViewInit } from '@angular/core';
import { StyleManagerService } from '../style-manager.service';
import { ElementPositionService } from '../element-position.service';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [ScrollManagerComponent, CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {

    currentStep: number = 0;

    boxes: number = 2;
    boxesArray: any[] = Array.from({ length: this.boxes });
    rowWidth: number = 1439;
    currentTranslateXRow: number = 0;

    minTranslateX: number = 0;
    maxTranslateX: number = -(this.boxes - 1) * this.rowWidth;  // Limite inferiore;;

    initialTranslateX: number[] = [];

    textHeight: number = 612;
    currentTranslateY: number = this.textHeight;

    scrollTextFlag: boolean = false;
    positionScrollableTextContainer: number = 0;

    @ViewChild('scrollableDiv') scrollableDiv!: ElementRef;
    @ViewChild('scrollableText') scrollableText!: ElementRef;
    @ViewChild('scrollableTextContainer') scrollableTextContainer!: ElementRef;
    constructor(private styleManager: StyleManagerService, private elementPositionCalculator: ElementPositionService,private renderer: Renderer2) {
        // Calcola il limite massimo di traslazione per i box
        this.maxTranslateX = -(this.boxes - 1) * this.rowWidth;

        // Calcoliamo la posizione iniziale di ciascuna riga
        for (let i = 0; i < this.boxes; i++) {
            this.initialTranslateX.push(i * this.rowWidth);  // Ogni riga ha una posizione iniziale differente
        }

    }
    total_steps:number = 300;
    initial_step: number=0;
    final_step:number = 0;

    position: { top: number, left: number } = { top: 0, left: 0 };
    stepPosition: { position: { top: number; left: number; }; initialStep:number; finalStep:number}={ position: { top: 0, left: 0 },initialStep:0,finalStep:0};
   
    ngAfterViewInit() {
        // Verifica se l'elemento scrollabile è presente

        if (this.scrollableTextContainer) {
            // Creare e applicare dinamicamente il tag <style>
            this.position=this.elementPositionCalculator.getElementPosition(this.scrollableTextContainer);
            console.log(this.position,'posizione calcolata con il servizio');
            this.stepPosition = this.elementPositionCalculator.getElementSteps(this.scrollableTextContainer);
            console.log('stampa obj steposition', this.stepPosition);
            console.log('stampo initial step in about',this.stepPosition.initialStep);
            this.styleManager.createDynamicStyles(this.renderer,
                                                this.total_steps,
                                                this.stepPosition.initialStep - 90,
                                                this.stepPosition.finalStep,
                                                612,
                                                0,
                                                '');
        }
    }

    inputScrollStep(scrollStepChanged: number) {
        this.currentStep = scrollStepChanged;
    }

    // Ascoltiamo l'evento di scroll con la rotella del mouse
    @HostListener('wheel', ['$event'])
    onWheelScroll(event: WheelEvent) {

        const scrollDelta = event.deltaY;  // Movimento verticale della rotella

        if (this.currentTranslateXRow > this.maxTranslateX && this.currentStep == 0) {
            event.preventDefault();  // Impedisce lo scroll verticale della pagina
            this.setTranslateX(scrollDelta);
        }
        else if (this.currentTranslateXRow == this.maxTranslateX && this.currentStep == 0) {
            if (scrollDelta < 0) {
                event.preventDefault();  // Impedisce lo scroll verticale della pagina
                this.setTranslateX(scrollDelta);
            }
        }

    }


    setTranslateX(scrollDelta: number) {
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
