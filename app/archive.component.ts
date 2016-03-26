import {Component} from 'angular2/core';
import {RouteParams, RouterLink} from 'angular2/router';

@Component({
  selector: 'archive',
  templateUrl: 'app/archive.template.html',
  directives: [RouterLink]
})
export class ArchiveComponent {
  year: string;
  month: string;
  
  constructor(private _routeParams: RouteParams) {
    this.year = _routeParams.get('year');
    this.month = _routeParams.get('month');
  }
}