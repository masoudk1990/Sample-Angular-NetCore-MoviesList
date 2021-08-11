import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-movies';

  moviesInTheaters;
  moviesFutureReleases;

  tempDisplay = true;

  ngOnInit(): void {
    this.moviesInTheaters = [{
      Title: "Spider-Man",
      ReleaseDate: new Date(),
      Price: 1400.99
    },
    {
      Title: "Moana",
      ReleaseDate: new Date('2016-11-14'),
      Price: 300.99
    }];

    this.moviesFutureReleases = [{
      Title: "Avengers",
      ReleaseDate: new Date(),
      Price: 456.99
    },
    {
      Title: "Toy Story",
      ReleaseDate: new Date('2020-11-14'),
      Price: 789.99
    }];
  }

  handleRating (rate: number){
    alert(`User has selected ${rate}`)
  }
  
}