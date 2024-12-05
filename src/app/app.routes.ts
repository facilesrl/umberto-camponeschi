import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TestPageComponent } from './test-page/test-page.component';
import { GeometricBackgroundComponent } from './geometric-background/geometric-background.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: ':componentName', component: DynamicPageComponent},
    { path: 'portfolio1/:category', component: PortfolioDetailsComponent },
    { path: 'portfolio2/:category', component: PortfolioDetailsComponent}

];
