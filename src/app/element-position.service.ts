import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ElementPositionService {

    constructor() { }

    /**
     * Calcola la posizione di un elemento in termini di offset (rispetto al documento).
     * @param elementRef Riferimento all'elemento di cui vogliamo calcolare la posizione
     * @returns Oggetto con le proprietà left, top (posizione dell'elemento)
     */
    getElementPosition(elementRef: ElementRef) {
        const element = elementRef.nativeElement;
        const rect = element.getBoundingClientRect();

        // Calcolare la posizione dell'elemento rispetto alla pagina
        const position = {
            top: rect.top + window.scrollY,  // posizione verticale (rispetto al documento)
            left: rect.left + window.scrollX,  // posizione orizzontale (rispetto al documento)
        };

        return position;
    }

    /**
     * Calcola la posizione "in step" di un elemento rispetto alla pagina.
     * Questo calcolo può essere personalizzato per specifici layout o animazioni.
     * @param elementRef Riferimento all'elemento
     * @param divisor Un valore opzionale per fare il calcolo in step (ad esempio 16)
     * @returns Oggetto con le informazioni di step calcolate (initialStep, finalStep)
     */
    getElementSteps(elementRef: ElementRef, divisor: number = 8):any {
        const position = this.getElementPosition(elementRef);
        const elementHeight = elementRef.nativeElement.offsetHeight;
    
        const initialStep:number = Math.floor((position.top)/divisor);
        const finalStep:number = Math.floor((position.top + elementHeight) / divisor);

        return { position, initialStep, finalStep };
    }
}
