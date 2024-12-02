import { Type } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { PortfolioCategoryComponent } from './portfolio-category/portfolio-category.component';
import { ZoomOutContainerComponent } from './zoom-out-container/zoom-out-container.component';
import { GeometricBackgroundComponent } from './geometric-background/geometric-background.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeSectionComponent } from './home-section/home-section.component';

export const DynamicComponentRegistry: { [key: string]: { component: Type<any>; template?: string }[] } = {
    'Home2': [{ component: HeaderComponent,template:'layout1' }],
    'menu': [{ component: MenuComponent }],
    'about': [{ component: AboutComponent }],
    'portfolio': [{ component: PortfolioCategoryComponent,template:'layout1' }],
    'portfolio2': [{ component: PortfolioCategoryComponent,template:'layout2' }],
    'test1': [  
                { component: ZoomOutContainerComponent },
                { component: GeometricBackgroundComponent }
            ]
};