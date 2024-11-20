import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TestPageComponent } from './test-page/test-page.component';
import { Test2Component } from './test2/test2.component';
import { GeometricBackgroundComponent } from './geometric-background/geometric-background.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent} , // esempio di una nuova pagina
    { path: 'test', component: TestPageComponent},
    { path: 'test2', component: Test2Component},
    { path: 'geometric', component: GeometricBackgroundComponent}
];
