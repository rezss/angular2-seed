import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

import {User} from './user';

@Injectable()
export class UsersService {
  private _url = 'http://jsonplaceholder.typicode.com/users';
  
  constructor(private _http: Http) {
    
  }
  
  getUsers () : Observable<User[]> {
    return this._http.get(this._url).map(response => response.json());
  }
  
  createUser(user: User) {
    return this._http.post(this._url, JSON.stringify(user)).map(x => x.json());
  }
}