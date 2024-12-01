import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home-section.component.html',
    styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {

    number_section: number = 1;
    section_array:number[] = Array.from({length:this.number_section}, (v, i) => i)

}
