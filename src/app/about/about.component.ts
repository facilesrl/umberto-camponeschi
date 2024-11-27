import { Component, HostListener, ViewChild, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollManagerComponent } from '../scroll-manager/scroll-manager.component';
import { AfterViewInit } from '@angular/core';

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

    textHeight: number = 612;
    currentTranslateY: number = this.textHeight;
    
    scrollTextFlag:boolean = false;


    constructor() {
        // Calcola il limite massimo di traslazione per i box
        this.maxTranslateX = -(this.boxes - 1) * this.rowWidth;

        // Calcoliamo la posizione iniziale di ciascuna riga
        for (let i = 0; i < this.boxes; i++) {
            this.initialTranslateX.push(i * this.rowWidth);  // Ogni riga ha una posizione iniziale differente
        }
    }
    @ViewChild('scrollableDiv') scrollableDiv!: ElementRef;
    @ViewChild('scrollableText') scrollableText!: ElementRef;
    @ViewChild('scrollableTextContainer')scrollableTextContainer!:ElementRef

    ngAfterViewInit() {
        this.checkIfElementIsInView(this.scrollableTextContainer,this.containerRowFlagVisible);
    }

    onScroll(event: Event) {
       
        this.checkIfElementIsInView(this.scrollableTextContainer,this.containerFlagVisible);
    }
    containerFlagVisible= {value:false};
    containerRowFlagVisible={value:false};
    // Funzione per verificare se l'elemento è visibile nella finestra del browser
    checkIfElementIsInView(element:ElementRef,elementScrollFlag:{value:boolean}) {
        const target = element.nativeElement;
        const rect = target.getBoundingClientRect();  // Otteniamo le dimensioni relative alla finestra

        // Verifica se l'elemento è visibile verticalmente nella finestra
        if (rect.top<200&& rect.top>-200) {
            console.log('Elemento completamente visibile nella finestra (verticalmente)!');
            console.log('recttop', rect.top);
            console.log('rectbottom', rect.bottom);
            
            elementScrollFlag.value=true;
            console.log('visibilità container',elementScrollFlag.value);
        
        } else {
            console.log('recttop', rect.top);
            console.log('rectbottom', rect.bottom);
            console.log('elemento nascosto');
            elementScrollFlag.value=false;
            
            console.log('visibilità container',elementScrollFlag.value);
        } 

    }

    inputScrollStep(scrollStepChanged: number) {
        this.currentStep = scrollStepChanged;
    }


    // Ascoltiamo l'evento di scroll con la rotella del mouse
    @HostListener('wheel', ['$event'])
    onWheelScroll(event: WheelEvent) {

        const scrollDelta = event.deltaY;  // Movimento verticale della rotella
        this.onScroll(event);

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

        
            if(this.containerFlagVisible.value){
                if(!this.scrollTextFlag){
                    event.preventDefault();
                    this.scrollText(scrollDelta);
                }
                else{
                    this.scrollText(scrollDelta);
                }
                
                
            
            }


        
            

    }

    scrollText(scrollDelta:number){
        const target = this.scrollableText.nativeElement;
        this.setTranslateY(target,scrollDelta);
    }
   

    setTranslateY(target:ElementRef,scrollDelta:number){
        if(this.currentTranslateY<= this.textHeight){
            this.currentTranslateY-=scrollDelta*1.2;
            this.scrollTextFlag=false;
        }
        else if(this.currentTranslateY> this.textHeight){
            this.currentTranslateY = this.textHeight
            this.scrollTextFlag=true;
        }
        if(this.currentTranslateY<=0){
            this.currentTranslateY =0;
            this.scrollTextFlag=true;
        }
    }

    getTranslateY(): string {
        return `translateY(${this.currentTranslateY}px)`;  // Traslazione orizzontale delle righe
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
