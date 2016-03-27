import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {Router, RouterLink, CanDeactivate} from 'angular2/router';

import {EmailValidator} from './email.validator';
import {User} from './user';
import {UsersService} from './users.service';

@Component({
  selector: 'new-user',
  templateUrl: 'app/new-user.template.html',
  directives: [RouterLink],
  providers: [UsersService]
})
export class NewUserComponent implements CanDeactivate {
  user: User = { name: '', email: '' };
  createUserForm: ControlGroup;

  constructor(fb: FormBuilder, private _userSerivce: UsersService, private _router: Router) {
    this.createUserForm = fb.group({
      name: ['', Validators.required],
      email: ['', EmailValidator.isValidEmail],
      phone: [],
      address: fb.group({
        street: [],
        suite: [],
        city: [],
        zipcode: []
      })
    });
  }

  onSubmit() {
    this._userSerivce.createUser(this.createUserForm.value).subscribe(x => this._router.navigate(['Users']));
  }

  routerCanDeactivate(next, previous) {
    if (this.createUserForm.dirty)
      return confirm('Are you sure? ');

    return true;
  }
}