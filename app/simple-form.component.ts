import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';

@Component({
  selector: 'simple-form',
  templateUrl: 'app/simple-form.template.html'
})
export class SimpleFormComponent {
  form = new ControlGroup({
    username: new Control('', Validators.required),
    password: new Control('', Validators.required)
  });
  
  onSubmit () {
    console.log(this.form.value);
  }
}