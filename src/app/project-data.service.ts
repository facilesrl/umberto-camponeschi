import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './shared/models/project.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredential: false
}

@Injectable({
    providedIn: 'root'
})
export class ProjectDataService {

    selected_project_id: number = 0;
    selected_project: any;

    projects: Project[] = [];

    private apiUrl = 'http://local.umberto:8888/api/get_project.php';

    constructor(private http: HttpClient) { }

    getProject(): Observable<any> {
        return this.http.get(this.apiUrl, httpOptions);
    }

    getProjectById(): Observable<any> {
        const apiUrl = this.apiUrl + '?project_id=' + this.selected_project_id.toString();
        return this.http.get(apiUrl, httpOptions)
    }


    setSelectedProjectId(project_id: number): void {
        this.selected_project_id = project_id;
    }
}
