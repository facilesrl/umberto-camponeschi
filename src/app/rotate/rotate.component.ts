import { Component, Input, OnChanges, SimpleChanges, Renderer2, ElementRef,ViewChild,HostListener } from '@angular/core';
import {  } from '@angular/core';
@Component({
    selector: 'app-rotate',
    standalone: true,
    imports: [],
    templateUrl: './rotate.component.html',
    styleUrl: './rotate.component.css'
})
export class RotateComponent {

    @Input() current_step: number = 0;  // Step ricevuto dalla scroll manager
    private rotation_step: number = 15; // 15 gradi per step di scroll

    private rotationInterval: any;       // Variabile per l’intervallo
    private animationDuration: number = 10000; // Durata dell'animazione in millisecondi

    constructor(private el: ElementRef, private renderer: Renderer2) { }
    // Usa ViewChild per selezionare il div interno
    @ViewChild('rotateElement', { static: true }) rotateElement: ElementRef | undefined;
    
    ngOnInit(): void {
        // Avvia la rotazione continua quando il componente è inizializzato
        if (this.hasFixedId()) {
            this.startContinuousRotation();
        }
    }


    startContinuousRotation(): void {
        let currentDegrees = 0;
        this.rotationInterval = setInterval(() => {
            currentDegrees += this.rotation_step/5;
            this.applyRotation(currentDegrees);
        }, 100); // Ogni 100ms aumenta di `rotation_step` gradi

        // Ferma l'animazione dopo la durata definita
        setTimeout(() => this.stopContinuousRotation(), this.animationDuration);
    }

    stopContinuousRotation(): void {
        if (this.rotationInterval) {
            clearInterval(this.rotationInterval);
            this.rotationInterval = null;
        }
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['current_step']) {
            this.applyRotation(this.current_step * this.rotation_step);
            console.log(this.current_step,'stampa current step')
        }
    }

    applyRotation(degrees: number): void {
        // Applica la rotazione all'elemento
        if (this.rotateElement) {
            console.log('Applying rotation to rotateElement', degrees, 'degrees');
            this.renderer.setStyle(this.rotateElement.nativeElement, 'transform', `rotate(${degrees}deg)`);
        }
    }


    // Controlla se l'elemento ha l'ID "fixed"
    private hasFixedId(): boolean {
        // Controlla l'ID dell'elemento referenziato tramite ViewChild
        if (this.rotateElement) {
            const hasId = this.rotateElement.nativeElement.id === 'fixed';
            return hasId;
        } else {
            return false;
        }
    }

    // Ascolta l'evento mousemove
    /*
    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent): void {
        
        if (this.hasFixedId()) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            // Ottieni la posizione e dimensione dell'elemento
            const rect = this.rotateElement?.nativeElement.getBoundingClientRect();
            const centerX = rect?.left + rect?.width / 2;  // Centro dell'elemento
            const centerY = rect?.top + rect?.height / 2; // Centro dell'elemento
            // Calcola l'angolo tra il mouse e il centro dell'elemento
            const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);

            // Applica la rotazione
            this.applyRotation(angle);
        }
    }*/

}
