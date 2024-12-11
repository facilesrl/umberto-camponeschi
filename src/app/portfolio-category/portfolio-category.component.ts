
import { Component,SimpleChanges,Type,ViewChild, ViewContainerRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';
import { PortfolioCategoryLayout1Component } from './portfolio-category-layout-1/portfolio-category-layout-1.component';
import { PortfolioCategoryLayout2Component } from './portfolio-category-layout-2/portfolio-category-layout-2.component';


import { CategoryDataService } from '../category-data.service';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-portfolio-category',
  standalone: true,
  imports: [CarouselModule,CommonModule,PortfolioCategoryLayout1Component],
  templateUrl: './portfolio-category.component.html',
  styleUrl: './portfolio-category.component.css'
})
export class PortfolioCategoryComponent {

    @ViewChild('layoutContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
    
    private layoutMap: { [key: string]: Type<any> } = {
        layout1: PortfolioCategoryLayout1Component,
        layout2: PortfolioCategoryLayout2Component
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

    constructor(private categoryService: CategoryDataService){
    }

    ngOnInit(){
        this.loadProduct(); // Carica i dati
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        // Ricarica il layout ogni volta che ci sono cambiamenti
        this.loadLayout(this.selectedLayout);
    }

    categories:Category[]=[];
    //recupero dati da DB con API
    loadProduct(){
        
        this.categoryService.getCategoriesByProductID(1).subscribe(
            (data:Category[])=>{
                this.categories=data;
                console.log(this.categories,'category db da servizio');
                this.loadLayout(this.selectedLayout);
            }
        )
        //console.log(this.categorie_foto);
    }
   
    loadLayout(layoutName: string): void {
        const layoutComponent = this.layoutMap[layoutName];
        if (!layoutComponent) {
            console.error(`Layout "${layoutName}" non trovato`);
        }
        this.container.clear(); // Pulisce il contenitore
        const componentRef = this.container.createComponent(layoutComponent); // Crea il layout
        // Passa variabili come input al componente dinamico
        componentRef.instance.categories = this.categories;
       // console.log(this.categorie_foto)
    }
    

}
