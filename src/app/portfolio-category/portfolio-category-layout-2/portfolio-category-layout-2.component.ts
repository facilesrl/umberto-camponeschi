import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
    selector: 'app-portfolio-category-layout-2',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio-category-layout-2.component.html',
    styleUrl: './portfolio-category-layout-2.component.css'
})
export class PortfolioCategoryLayout2Component {

    @Input() section_array: any[] = [];
}
