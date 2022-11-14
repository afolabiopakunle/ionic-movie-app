import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  // movies$? = this.movieService.movies$;
  movies: any;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
  this.movieService.getMovies().subscribe({
     next: (data) => {
       this.movies = data;
       console.log(this.movies);
     }
   });
  }
}
