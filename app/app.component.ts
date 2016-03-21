import {Component, Input} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {TweetComponent} from './tweet.component';
import {SummaryPipe} from './summary.pipe';


@Component({
  selector: 'my-app',
  template: `
    {{ post.title }}
    <br/>
    {{ post.body | summary:10 }}
  `,
  directives: [FavoriteComponent, LikeComponent, VoterComponent, TweetComponent],
  pipes: [SummaryPipe]
})
export class AppComponent {
  post = {
    title: "Angular tutorial for beginners",
    body: `lorem ipsunm dolar sit amte, consecttet blablabla asdva hasvbdha sdhas dqgas das ashdgjhbhq`
  }
}