import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-category',
  standalone: true,
  imports: [CarouselModule,CommonModule],
  templateUrl: './portfolio-category-2.component.html',
  styleUrl: './portfolio-category-2.component.css'
})
export class PortfolioCategoryComponent {

    
    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: true,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            740: {
                items: 2
            },
            1100: {
                items: 3
            }
        },
        nav: true
    }

    constructor(){
    }

    ngOnInit(){
        console.log('cacca');
    
    }

    number_section:number = 5;
    section_array:number[] = Array.from({ length: this.number_section }, (v, i) => i);
    

}
