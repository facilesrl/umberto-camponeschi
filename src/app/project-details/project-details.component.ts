import { Component } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectDataService } from '../project-data.service';

@Component({
    selector: 'app-project-details',
    standalone: true,
    imports: [],
    templateUrl: './project-details.component.html',
    styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {

    constructor(private serviceData: ServiceDataService, private route: ActivatedRoute) {}

    project: any[]=[];
    selected_project: string = ''
    ngOnInit() {

        // Recupera la categoria dall'URL
        this.route.paramMap.subscribe(params => {
            this.selected_project= params.get('project') || '';
            this.project = this.serviceData.getProjectByName(this.selected_project);
        });

        console.log(this.project)
    }
}
