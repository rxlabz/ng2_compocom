import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-compo-enfant',
  templateUrl: './compo-enfant.component.html',
  styleUrls: ['./compo-enfant.component.css']
})
export class CompoEnfantComponent implements OnInit {

  @Input() nom:String;

  @Output() onNewData:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onData(msg:string){
    this.onNewData.next(msg);
  }

}
