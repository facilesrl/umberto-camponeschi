import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-workshop-layout-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshop-layout-2.component.html',
  styleUrl: './workshop-layout-2.component.css'
})
export class WorkshopLayout2Component {

  @Input() project_array:any[]=[];

}
