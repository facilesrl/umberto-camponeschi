import { Component } from '@angular/core';
import { RotateComponent } from '../rotate/rotate.component';
import { ScrollManagerComponent } from '../scroll-manager/scroll-manager.component';

@Component({
  selector: 'app-name-rotate',
  standalone: true,
  imports: [RotateComponent, ScrollManagerComponent],
  templateUrl: './name-rotate.component.html',
  styleUrl: './name-rotate.component.css'
})
export class NameRotateComponent {

  currentStep: number = 0; // Valore iniziale dello step

    // Funzione per ricevere lo step dalla scroll manager
    onScrollStepChanged(step: number): void {
        this.currentStep = step;  // Aggiorna currentStep con il nuovo valore
    }

}
