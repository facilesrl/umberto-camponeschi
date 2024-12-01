import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header-layout-2',
    standalone: true,
    imports: [CarouselModule, CommonModule],
    templateUrl: './header-layout-2.component.html',
    styleUrl: './header-layout-2.component.css'
})
export class HeaderLayout2Component {
    @Input() items!: any;
    
    customOptions = {
        items: 1,
        loop: true,
        margin: 100,
        nav: true,
        dots: true
    };
}
