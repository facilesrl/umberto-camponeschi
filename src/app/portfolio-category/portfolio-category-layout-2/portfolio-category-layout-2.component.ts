import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-portfolio-category-layout-2',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio-category-layout-2.component.html',
    styleUrl: './portfolio-category-layout-2.component.css'
})
export class PortfolioCategoryLayout2Component {

    constructor(private router:Router){}

    @Input() categorie_foto: any[] =[];
    ngOninit(){
        console.log(this.categorie_foto, 'dentro layoput2 on init')
    }

    ngAfterViewInit(){
        console.log(this.categorie_foto, 'dentro layoput2 after init')
    }


    goToCategoryDetails(categoryName: string): void {
        this.router.navigate(['/portfolio2', categoryName]);
    }
}
