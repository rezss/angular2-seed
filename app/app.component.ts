import {Component, Input} from 'angular2/core';
import {BootstrapPanel} from './bootstrap.panel.component';

@Component({
  selector: 'my-app',
  template: `<bs-panel><div class="body">Hello World!</div><div class="heading">The Heading!</div><div class="body">Another body!</div></bs-panel>`,
  directives: [BootstrapPanel]
})
export class AppComponent {

}