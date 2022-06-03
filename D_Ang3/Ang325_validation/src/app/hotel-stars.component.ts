import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-stars',
  templateUrl: 'hotel-stars.component.html',
  styleUrls: ['hotel-stars.component.css']
})
export class HotelStarsComponent {

  @Input("starsinput")
  private stars:number;

  getStars():number {
    return this.stars;
  }

}


import { Directive } from "@angular/core";

@Directive({
  selector: "[атрибут]",
})
class имяклассадирективы {

}
