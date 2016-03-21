import {Component} from 'angular2/core'

export class AuthorsService {
  getAuthors () : string[] {
    return ["Author1", "Author2", "Author3"];
  }
}