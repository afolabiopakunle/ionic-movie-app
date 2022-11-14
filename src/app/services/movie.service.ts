import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies$ = this.http.get<Observable<any>>('');
  constructor(private http: HttpClient) { }
}
