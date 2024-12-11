import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from './shared/models/page.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredential: false
}
@Injectable({
    providedIn: 'root'
})
export class PagesDataService {

 

    pages: Page[]=[];
    private apiUrl = 'http://local.umberto:8888/api/get_pages.php';

    constructor(private http: HttpClient) {}
  
    getPages(): Observable<any> {
      return this.http.get(this.apiUrl,httpOptions);
    }
}
