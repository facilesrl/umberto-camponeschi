import { Component } from '@angular/core';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SplashScreenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
