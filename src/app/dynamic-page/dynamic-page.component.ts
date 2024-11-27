import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicComponentRegistry } from '../dynamic.page.registry'; // Assicurati che il percorso sia corretto
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit, AfterViewInit {

  componentName: string | null = null;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Ottieni il parametro dalla route, che ora è il nome della pagina
    this.route.params.subscribe(params => {
      this.componentName = params['componentName']; // 'componentName' è in realtà il nome della pagina
      console.log('Parametro componentName:', this.componentName);
    });
  }

  ngAfterViewInit(): void {
    if (!this.container) {
      console.error('Dynamic container non inizializzato');
    } else {
      console.log('Dynamic container inizializzato correttamente.');
      if (this.componentName) {
        this.loadComponents(this.componentName); // Carica i componenti per il nome della pagina
      }
    }
  }

  // Funzione per caricare un array di componenti per una pagina
  loadComponents(pageName: string): void {
    if (!this.container) {
      console.error('Dynamic container non inizializzato');
      return;
    }

    // Pulisci il contenitore prima di caricare i nuovi componenti
    this.container.clear();

    // Recupera l'array di componenti dal registro usando il nome della pagina
    const components: Type<any>[] = DynamicComponentRegistry[pageName];

    if (components) {
      // Per ogni componente nell'array, caricalo nel contenitore
      components.forEach(component => {
        this.container.createComponent(component);
      });
    } else {
      console.error(`Nessuna pagina trovata con il nome "${pageName}".`);
    }
  }
}
