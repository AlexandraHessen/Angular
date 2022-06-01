import { Component } from '@angular/core';

@Component({ //декоратор
  selector: 'hello', //означает что мы будем строит компонент hello
  // пишем с маленькой букыв если два сдова то через - 
  template: '<h1>{{ helloText + ", " + getMyName() + "!" }}</h1>', //верстка компонента
  styles: ['h1 { color: red }']
})
export class HelloComponent {

  helloText:string = 'Привет';

  getMyName():string {
    return "Васечкин";
  };

}
