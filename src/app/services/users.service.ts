import { Injectable } from '@angular/core';
import User from 'src/app/models/User.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  data: Observable<any>;
  users: User[];
  constructor() {
    this.users = [
      {
        firstName: 'RAMMOHANA RAO',
        lastName: 'BALAGA',
        age: 25,
        active: true,
        doj: new Date()
      },
      {
        firstName: 'SIMHACHALAM',
        lastName: 'BALAGA',
        age: 24,
        active: true,
        doj: new Date()
      },
      {
        firstName: 'SURESH',
        lastName: 'BALAGA',
        age: 28,
        active: true,
        doj: new Date()
      }
    ];
  }
  addUser = user => {
    this.users.unshift(user);
  };
  printUsers = () => {
    console.log('printing from user service.', this.users);
  };
  getUsers = (): Observable<User[]> => {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.users);
      }, 1000);
    });
  };
}
