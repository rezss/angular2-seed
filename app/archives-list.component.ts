import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';


@Component({
  selector: 'archives-list',
  templateUrl: 'app/archives.template.html',
  directives: [RouterLink]
})
export class ArchivesListComponent {
  archives = [{ year: '2016', month: '1'}, { year: '2016', month: '2'}, { year: '2016', month: '3'}];
}