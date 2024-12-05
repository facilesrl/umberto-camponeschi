import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workshop-layout-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshop-layout-2.component.html',
  styleUrl: './workshop-layout-2.component.css'
})
export class WorkshopLayout2Component {

  @Input() section_array:string[]=[];
  @Input() project_array:any[]=[];

}
