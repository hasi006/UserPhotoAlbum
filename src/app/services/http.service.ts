import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
Generic http service
*/
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com';//API url to the end point

  constructor(private http: HttpClient) { }

  //http get method to communicate with endpoint
  get(endpoint: string, options?: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`, options);
  }

}
