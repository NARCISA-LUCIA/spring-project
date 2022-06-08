import {Injectable} from '@angular/core';



import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user.model';
import { AppConstants } from '../util/app-constants';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    let authHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get<User[]>(AppConstants.USER_URL + '/all', {headers: authHeader});
  }


  create(user: User): Observable<User> {
    let authHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<User>(AppConstants.USER_URL, user, {headers: authHeader});
  }

  update(user: User): Observable<User> {
    let authHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put<User>(AppConstants.USER_URL, user, {headers: authHeader});
  }

  delete(userId: number) {
    let authHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.delete<User>(AppConstants.USER_URL + '/' + userId, {headers: authHeader});
  }

}