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

export const DynamicComponentRegistry: { [key: string]: {components:{ component: Type<any>; template?: string }[];nav_group?:string } } = {
    'Home2': {components:[{ component: HeaderComponent,template:'layout1' }]},
    'menu': {components:[{ component: MenuComponent }]},
    'about': {components:[{ component: AboutComponent }]},
    'portfolio': {components:[{ component: PortfolioCategoryComponent,template:'layout1' }],nav_group:'portfolio' },
    'portfolio2': {components:[{ component: PortfolioCategoryComponent,template:'layout2'}],nav_group:'portfolio' },
    'test1': {components:[  
                { component: ZoomOutContainerComponent },
                { component: GeometricBackgroundComponent }
            ],nav_group:'test'},
    'test2':{components:[{component:Navbar2Component}],nav_group:'test'}
};