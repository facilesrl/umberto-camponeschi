import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Project } from '../../shared/models/project.model';
import { ProjectDataService } from '../../project-data.service';

@Component({
    selector: 'app-workshop-layout-1',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './workshop-layout-1.component.html',
    styleUrl: './workshop-layout-1.component.css'
})
export class WorkshopLayout1Component {
    
    @Input() project_array: Project[] = [];

    constructor(private router: Router, private projectData:ProjectDataService){}
    ngOnInit() {
        console.log('articoli progetti in workshoplayout1', this.project_array)
    }


    //Metodi per la selezione della pagina del progetto e contenuto.
    //selectedProjectId salva id del projetto selezionato in variabile del servizio progetti.
    //goToProjectDetails genera la navigazione verso la pagina projectDetails.

    goToProjectDetailsAndSelect(project:Project){
        this.selectedProjectId(project.id);
        this.goToProjectDetails(project.project_title);
    }

    selectedProjectId(project_id:number):void{
        this.projectData.setSelectedProjectId(project_id);
    }

    goToProjectDetails(projectName: string): void {
        this.router.navigate(['/project1', projectName]);
    }
}
