import { Directive, ElementRef, Input, AfterViewInit } from "@angular/core";

@Directive({
  selector: "[rainbow]",
})
export class RainbowDirective implements AfterViewInit {

  colors:Array<string>
    =['red','green','blue','cyan','magenta','yellow'];

  @Input("rainbow")
  private startColor:string;

  constructor(private element: ElementRef) {

    // к этому моменту startColor ещё не готов

    setInterval( ()=>{
      this.setRandomColor()
    },2000);
  }

  ngAfterViewInit():void {

    // к этому моменту startColor уже готов

    this.element.nativeElement
      .style.backgroundColor=this.startColor;
  }

  setRandomColor():void {
    let randomColorIndex:number
      =Math.floor(Math.random()*this.colors.length);
    let randomColor:string
      =this.colors[randomColorIndex];
    // element:ElementRef - это Ангуляр-обёртка для HTML-тега
    // element.nativeElement - это обычный DOM-элемент
    this.element.nativeElement
      .style.backgroundColor=randomColor;
  }

}

import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[атрибут]",
})
class имяклассадирективы {

  @HostBinding("атрибут2")
  доступ переменная:тип;

    ...или...

  @HostBinding("атрибут2")
  get геттер() { . . . }

}

import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[атрибут]",
})
class имяклассадирективы {

  @HostListener("имясобытия")
  доступ метод():тип {
    . . .
  }

или, если методу нужно передать аргументы (чаще всего $event события):

  @HostListener("имясобытия",[строки-выражения])
  доступ метод(аргументы):тип {
    . . .
  }

}

@HostListener("имясобытия",[строки-выражения])
доступ метод(аргументы):тип {
  . . .
}

}

import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[myattr]",
})-
class MyAttrDirective {

  @HostListener("mouseover",["$event"])
  private myClicked(ev:Event):void {
    console.log(ev.target);
  }

}

