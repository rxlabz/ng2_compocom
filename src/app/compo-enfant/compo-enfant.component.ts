import {Component, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {Msg} from '../model';

@Component({
  selector: 'compo-enfant',
  templateUrl: './compo-enfant.component.html',
  styleUrls: ['./compo-enfant.component.css']
})
export class CompoEnfantComponent {

  @Input() nom: string;

  @Output() onNewString: EventEmitter<string> = new EventEmitter<string>();

  @Output() onNewMsg: EventEmitter<Msg> = new EventEmitter<Msg>();

  /**
   * cette annotation permet de récupérer et
   * d'utiliser une référence d'un sous element DOM d'un composant
   * cf. #chp ds le template
   */
  @ViewChild('chpText') chpText: ElementRef;

  @ViewChild('chpMsg') chpMsg: ElementRef;

  constructor() {
  }

  onTextData(text: string) {
    this.onNewString.next(text);
    // on vide le chp après réception
    this.chpText.nativeElement.value = '';
  }

  onMessageData(text: string) {
    this.onNewMsg.next(new Msg(text, this.nom, new Date()));
    // on vide le chp après réception
    this.chpMsg.nativeElement.value = '';
  }
}

