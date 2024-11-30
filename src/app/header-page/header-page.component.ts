import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.css'
})
export class HeaderPageComponent {

  

  @Input() pageName: string='';  // Riceve la stringa come input

}
