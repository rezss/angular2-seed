import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'voter',
  template: `
    <div class="voter">
      <span class="glyphicon glyphicon-chevron-up vote-buton" [class.highlighted]="myVote > 0" (click)="onUpVote($event)"></span>
      <span class="vote-count">{{ voteCount + myVote }}</span>
      <span class="glyphicon glyphicon-chevron-down vote-button" [class.highlighted]="myVote < 0" (click)="onDownVote($event)"></span>
    </div>
  `,
  styles: [`
    .voter {
      width: 1.5em;
      text-align: center;
      color: #999;
    }
    
    .vote-count {
      font-size: 1.2em;
    }
    
    .vote-button {
      cursor: pointer;
    }
    
    .highlighted {
      color: orange;
    }
  `]
})
export class VoterComponent {
  @Input() voteCount = 0;
  @Input() myVote = 0;
  
  @Output() vote = new EventEmitter();
  
  onUpVote ($event) {
    if (this.myVote > 0)
      return;
    
    ++this.myVote;
    
    this.vote.emit({ newValue: this.myVote });
  }
  
  onDownVote ($event) {
    if (this.myVote < 0)
      return;
    
    --this.myVote;
    
    this.vote.emit({ newValue: this.myVote });
  }
}