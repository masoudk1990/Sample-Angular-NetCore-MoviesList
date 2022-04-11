import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorsMovieDTO } from 'src/app/actors/actors.model';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  form: FormGroup

  @Input() model: movieDTO;
  @Output() onSaveChanges = new EventEmitter<movieCreationDTO>();
  @Input() nonSelectedGenres: multipleSelectorModel[] = [];
  @Input() selectedGenres: multipleSelectorModel[] = [];  
  @Input() nonSelectedMovieTheaters: multipleSelectorModel[] = [];
  @Input() selectedMovieTheaters: multipleSelectorModel[] = [];
  @Input() selectedActors : actorsMovieDTO[] = [];

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      title: ['', {validators: [Validators.required]}],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: '',
      actors: ''
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file: File){
    this.form.get('poster')?.setValue(file);
  }

  changeMarkdown(content: string){
    this.form.get('summary')?.setValue(content);
  }

  saveChanges() {
    this.form.get('genresIds')?.setValue(this.selectedGenres.map(value => value.key));
    this.form.get('movieTheatersIds')?.setValue(this.selectedMovieTheaters.map(value => value.key));
    this.form.get('actors')?.setValue(this.selectedActors.map(val => {
      return {id: val.id, character: val.character}
    }))

    this.onSaveChanges.emit(this.form.value);
  }  

}