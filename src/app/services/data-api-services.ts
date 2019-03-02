import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn:'root'
})
export class DataApiService {
    projects: Observable<any>;
    project: Observable<any>;
    constructor(private Http:HttpClient){}
    headers: HttpHeaders = new HttpHeaders({
        "Content-Type" : "application/json"
    });

    getAllProjects(){
        const url_api = 'http://localhost:61756/api/proyectos'
        return   this.Http.get(url_api);
    }
}