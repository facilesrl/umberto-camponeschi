import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Directive({
    selector: '[appSplashScreenBehavior]',
    standalone: true
})
export class SplashScreenBehaviorDirective implements OnInit, OnDestroy {

    //private wordChangeSubscription: Subscription = undefined!;
    //private wordSlidingSubscription: Subscription = undefined!;
    private splashScreenVisible: boolean = true;
    //private currentWordIndex: number = 0;
    //private isSliding: boolean = false;
    //private isPositionOut: boolean = true;

    //private currentWord: string = this.words[this.currentWordIndex];

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        // Impostiamo il comportamento dello splash screen
        setTimeout(() => { 
            this.fadeSplashScreen(); // Nasconde lo splash screen dopo 10 secondi
        }, 10000); // Nasconde dopo 10 secondi

        // **COMMENTATO**: Non usiamo la logica del cambio parole per ora
        // const wordChangeObservable = interval(3000); // Ogni 3 secondi, cambia parola
        // const wordSlidingObservable = interval(1000); // Ogni 1 secondo, anima il cambio della parola

        // **COMMENTATO**: Non inizia più il cambiamento delle parole
        // setTimeout(() => {
        //   this.startWordChange(wordChangeObservable, wordSlidingObservable);
        // }, 3500); // Inizia il cambiamento delle parole dopo 3.5 secondi
    }

    ngOnDestroy(): void {
        // Cleanup degli observable quando la direttiva viene distrutta
       /* if (this.wordChangeSubscription) {
            this.wordChangeSubscription.unsubscribe();
        }
        if (this.wordSlidingSubscription) {
            this.wordSlidingSubscription.unsubscribe();
        }*/
    }

    // Funzione per nascondere lo splash screen dopo un certo periodo
    private fadeSplashScreen() {
        this.splashScreenVisible = false;  // Cambia la visibilità dello splash screen
        this.renderer.addClass(this.el.nativeElement, 'fade-all');  // Nasconde il contenitore
    }

    // Funzione per gestire il cambiamento delle parole (COMMENTATA PER ORA)
    private startWordChange(wordChangeObservable: any, wordSlidingObservable: any) {
        // **COMMENTATO**: Questo codice non viene eseguito per ora, serve solo se vogliamo cambiare le parole
        // this.wordChangeSubscription = wordChangeObservable.subscribe(() => {
        //   this.updateCurrentWord(); // Cambia la parola attuale

        //   // Dopo aver cambiato la parola, attiva un'animazione di sliding
        //   setTimeout(() => {
        //     this.isSliding = true;  // Attiva l'animazione per far scivolare la parola
        //     this.isPositionOut = false;  // Rende la parola visibile
        //   }, 1000); // Aspetta 1 secondo per avviare l'animazione
        // });
    }

    // Funzione per aggiornare la parola corrente (COMMENTATA PER ORA)
    private updateCurrentWord() {
        // **COMMENTATO**: Non aggiorniamo più la parola per ora
        // if (this.currentWordIndex === this.words.length) {
        //   this.currentWordIndex = 0;  // Torna alla prima parola
        // }

        // this.currentWord = this.words[this.currentWordIndex]; // Assegna la parola attuale
        // this.currentWordIndex++; // Passa alla prossima parola nell'array
    }
}
