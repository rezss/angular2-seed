import {Component} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
  selector: 'tweet',
  templateUrl: 'app/tweet.template.html',
  styles: [`
    .twitter-name {
      color: #ccc;
    }
  `],
  directives: [LikeComponent]
})
export class TweetComponent {
  tweet = {
    name: "Windward",
    "twitter-name": "@windwardstudios",
    message: "Looking for a better company reporting or docgen app?",
    likes: 10
  }
}