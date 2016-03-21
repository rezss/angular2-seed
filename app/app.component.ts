import {Component, Input} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component';
import {SubscribeComponent} from './subscribe.component';
import {SimpleFormComponent} from './simple-form.component';

@Component({
  selector: 'my-app',
  template: `<simple-form></simple-form>`,
  directives: [SimpleFormComponent]
})
export class AppComponent {

}