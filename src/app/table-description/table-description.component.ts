import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-table-description',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './table-description.component.html',
    styleUrl: './table-description.component.css'
})
export class TableDescriptionComponent {

    row_number: number = 2;
    column_number: number = 2;
    column_data: string[] = ['6','6'];
    rows: string[][] = [[]];

    ngOnInit() {

        for (let i = 0; i < this.row_number; i++) {
            const column_data:string[] =['6','6'];
            this.rows[i] = column_data;
        }

        console.log('costruzione righe per tab', this.rows)
    }



}


