import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-workshop-layout-1',
    standalone: true,
    imports: [],
    templateUrl: './workshop-layout-1.component.html',
    styleUrl: './workshop-layout-1.component.css'
})
export class WorkshopLayout1Component {
    @Input() project_array: any[] = [];
    ngOnInit() {
        console.log('articoli progetti in workshoplayout1', this.project_array)
    }
}
