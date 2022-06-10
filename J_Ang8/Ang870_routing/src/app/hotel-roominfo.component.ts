import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HotelDatasource } from './hotel.datasource';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel-roominfo.component.html',
  styleUrls: ['hotel-roominfo.component.css']р
})
export class HotelRoomInfoComponent {

  private roomNum:number;
  private room:{num:number,beds:number}=null;

  constructor(private datasource:HotelDatasource,
    activeRoute: ActivatedRoute) {
    this.roomNum=parseInt(
      activeRoute.snapshot.params['num']);
    this.room=datasource.getRooms() // список всех комнат
      .filter(room=>(room.num==this.roomNum))[0]; // оставляем только нужную комнату
  }

  getNum():number {
    return this.roomNum;
  }

  getRoom():{num:number,beds:number} {
    return this.room;
  };

}
