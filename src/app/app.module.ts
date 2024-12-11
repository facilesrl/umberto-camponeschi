import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { SitePageService } from './pages-data.service';
@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Aggiungi qui
  ],
  providers: [SitePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }