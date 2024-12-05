import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-portfolio-category-layout-1',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio-category-layout-1.component.html',
    styleUrl: './portfolio-category-layout-1.component.css'
})
export class PortfolioCategoryLayout1Component {
    @Input() categorie_foto: any[] = [];

    constructor(private router:Router){

    }
    ngOnInit(){
        console.log(this.categorie_foto)
    }

    goToCategoryDetails(categoryName: string): void {
        this.router.navigate(['/portfolio1', categoryName]);
    }
}
