import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloComponent } from './hello.component';

@NgModule({
  imports: [ BrowserModule ], //какие другие модули этому модулю нужны
  declarations: [ //какие компоненты будут описаны в этом модуле (из чего состоит)
    HelloComponent
  ],
  providers: [],
  bootstrap: [HelloComponent] // с какого компонента начать все рендер (типо App.js)
})
export class AppModule { }
