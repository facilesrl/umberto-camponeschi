import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-pointer',
  templateUrl: './custom-pointer.component.html',
  styleUrls: ['./custom-pointer.component.css'],
  imports: [CommonModule],
  standalone:true
})
export class CustomPointerComponent {
  x: number = 0;
  y: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }
}
