import {Component, AfterViewInit} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/throw';

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
    
    // Observable.throw(new Error('Something failed.')).subscribe(x => console.log(x), error => console.error(error));
    // var counter = 0;
    // var ajaxCall = Observable.of('url').delay(1500).flatMap(() => {
    //   if (++counter < 2)
    //     return Observable.throw(new Error('request failed.'));
        
    //   return Observable.of([1, 2, 3]);
    // });
    
    // ajaxCall.retry(3).subscribe(x => console.log(x), error => console.error(error));
    
    var remoteDataStream = Observable.throw(new Error("Something failed."));
    // remoteDataStream.catch(err => Observable.of([1, 2, 3])).subscribe(x => console.log(x));
    
    // var remoteDataStream = Observable.of([3, 4, 5]).delay(500);
    remoteDataStream.timeout(1000).catch(error => Observable.of(1)).subscribe(x => console.log(x), error => console.error(error), () => console.log('completed'));
    
    
    
  }

  ngAfterViewInit() {

  }
}