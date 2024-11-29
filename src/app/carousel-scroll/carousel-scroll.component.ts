import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy,HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementPositionService } from '../element-position.service';

@Component({
    selector: 'app-carousel-scroll',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './carousel-scroll.component.html',
    styleUrls: ['./carousel-scroll.component.css']
})
export class CarouselScrollComponent implements AfterViewInit, OnDestroy {

    
    constructor(private elementPosition:ElementPositionService){

    }

    @ViewChild('scrollCarousel') scrollCarousel!: ElementRef;
    @ViewChild('carouselContent') carouselContent: ElementRef | undefined;

    totalItems: number = 5;
    items = Array.from({ length: this.totalItems }, (_, i) => i);
    scrollPercentage: number = 0;

    position:{top:number, left:number} = {top:0,left:0}
    isVisible:boolean= false

    ngAfterViewInit() {

        this.position = this.elementPosition.getElementPosition(this.scrollCarousel)
        console.log(this.position,'posizione carosello')
        
    }

    @HostListener('window:scroll', [])
    onWindowScroll(): void {
      const scrollPosition = window.scrollY + window.innerHeight; // Posizione dello scroll attuale
      if (scrollPosition > this.position.top) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
  
      // Aggiorna il traslateX solo quando visibile
      if (this.isVisible && this.carouselContent) {
        const translateXValue = -(scrollPosition - this.position.top) / 5; // Divisore per rallentare l'effetto
        this.carouselContent.nativeElement.style.transform = `translateX(${translateXValue}px)`;
      }
    }

  

    ngOnDestroy() {
        if (this.scrollCarousel) {
            
        }
    }
}
