import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {UsersService} from './users.service';
import {User} from './user';

@Component({
  selector: 'users',
  templateUrl: 'app/users.template.html',
  directives: [RouterLink],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  users: User[];
  isLoading: boolean = true;
  
  constructor(public usersService: UsersService) {
    
  }
  
  ngOnInit () {
    this.usersService.getUsers().subscribe(x => this.users = x, null, () => this.isLoading = false);
  }
}