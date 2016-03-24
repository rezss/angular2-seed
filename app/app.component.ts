import {Component, AfterViewInit} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent implements AfterViewInit {
  form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      search: []
    });
    
    var search = this.form.find('search');
    search.valueChanges.debounceTime(400).map(str => (<string>str).replace(' ', '-')).subscribe(x => console.log(x));
    
    var startDates = [];
    var startDate = new Date();
    
    for (var day = -2; day <= 2; ++day) {
      var date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + day);
        
      startDates.push(date);
    }
    
    // Observable.range(1, 10).map(nr => { console.log('from map: ' + nr); return nr; }).subscribe(x => console.log('from subscribe: ' + x));
    // Observable.empty().subscribe(null, null, () => console.log('fin.'));
    // Observable.fromArray(startDates).map(date => { console.log("Getting deals from for date " + date); return [1, 2, 3]; }).subscribe(x => console.log(x));
    // Observable.interval(1000).flatMap(x => { console.log('calling the server to get the latest news'); return Observable.of([1, 2, 3]); }).subscribe(x => console.log(x));
    
    var userStream = Observable.of({ userId: 1, username: 'mosh' }).delay(2000);
    var tweetsStream = Observable.of([1, 2, 3]).delay(1500);
    
    Observable.forkJoin(userStream, tweetsStream)
      .map(input => 
        // [{ userId: 1, username: 'mosh'}, [1, 2, 3]]
        ({ 'id': input[0]['userId'], 'name': input[0]['username'], 'tweet': input[1] })
        // new Object({user: input[0], tweets: input[1]})
      )
      .subscribe(result => console.log(result));
    
  }

  ngAfterViewInit() {

  }
}