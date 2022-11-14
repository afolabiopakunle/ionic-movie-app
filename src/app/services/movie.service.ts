import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(`${environment.baseUrl}/movie/popular?api_key=${this.apiKey}`);
  }
}
