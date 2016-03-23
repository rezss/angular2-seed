import {Component, Input, AfterViewInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `<input type="text" id="search" class="form-control" placeholder="Search for artist">`
})
export class AppComponent implements AfterViewInit {
  
  constructor() {
  }
  
  ngAfterViewInit () {
    var keyups = Observable.fromEvent($("#search"), "keyup")
      .map(e => e.target.value)
      .filter(text => text.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .flatMap(searchTerm => {
        var url = 'https://api.spotify.com/v1/search?type=artist&q=' + searchTerm;
        return Observable.fromPromise($.getJSON(url));
      });
    
    var subscription = keyups.subscribe(data => console.log(data));
    
    // unsubscribe if, by the user, not needed anymore
    subscription.unsubscribe();
    
    // jquer way:
    //   var debounced = _.debounce(function (text) {
    //     var url = 'https://api.spotify.com/v1/search?type=artist&q=' + text;
    //     $.getJSON(url, function (artist) {
    //       console.log(artist);
    //     });
    //   }, 400);

    //   $("input").keyup(function (e) {
    //     console.log(e);

    //     var text = e.target.value;

    //     console.log(text);

    //     if (text.length < 3)
    //       return;

    //     debounced(text);
    //   });
    // }
  }
}