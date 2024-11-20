import { Component } from '@angular/core';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';
import { PortfolioCategoryComponent } from '../portfolio-category/portfolio-category.component';
import { ZoomOutContainerComponent } from '../zoom-out-container/zoom-out-container.component';
import { ScrollManagerComponent } from '../scroll-manager/scroll-manager.component';
import { RotateComponent } from '../rotate/rotate.component';
import { InEvidenzaBoxComponent } from '../in-evidenza-box/in-evidenza-box.component';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [  SplashScreenComponent, 
                PortfolioCategoryComponent, 
                ZoomOutContainerComponent, 
                RotateComponent, 
                ScrollManagerComponent, 
                InEvidenzaBoxComponent,
                HeaderComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    currentStep: number = 0; // Valore iniziale dello step

    // Funzione per ricevere lo step dalla scroll manager
    onScrollStepChanged(step: number): void {
        this.currentStep = step;  // Aggiorna currentStep con il nuovo valore
    }

}
