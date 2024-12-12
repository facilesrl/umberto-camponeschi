import { Component, ViewChildren, ElementRef, QueryList, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PagesDataService } from '../pages-data.service';
import { Page } from '../shared/models/page.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home2',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home2.component.html',
    styleUrls: ['./home2.component.css']
})
export class Home2Component implements AfterViewInit {
    pages: Page[] = [];
    pagesName: string[] = [];
    @ViewChildren('navItem') navItems!: QueryList<ElementRef>;
    navSize: number[] = [];
    translateX: number = 0;
    currentIndex: number = 0; // Indice dell'elemento corrente

    constructor(
        private pageService: PagesDataService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.pageService.getPages().subscribe((data: Page[]) => {
            this.pages = data;
            console.log('Pages loaded:', this.pages);
            this.fillPagesName();

            setTimeout(() => {
                this.fillNavSize();
            });
        });
    }

    ngAfterViewInit() {}

    fillPagesName() {
        this.pages.forEach(item => {
            if (item.nav_group_name === '') {
                this.pagesName.push(item.page_name);
            }
        });
        console.log('Pages names:', this.pagesName);
    }

    fillNavSize() {
        if (!this.navItems || this.navItems.length === 0) {
            console.warn('navItems non sono pronti al momento del riempimento!');
            return;
        }

        this.navSize = [];
        this.navItems.forEach((item) => {
            const element = item.nativeElement as HTMLElement;
            const currentSize = element.getBoundingClientRect().width;
            console.log(currentSize, 'current size');
            this.navSize.push(currentSize);
        });
        console.log(this.navSize, 'Dimensioni dei navItem');
    }

    shouldApplyTransformX(): boolean {
        return this.currentIndex > 0 && this.currentIndex < this.navSize.length - 1; // Limita l'indice tra 0 e length-1
    }

    updateScrollOffset(delta: number) {
        this.currentIndex = Math.max(0, Math.min(this.currentIndex + delta, this.navSize.length - 1)); // Limita l'indice dentro il range
        this.translateX = -this.navSize[this.currentIndex];
        this.cdr.detectChanges();
    }

    @HostListener('wheel', ['$event'])
    onWheelScroll(event: WheelEvent) {
        const scrollDelta = event.deltaY;
        if (scrollDelta > 0) {
            this.updateScrollOffset(1); // Avanti
        } else {
            this.updateScrollOffset(-1); // Indietro
        }
    }
}
