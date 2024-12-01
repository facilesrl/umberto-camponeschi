import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';


@Component({
    selector: 'app-header-layout-1',
    standalone: true,
    imports: [CommonModule, CarouselModule],
    templateUrl: './header-layout-1.component.html',
    styleUrl: './header-layout-1.component.css'
})
export class HeaderLayout1Component {

    @Input() items: any[]=[];



    customOptions = {
        loop: true,
        margin: 100,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    };
    

}
