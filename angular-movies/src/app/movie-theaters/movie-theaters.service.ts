import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieTheatersCreationDTO, movieTheatersDTO } from './movie-theaters.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + '/movieTheaters';

  public get(): Observable<movieTheatersDTO[]>{
    return this.http.get<movieTheatersDTO[]>(this.apiURL);
  }

  public getById(id: number): Observable<movieTheatersDTO>{
    return this.http.get<movieTheatersDTO>(`${this.apiURL}/${id}`);
  }

  public create(movieTheatersDTO: movieTheatersCreationDTO){
    return this.http.post(this.apiURL, movieTheatersDTO);
  }

  public edit(id: number, movieTheaterDto: movieTheatersCreationDTO){
    return this.http.put(`${this.apiURL}/${id}`, movieTheaterDto);
  }

  public delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
