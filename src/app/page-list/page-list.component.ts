import { Component } from '@angular/core';
import { Page } from '../shared/models/page.model';
import { PagesDataService } from '../pages-data.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-page-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './page-list.component.html',
    styleUrl: './page-list.component.css'
})
export class PageListComponent {


    pages: Page[] = [];

    constructor(private pagesDataService: PagesDataService) { }

    ngOnInit(): void {
        this.pagesDataService.getPages().subscribe(
            (data: Page[]) => {
                this.pages = data;
                console.log(this.pages)
            });
        
    }
}

