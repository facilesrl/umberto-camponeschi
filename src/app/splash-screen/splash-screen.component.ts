import { Component, OnInit } from '@angular/core';
import { interval,Subscription } from 'rxjs';
import { NameRotateComponent } from '../name-rotate/name-rotate.component';


@Component({
    selector: 'app-splash-screen',
    standalone: true,
    imports: [NameRotateComponent],
    templateUrl: './splash-screen-2.component.html',
    styleUrl: './splash-screen-2.component.css'
})
export class SplashScreenComponent implements OnInit {

    splashScreenVisible: boolean = false; 

    isHidden: boolean = false;
    isFadeAll: boolean = false;

    isSliding: boolean = false;  // Variabile per tracciare lo stato di animazione
    isPositionOut: boolean = true;


    words: string[] = ["Grafica", "Illuminotecnica", "Fotografia"];

    currentWordIndex:number = 0;

    currentWord: string = this.words[this.currentWordIndex];

    private wordChangeSubscription: Subscription= undefined!;
    private wordSlidingSubscription: Subscription= undefined!;


    ngOnInit(): void {

        const splashScreenShown = false;
    
        if (!splashScreenShown) {

            this.splashScreenVisible = true;
    
            setTimeout(() => {
                this.isHidden = true;  // Nasconde il sipario
            }, 3000); // 3000ms = 3 secondi

            setTimeout(() => {
                this.isFadeAll = true;  // Nasconde il sipario
            }, 3000); // 3000ms = 3 secondi


            const wordChangeObservable = interval(3000);
            const wordSlidingObservable = interval(1000);
        
            setTimeout(()=>{
                this.isSliding = false;
                this.isPositionOut = true;

                this.wordChangeSubscription = wordChangeObservable.subscribe(() => {
                    this.isSliding = false;
                    this.isPositionOut = true;
                   
                   
                    if(this.currentWordIndex==this.words.length){
                        
                        this.currentWordIndex=0;
                        this.currentWord=this.words[this.currentWordIndex];
                        this.currentWordIndex = this.currentWordIndex+1;
                        
                        setTimeout(()=>{
                            this.isSliding = true;
                            this.isPositionOut = false;
                        },1500)


                        this.wordSlidingSubscription = wordSlidingObservable.subscribe(()=>{
                            
                            
                        })
                        
                    }
                    else{
                        this.currentWord=this.words[this.currentWordIndex];
                        this.currentWordIndex = this.currentWordIndex+1;
                        setTimeout(()=>{
                            this.isSliding = true;
                            this.isPositionOut = false;
                        },1000)

                    }
                    
                
                });
            },3500 );
            sessionStorage.setItem('splashShown', 'true'); 
        }

    }

}
