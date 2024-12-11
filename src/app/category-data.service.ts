import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './shared/models/category.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredential: false
}


@Injectable({
    providedIn: 'root'
})
export class CategoryDataService {

    categories: Category[] = [];

    private apiUrl = 'http://local.umberto:8888/api/get_categories.php';
    private apiUrlID = 'http://local.umberto:8888/api/get_categories.php';



    constructor(private http: HttpClient) {
        this.getCategories().subscribe((data: Category[]) => {
            this.categories = data;
        })
    }

    getCategories(): Observable<any> {
        return this.http.get(this.apiUrl, httpOptions);
    }


    getCategoriesByProductID(product_type_id: number): Observable<any> {
        const apiUrl = this.apiUrl + '?product_id=' + product_type_id.toString();
        return this.http.get(apiUrl, httpOptions);
    }

    getCategoryByCategoryName(category_name: string): Observable<any> {
        const apiUrl = this.apiUrl + '?category_name=' + category_name;
        return this.http.get(apiUrl, httpOptions);
    }


 
}
