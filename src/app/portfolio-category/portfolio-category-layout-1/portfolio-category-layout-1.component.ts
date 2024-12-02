import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-portfolio-category-layout-1',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio-category-layout-1.component.html',
    styleUrl: './portfolio-category-layout-1.component.css'
})
export class PortfolioCategoryLayout1Component {
    @Input() section_array: any[] = []

    ngOnInit(){
        console.log(this.section_array)
    }
}
