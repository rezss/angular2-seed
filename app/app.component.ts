import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_PROVIDERS} from 'angular2/router';

import {NavComponent} from './nav.component';
import {HomeComponent} from './home.component'; 
import {UsersComponent} from './users.component'; 
import {PostsComponent} from './posts.component'; 
import {NewUserComponent} from './new-user.component';

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/users', name: 'Users', component: UsersComponent },
  { path: '/users/new', name: 'NewUser', component: NewUserComponent },
  { path: '/posts', name: 'Posts', component: PostsComponent },
  { path: '/*other', name: 'Other', redirectTo: ['Home'] }
  ])
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html',
  directives: [NavComponent, RouterOutlet],
  providers: [ROUTER_PROVIDERS]
  
  // providers: [MATERIAL_PROVIDERS]
})
export class AppComponent {
  clicked(name: string) {
    console.log(name);
  }
}