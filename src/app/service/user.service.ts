import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import * as userData from '../../assets/data.json';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private users = userData.users;

  constructor() { }

  // checkUser(username: string, password: string): Observable<any> {
  //   const user = this.users.find(u => u.username === username && u.password === password);
  //   return of(user);
  // }
}
