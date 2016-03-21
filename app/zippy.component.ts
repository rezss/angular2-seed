import {Component, Input} from 'angular2/core';

@Component({
  selector: 'zippy',
  templateUrl: 'app/zippy.template.html',
  styles: [`.clickable { cursor: pointer; }`]
})
export class ZippyComponent {
  @Input() title = '';
  isHidden = true;
  
  onClick () {
    this.isHidden = !this.isHidden;
  }
}