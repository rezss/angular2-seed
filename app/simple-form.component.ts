import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';

@Component({
  selector: 'simple-form',
  templateUrl: 'app/simple-form.template.html'
})
export class SimpleFormComponent {
  form: ControlGroup;
  
  constructor (fb: FormBuilder) {
    this.form = fb.group({
      // default value, synchronous validators, asynch validators
      username: ['', Validators.compose([Validators.required, UsernameValidators.cannotContainSpace]), UsernameValidators.shouldBeUnique],
      password: ['', Validators.required]
    });
  }
  // form = new ControlGroup({
  //   username: new Control('', Validators.required),
  //   password: new Control('', Validators.required)
  // });
  
  onSubmit () {
    // var result = authService.login(this.form.value);
    this.form.find('username').setErrors({
      invalidLogin: true
    });
    
    console.log(this.form);
  }
}