import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Project } from '../../shared/models/project.model';

@Component({
    selector: 'app-workshop-layout-1',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './workshop-layout-1.component.html',
    styleUrl: './workshop-layout-1.component.css'
})
export class WorkshopLayout1Component {
    @Input() project_array: Project[] = [];

    constructor(private router: Router){}
    ngOnInit() {
        console.log('articoli progetti in workshoplayout1', this.project_array)
    }

    goToProjectDetails(projectName: string): void {
        this.router.navigate(['/project1', projectName]);
    }
}
