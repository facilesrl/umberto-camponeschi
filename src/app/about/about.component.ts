import { Component } from '@angular/core';
import { ScrollManagerComponent } from '../scroll-manager/scroll-manager.component';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollManagerComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  currentStep: number = 0;
  currentTranslateX: number = 0;
  currentTranslateXRow: number = 0;

  boxes: number = 8;

  boxesArray: any[] = Array.from({ length: this.boxes });
  boxWidth: number = 300;
  minTranslateX: number = 0;
  maxTranslateX: number = 0;

  rowWidth: number = 1439;

  initialTranslateX: number[] = [];
  wheelFlag: boolean = false;

  constructor() {
    // Calcola il limite massimo di traslazione per i box
    this.maxTranslateX = -(this.boxes - 1) * this.boxWidth;

    // Calcoliamo la posizione iniziale di ciascuna riga
    for (let i = 0; i < this.boxes; i++) {
      this.initialTranslateX.push(i * this.rowWidth);  // Ogni riga ha una posizione iniziale differente
    }
  }

  // Ascoltiamo l'evento di scroll con la rotella del mouse
  @HostListener('wheel', ['$event'])
  onWheelScroll(event: WheelEvent) {
    event.preventDefault();  // Impedisce lo scroll verticale della pagina

    const scrollDelta = event.deltaY;  // Movimento verticale della rotella

    // Aggiorniamo la traslazione orizzontale delle righe in base allo scroll
    this.currentTranslateXRow -= scrollDelta/4;  // Aggiungi deltaY per uno scroll continuo

    // Limitiamo la traslazione per evitare che le righe si spostino troppo oltre i limiti
    const maxTranslate = -(this.boxes - 1) * this.rowWidth;  // Limite inferiore
    const minTranslate = 0;  // Limite superiore (0 è la posizione iniziale)

    if (this.currentTranslateXRow > minTranslate) {
      this.currentTranslateXRow = minTranslate;  // Non può superare il limite superiore
    }

    if (this.currentTranslateXRow < maxTranslate) {
      this.currentTranslateXRow = maxTranslate;  // Non può superare il limite inferiore
    }

    console.log('Scroll Delta:', scrollDelta);
    console.log('Traslazione finale della riga:', this.currentTranslateXRow);
  }

  // Metodo per ottenere la traslazione orizzontale della riga
  getTranslateXRow(): string {
    return `translateX(${this.currentTranslateXRow}px)`;  // Traslazione orizzontale delle righe
  }

  // Metodo che calcola la traslazione per ogni box
  getTranslateXValue(index: number): string {
    return `translateX(${this.currentTranslateX}px)`;  // Traslazione orizzontale dinamica dei box
  }

  getInitialPosition(index: number): string {
    const initialPosition = this.initialTranslateX[index];
    return `${initialPosition}px`;
  }
}
