import { Component } from '@angular/core';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';
import { PortfolioCategoryComponent } from '../portfolio-category/portfolio-category.component';
import { ZoomOutContainerComponent } from '../zoom-out-container/zoom-out-container.component';
import { ScrollManagerComponent } from '../scroll-manager/scroll-manager.component';
import { RotateComponent } from '../rotate/rotate.component';

@Component({
    selector: 'app-test-page',
    standalone: true,
    imports: [SplashScreenComponent, PortfolioCategoryComponent, ZoomOutContainerComponent, RotateComponent, ScrollManagerComponent],
    templateUrl: './test-page.component.html',
    styleUrl: './test-page.component.css'
})
export class TestPageComponent {

    currentStep: number = 0; // Valore iniziale dello step

    // Funzione per ricevere lo step dalla scroll manager
    onScrollStepChanged(step: number): void {
        this.currentStep = step;  // Aggiorna currentStep con il nuovo valore
    }

}
