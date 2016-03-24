import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {PostService} from './post.service';

@Component({
  selector: 'my-app',
  template: `<div [hidden]="!isLoading">
    <i class="fa fa-spinner fa-spin fa-3x"></i>
  </div>`,
  providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
  isLoading = true;

  constructor(private _postService: PostService) {
    this._postService.createPost({ userId: 1, title: 'a', body: 'b'});
  }

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => { this.isLoading = false; console.log(posts[0].body); });    
  }
}