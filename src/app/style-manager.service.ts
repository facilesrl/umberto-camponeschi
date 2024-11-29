import { Injectable, Renderer2 } from '@angular/core';


@Injectable({
    providedIn: 'root', // Questo rende il servizio disponibile ovunque nell'app
})
export class StyleManagerService {

    constructor() { }

    createDynamicStyles(
        renderer:Renderer2,
        totalSteps: number,
        initialStep: number,
        finalStep: number,
        initial_translate:number,
        final_translate:number,
        classNameInput:string
    ) {
        const style = renderer.createElement('style');
        style.type = 'text/css';

        let stylesContent = '';

        // Stili per gli step iniziali
        for (let step = 0; step < initialStep; step++) {
            const className = `${classNameInput}.step-${step}`;
            stylesContent += this.generateDynamicStyles(className, initial_translate);
        }

        var  currentTranslate:number = initial_translate;

        // Stili per gli step intermedi
        for (let step = initialStep; step < finalStep; step++) {
            currentTranslate -= 5;
            const className = classNameInput + `.step-${step}`;
            stylesContent += this.generateDynamicStyles(className, currentTranslate);
        }

        // Stili per gli step finali
        for (let step = finalStep; step < totalSteps; step++) {
            const className = classNameInput+`.step-${step}`;
            stylesContent += this.generateDynamicStyles(className, final_translate);
        }

        // Applica tutti gli stili generati al tag <style>
        style.innerHTML = stylesContent;
        renderer.appendChild(document.head, style);
    }

    private generateDynamicStyles(className: string, currentTranslate: number): string {
        return `
      ${className} {
        transform: translateY(${currentTranslate}px)!important;
        
      }
    `;
    }
}

