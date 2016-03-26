import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {ArchivesComponent} from './archives.component';
import {ArchiveComponent} from './archive.component';

@RouteConfig([
  { path: '/archives/...', name: 'Archives', component: ArchivesComponent, useAsDefault: true },
  
  { path: '/*other', name: 'Other', redirectTo: ['Archives'] }
])
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html',
  directives: [RouterOutlet]
})
export class AppComponent {

}