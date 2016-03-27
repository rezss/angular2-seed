import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'navbar',
  templateUrl: 'app/nav.template.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavComponent {
  
  constructor(public router: Router) {
    
  }
  
  clicked(name: string) {
    console.log(name);
  }
}