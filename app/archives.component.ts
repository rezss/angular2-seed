import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';

import {ArchivesListComponent} from './archives-list.component';
import {ArchiveComponent} from './archive.component';

@RouteConfig([
  { path: '/', name: 'ArchiveList', component: ArchivesListComponent, useAsDefault: true },
  { path: '/:year/:month', name: 'Archive', component: ArchiveComponent }
])
@Component({
  selector: 'archives',
  template: '<router-outlet></router-outlet>',
  directives: [RouterLink, RouterOutlet]
})
export class ArchivesComponent {
  
}