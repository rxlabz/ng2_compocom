import { Component } from '@angular/core';
import {CompoEnfantComponent} from "./compo-enfant/compo-enfant.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  nom:String = "toto";

  onNewData(msg:String){
    console.log('msg:',msg);
  }

}
