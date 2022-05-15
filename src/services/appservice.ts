import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    insertPeople(pupil: humana) {
        return this.http.post<any>(this.ServerUrl, pupil)
    }
    deletePupil(pupil: humana) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: pupil           
        }

        return this.http.delete<any>(this.ServerUrl, options)
    }

}