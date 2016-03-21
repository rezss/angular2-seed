import {Component} from 'angular2/core';

@Component({
  selector: 'subscribe',
  templateUrl: 'app/subscribe.template.html'
})
export class SubscribeComponent {
  values = ['Monthly', 'Weekly', 'Daily'];
}