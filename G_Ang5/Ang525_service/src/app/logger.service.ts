﻿import { Injectable } from "@angular/core";

@Injectable({
  provaidedIn: 'root'
})
export class LoggerService {

  log(s:string):void {
    console.log("Logger::log - "+s);
  }

}
