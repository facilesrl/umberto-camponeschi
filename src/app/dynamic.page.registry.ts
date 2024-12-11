import { Type } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { PortfolioCategoryComponent } from './portfolio-category/portfolio-category.component';
import { ZoomOutContainerComponent } from './zoom-out-container/zoom-out-container.component';
import { GeometricBackgroundComponent } from './geometric-background/geometric-background.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { TableDescriptionComponent } from './table-description/table-description.component';

import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PageListComponent } from './page-list/page-list.component';
export const DynamicComponentRegistry: { [key: string]: {components:{ component: Type<any>; template?: string }[];nav_group?:string } } = {
    //'Home2': {components:[{ component: HeaderComponent,template:'layout1' }]},
    'menu': {components:[{ component: MenuComponent }]},
    'about': {components:[{ component: AboutComponent }]},
    'portfolio1': {components:[{ component: PortfolioCategoryComponent,template:'layout1' }],nav_group:'portfolio' },
    'portfolio2': {components:[{ component: PortfolioCategoryComponent,template:'layout2'}],nav_group:'portfolio' },
    'portfolioDetails':{components:[{component:PortfolioDetailsComponent}]},
    'project1':{ components:[{component: WorkshopComponent,template:'layout1'}],nav_group:'project'},
    'project2':{ components:[{component: TableDescriptionComponent},{component:WorkshopComponent,template:'layout2'}],nav_group:'project'},
    'projectDetails':{components:[{component:ProjectDetailsComponent}]},
    'test1': {components:[  
                { component: ZoomOutContainerComponent },
                { component: GeometricBackgroundComponent }
            ],nav_group:'test'},
    'test2':{components:[{component:Navbar2Component}],nav_group:'test'}
};