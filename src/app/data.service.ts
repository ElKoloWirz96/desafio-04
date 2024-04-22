import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [
    'Dato 1',
    'Dato 2',
    'Dato 3',
    'Dato 4',
    'Dato 5'
  ];

  constructor() {

  }

  getData(): Observable<string[]> {
    return of(this.data).pipe(delay(1000));
  }
}
