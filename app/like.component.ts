import {Component, Input} from 'angular2/core';

@Component({
  selector: 'like',
  template: `<span class="glyphicon glyphicon-heart clickable" (click)="onClick()" [style.color]="doesLike ? 'deeppink' : '#ccc'"></span> {{ totalLikes }}`,
  styles: [`
    .clickable {
      cursor: pointer;
    }
  `]
  
})
export class LikeComponent {
  @Input() totalLikes = 0;
  @Input() doesLike = false;
  
  onClick () {
    this.doesLike = !this.doesLike;
    this.totalLikes += this.doesLike ? 1 : -1;
  }
}