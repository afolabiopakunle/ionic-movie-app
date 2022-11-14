import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiResult, MovieService } from '../../services/movie.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  // movies$? = this.movieService.movies$;
  movies = [];
  currentPage = 1;
  constructor(private movieService: MovieService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();
    setTimeout(() => {
        this.movieService.getTopRatedMovies().subscribe({
          next: (response) => {
            loading.dismiss();
            this.movies = [...this.movies, ...response.results];
          }
        });
      },
      3000);
  }

}
