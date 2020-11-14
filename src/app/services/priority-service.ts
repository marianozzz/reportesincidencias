import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  private apiURL = 'https://utn-lubnan-api-1.herokuapp.com/api/Priority';

  constructor(private https: HttpClient) { }



  getAll(): Promise<any> {
    return this.https.get(this.apiURL).toPromise();
  }
}
