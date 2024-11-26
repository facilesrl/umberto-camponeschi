import { Type } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { PortfolioCategoryComponent } from './portfolio-category/portfolio-category.component';
import { ZoomOutContainerComponent } from './zoom-out-container/zoom-out-container.component';
import { GeometricBackgroundComponent } from './geometric-background/geometric-background.component';
import { AboutComponent } from './about/about.component';


export const DynamicComponentRegistry: { [key: string]: Type<any>[] } = {
    'menu': [MenuComponent],
    'about': [AboutComponent],
    'portfolio': [PortfolioCategoryComponent],
    'test1': [ZoomOutContainerComponent, GeometricBackgroundComponent]
};