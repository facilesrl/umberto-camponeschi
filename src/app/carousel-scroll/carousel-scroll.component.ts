import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-scroll.component.html',
  styleUrls: ['./carousel-scroll.component.css']
})
export class CarouselScrollComponent {




  totalItems:number = 5;
  items = Array.from({ length: this.totalItems }, (_, i) => i);

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollY / totalHeight;
  }
}
