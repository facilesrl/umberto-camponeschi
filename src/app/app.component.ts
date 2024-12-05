import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { ScrollManagerComponent } from './scroll-manager/scroll-manager.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomPointerComponent } from './custom-pointer/custom-pointer.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [  RouterOutlet,
                NavbarComponent, 
                ScrollManagerComponent, 
                FontAwesomeModule, 
                CustomPointerComponent,
                SplashScreenComponent,
                HttpClientModule
            ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
    title = 'umberto-camponeschi';
}
