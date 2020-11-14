import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Incident } from '../models/incident';
@Injectable({
    providedIn: 'root'
})
export class IncidentService {

    private apiURL = 'https://utn-lubnan-api-1.herokuapp.com/api/Incident';

    constructor(private https: HttpClient) { }
    getAll(): Promise<any> {
        return this.https.get(this.apiURL).toPromise();
    }

    add(client: Incident): Promise<any> {
        const httpOpcions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        };
        return this.https.post(this.apiURL, client, httpOpcions).toPromise();
    }
}