import { Component } from '@angular/core';
import { ProjectDataService } from '../project-data.service';
import { Project } from '../shared/models/project.model';

@Component({
    selector: 'app-project-details',
    standalone: true,
    imports: [],
    templateUrl: './project-details.component.html',
    styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {

    constructor(private projectService: ProjectDataService) { }

    project: any[] = [];
    selected_project: string = '';
    selected_project_db: any;
    ngOnInit() {
        this.loadSelectedProject();
        console.log(this.project)
    }

    loadSelectedProject() {
        this.projectService.getProjectById().subscribe((data: Project) => {
            this.selected_project_db = data
            console.log(this.selected_project_db, 'dentro load del servizio progetto selezionato')
        }
        )
    }
}
