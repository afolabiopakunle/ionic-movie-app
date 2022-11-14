import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_pages: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_results: number;
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<any>(`${environment.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`);
  }

  getMovieDetails(id: string) {
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }

}
