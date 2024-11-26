import { Type } from '@angular/core';
import { ZoomOutContainerComponent } from './zoom-out-container/zoom-out-container.component';
import { GeometricBackgroundComponent } from './geometric-background/geometric-background.component';
import { MenuComponent } from './menu/menu.component';

export const DynamicComponentRegistry: { [key: string]: Type<any>[] } = {
    'menu': [MenuComponent],
    'test1': [ZoomOutContainerComponent, GeometricBackgroundComponent]
};