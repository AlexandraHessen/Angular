import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';
import { HotelPhotoComponent } from './hotel-photo.component';
import { HotelRoomComponent } from './hotel-room.component';
import { HotelRoomsComponent } from './hotel-rooms.component';
import { HotelRoomInfoComponent } from './hotel-roominfo.component';
import { HotelLinksComponent } from './hotel-links.component';
import { HotelDatasource } from './hotel.datasource';

// определяем маршруты
const appRoutes: Routes =[
    { path: '', component: HotelPhotoComponent}, //http://localhost:4200/
    { path: 'rooms', component: HotelRoomsComponent},
    { path: 'room/:num', component: HotelRoomInfoComponent}, //num переменая, которая будет указывать номер комнаты
    // для всех остальных URL-ов:
    { path: '**', redirectTo: '/' } // ** означает что если ни один из описанных выше урлов не подошел отработает этот
];

// ** чтобы не было конфликтов следует всегда сначала располагать наиболее точные маршруты(/info2), а потом более абстрактные(/info). Angular отработает первую же строчку, которая подойдет .

@NgModule({
  // импортируем другие модули
  imports: [ BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes) ],

  //регистрируем различные сущности (компоненты, директивы, пайпы)
  declarations: [
    HotelComponent, HotelTitleComponent,
    HotelPhotoComponent, HotelRoomInfoComponent,
    HotelRoomsComponent, HotelRoomComponent,
    HotelLinksComponent,
  ],

  //регистрируем сервисы
  providers: [ HotelDatasource ],

  //только для главного модуля, передаем компонент, который является главным для нашего приложения 
  bootstrap: [ HotelComponent ]
})
export class AppModule { }
