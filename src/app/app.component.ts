import {Component} from '@angular/core';
import {Msg} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Communication Composants Client-parent';

  nom: string = 'Bob';

  childTexts: string[] = [];
  childMessages: Msg[] = [];

  onNewText(text: string) {
    console.log('msg:', text);
    this.childTexts.push(text);
  }

  onNewMsg(msg: Msg) {
    console.log('msg:', msg);
    this.childMessages.push(msg);
  }

}
