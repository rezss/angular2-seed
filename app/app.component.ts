import {Component, Input} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component';
import {SubscribeComponent} from './subscribe.component';
import {SimpleFormComponent} from './simple-form.component';
import {ChangePasswordComponent} from './changePassword.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html',
  directives: [ChangePasswordComponent]
})
export class AppComponent {
  constructor () {
    var debounced = _.debounce(function (text) {
      var url = 'https://api.spotify.com/v1/search?type=artist&q=' + text;
      $.getJSON(url, function (artist) {
        console.log(artist);
      });
    }, 400);
    
    $("#search").keyup(function (e) {
      var text = e.target.value;
      
      console.log(text);
      
      if (text.length < 3)
        return;
      
      debounced(text);
    });
  }
}