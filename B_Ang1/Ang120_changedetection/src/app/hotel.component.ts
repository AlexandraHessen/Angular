import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent {

  private hotelName:string = 'California';

  private rooms:Array<{num:number,beds:number}>=[
    { num:22, beds:2 },
    { num:25, beds:1 },
    { num:28, beds:4 },
  ];

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

  constructor() {
    setTimeout(()=>{
      this.photo="http://fe.it-academy.by/Examples/Hotel/hotel2.jpg";
      this.hotelName="Heartbreak Hotel";
    },3000);
  }

  getName():string {
    return this.hotelName;
  };

  getRooms():string {
    return this.rooms
      .map( room => "N"+room.num+"("+room.beds+"b)" )
      .join("\n")
      ;
  };

  getPhoto():string {
    return this.photo;
  };

  // отобразит время только один раз при рендере и второй когда сработает setTimeout для картинки
  // включится дефолтная change detection stretegy и все данные будут проверены
  // не выводит каждый раз время потому что нет тригера для запука и рендера Angular нет ни таймера,  ни события
  // getTime():string {
  //   return (new Date()).toString();
  // };

}
