import { Injectable } from '@angular/core';
import { Observable, of }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
     let peopleArray = [
     {
      firstName: 'John',
      lastName: 'Smith',
      age: 36,
     },
     {
      firstName: 'Pedro',
      lastName: 'John',
      age: 33,
     },
     {
      firstName: 'paulo',
      lastName: 'Paulo',
      age: 34,
     },
     ]

     return of(peopleArray)

  }
}
