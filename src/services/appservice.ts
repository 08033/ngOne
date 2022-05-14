import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { humana } from './humanModel'

@Injectable()
export class AppService {

    private ServerUrl = 'http://localhost:3001/person'
    constructor(private http: HttpClient) {
    }

    getPeople() {        
        return this.http.get<any>(this.ServerUrl)                
    }
}