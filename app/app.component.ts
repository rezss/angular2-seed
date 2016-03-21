import {Component, Input} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component'
import {SubscribeComponent} from './subscribe.component';

@Component({
  selector: 'my-app',
  template: `<subscribe></subscribe>`,
  directives: [SubscribeComponent]
})
export class AppComponent {

}