import { Component } from '@angular/core';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-portfolio-category',
  standalone: true,
  imports: [CarouselModule],
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

}
