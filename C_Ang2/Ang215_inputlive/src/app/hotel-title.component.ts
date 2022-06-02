import { Component, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-title',
  templateUrl: 'hotel-title.component.html',
  styleUrls: ['hotel-title.component.css']
})
export class HotelTitleComponent implements OnChanges {

  @Input("hotel-name")
  private hotelName:string;

  ngOnChanges(changes: {[property: string]: SimpleChange }) {
    // changes - объект в котором указано что поменялось
    let change:SimpleChange=changes["hotelName"];
    // changes["hotelName"] - из всех изменений changes мы берет только  изменения атрибута hotelName

    console.log('атрибут hotel-name получил новое значение: '
      +change.currentValue);
      // у change есть много других свойств
  }

  getName():string {
    return this.hotelName;
  }

}

import { Output, EventEmitter } from '@angular/core';

@Output("over-speed")
private overSpeed:EventEmitter<string>=new EventEmitter<string>();
//выходное свойство overSpeed типа EventEmitter<string>, т.е. это будет поток строк, можно и других

...и в какой-то момент:
this.overSpeed.emit("speed is very high!");

а в родительском-компоненте:

<car (over-speed)="alert($event)">
// car - родительский компонент
// (over-speed) - подписывается на событие
// "alert($event)" - что надо сделать по событию
// $event - объект события = "speed is very high!"
