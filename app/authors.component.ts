import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';

@Component({
  selector: "authors",
  template: "<h1>Authors</h1>{{ title }}<ul><li *ngFor='#author of authors'>{{ author }}</li></ul>",
  providers: [AuthorsService]
})
export class AuthorsComponent {
  title = "The title of authors page";
  authors: string[];
  
  constructor (authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
  }
}