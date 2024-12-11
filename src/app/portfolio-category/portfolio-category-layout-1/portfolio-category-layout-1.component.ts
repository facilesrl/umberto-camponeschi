import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Category } from '../../shared/models/category.model';

@Component({
    selector: 'app-portfolio-category-layout-1',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio-category-layout-1.component.html',
    styleUrl: './portfolio-category-layout-1.component.css'
})
export class PortfolioCategoryLayout1Component {

    @Input() categories: Category[] = [];

    constructor(private router:Router){

    }
    ngOnInit(){
   
        console.log(this.categories,'categorie da db in layout')
    }

    goToCategoryDetails(categoryName: string): void {
        this.router.navigate(['/portfolio1', categoryName]);
    }
}
