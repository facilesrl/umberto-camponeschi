import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredential: false
}
@Injectable({
    providedIn: 'root'
})
export class ArticlesDataService {


    constructor(private http: HttpClient) {
       
    }

    private apiUrl_article = "http://local.umberto:8888/api/get_articles.php";
    private apiUrl_category = "http://local.umberto:8888/api/get_category.php";


    getArticlesByCategoryId(category_id: number): Observable<any> {
        const apiUrl = this.apiUrl_article + '?category_id=' + category_id.toString();
        return this.http.get(apiUrl, httpOption);
    }

    getArticlesByCategoryName(category_name: string): Observable<any> {
        console.log(category_name,'dentro servizio category name')
        const apiUrl = this.apiUrl_article + '?category_name=' + category_name;
        return this.http.get(apiUrl, httpOption);
    }

}
