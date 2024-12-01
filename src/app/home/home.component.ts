import { Component } from '@angular/core';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';
import { ScrollManagerComponent } from '../scroll-manager/scroll-manager.component';
import { InEvidenzaBoxComponent } from '../in-evidenza-box/in-evidenza-box.component';
import { HeaderLayout1Component } from '../header/header-layout-1/header-layout-1.component';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from '../home-section/home-section.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [  SplashScreenComponent, 
                ScrollManagerComponent, 
                InEvidenzaBoxComponent,
                HeaderLayout1Component,
                CommonModule,
                HomeSectionComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    items = [
        { src: 'assets/images/AntonioECleopatra.jpg', alt: 'Descrizione immagine 1', description: 'Antonio e Cleopatra' },
        { src: 'assets/images/Come-gli-uccelli_Ph_Giuseppe-Distefano51_da-sx-Palumeri-Forni.jpg', alt: 'Descrizione immagine 2', description: 'Come gli uccelli' },
        { src: 'assets/images/Lazarus.jpg', alt: 'Descrizione immagine 3', description: 'Lazarus' }
    ];


    currentStep: number = 0; // Valore iniziale dello step

    // Funzione per ricevere lo step dalla scroll manager
    onScrollStepChanged(step: number): void {
        this.currentStep = step;  // Aggiorna currentStep con il nuovo valore
    }

    translateY:number = 0;

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
