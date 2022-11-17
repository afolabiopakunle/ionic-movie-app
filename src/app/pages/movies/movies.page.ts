import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiResult, MovieService } from '../../services/movie.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  // movies$? = this.movieService.movies$;
  movies = [];
  currentPage = 1;
  imageBaseURL = environment.images;

  constructor(private movieService: MovieService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();
        this.movieService.getTopRatedMovies(this.currentPage).subscribe({
          next: (response) => {
            loading.dismiss();
            this.movies.push(...response.results);

            event?.target.complete();
            if(event) {
              event.target.disabled = response.total_pages === this.currentPage;
            }
          }
        });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
}
