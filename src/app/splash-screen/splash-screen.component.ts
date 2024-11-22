import { Component, OnInit } from '@angular/core';
import { SplashScreenBehaviorDirective } from '../splash-screen-behavior.directive';  // Importa la direttiva
import { NameRotateComponent } from '../name-rotate/name-rotate.component';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-splash-screen',
    standalone: true,
    imports: [  CommonModule,
                SplashScreenBehaviorDirective, 
                NameRotateComponent],
    templateUrl: './splash-screen-2.component.html',
    styleUrls: ['./splash-screen-2.component.css']
})
export class SplashScreenComponent implements OnInit {

    words: string[] = ["Grafica", "Illuminotecnica", "Fotografia", "Teatro"];

    splashScreenVisible: boolean = true;  // La visibilità è controllata dalla direttiva
    //isFadeAll: boolean = false;  // Variabile per la classe fade-all
    //isHidden: boolean = false;  // Variabile per la classe di nascondimento
    //isSliding: boolean = false;  // Variabile per l'animazione di scivolamento
    //isPositionOut: boolean = true;  // Variabile per la posizione delle parole

    //currentWord: string = "Grafica";  // Parola iniziale da mostrare

    ngOnInit(): void {
        // Se lo splash screen non è stato già mostrato, mostralo
        if (!sessionStorage.getItem('splashShown')) {
            sessionStorage.setItem('splashShown', 'true');
        } else {
            this.splashScreenVisible = false;
        }

        // Gestione temporale per animazioni
        /*setTimeout(() => {
            this.isFadeAll = true;  // Attiva la classe fade-all
        }, 10000); // 10 secondi*/
        /*
            setTimeout(() => {
              this.isSliding = true;  // Attiva l'animazione di scivolamento
              this.isPositionOut = false;  // Rende visibile la parola
            }, 1500); // Inizia dopo 1.5 secondi
        
            // Cambio delle parole ogni 3 secondi
            setInterval(() => {
              this.changeWord();
            }, 3000);*/
    }

    /*changeWord(): void {
      const words = ["Grafica", "Illuminotecnica", "Fotografia"];
      const nextIndex = (words.indexOf(this.currentWord) + 1) % words.length;
      this.currentWord = words[nextIndex];
    }*/
}
