import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  //get all users 
  getUsers(): Observable<any> {
    return this.httpService.get('users');
  }

  //get album by user id
  getUserAlbums(userId: number): Observable<any> {
    return this.httpService.get(`users/${userId}/albums`);
  }

  //get list of photos by userid and album id
  getPhotos(userId: number, albumid: number) {
    let params = new HttpParams();
    params = params.append('albumId', albumid);
    return this.httpService.get(`users/${userId}/photos`, { params: params });
  }
}
