import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TestPageComponent } from './test-page/test-page.component';
import { GeometricBackgroundComponent } from './geometric-background/geometric-background.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent} , // esempio di una nuova pagina
    { path: 'test', component: TestPageComponent},
    { path: 'geometric', component: GeometricBackgroundComponent},
    { path: ':componentName', component: DynamicPageComponent}
];
