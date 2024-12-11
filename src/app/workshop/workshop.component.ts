import { Component } from '@angular/core';
import { OnInit, OnChanges, SimpleChanges, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { WorkshopLayout1Component } from './workshop-layout-1/workshop-layout-1.component';
import { WorkshopLayout2Component } from './workshop-layout-2/workshop-layout-2.component';
import { ProjectDataService } from '../project-data.service';
import { Project } from '../shared/models/project.model';

@Component({
    selector: 'app-workshop',
    standalone: true,
    imports: [WorkshopLayout1Component, WorkshopLayout2Component],
    templateUrl: './workshop.component.html',
    styleUrl: './workshop.component.css'
})
export class WorkshopComponent {

    @ViewChild('layoutContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

    private layoutMap: { [key: string]: Type<any> } = {
        layout1: WorkshopLayout1Component,
        layout2: WorkshopLayout2Component
    };

    selectedLayout: string = '';  // Cambia dinamicamente il nome del layout
    defaultLayout: string = 'layout1';

    setTemplate(templateName: string): void {
        if (templateName) {
            this.selectedLayout = templateName;
        }
        else {
            console.error(`Template "${templateName}" non trovato.`);
        }
    }

    constructor( private projectService: ProjectDataService) {
    }

    ngOnInit() {
        this.loadProduct(); // Carica i dati

    }

    project_array: Project[] = [];

    loadProduct() {
        //test servizio 
        this.projectService.getProject().subscribe(
            (data: Project[]) => {
                this.project_array = data;
                console.log(this.project_array, 'da servizion')
                this.loadLayout(this.selectedLayout);

            });

    }

    ngOnChanges(changes: SimpleChanges): void {
        // Ricarica il layout ogni volta che ci sono cambiamenti
        this.loadLayout(this.selectedLayout);
    }




    loadLayout(layoutName: string): void {
        const layoutComponent = this.layoutMap[layoutName];
        if (!layoutComponent) {
            console.error(`Layout "${layoutName}" non trovato`);
        }
        this.container.clear(); // Pulisce il contenitore
        const componentRef = this.container.createComponent(layoutComponent); // Crea il layout
        // Passa variabili come input al componente dinamico
        componentRef.instance.project_array = this.project_array;
        console.log(this.project_array, 'dentro load laypout')
    }

}
