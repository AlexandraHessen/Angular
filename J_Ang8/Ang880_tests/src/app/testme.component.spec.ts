import { TestBed, async } from '@angular/core/testing';
import { TestMeComponent } from './testme.component';

// describe - оборачивает набор тестов, в него записываем все что мы тестируем
describe('тестируем TestMeComponent: ', () => {

  // перед каждым тестом (т.е. перед каждым it ) конфигурируем тестовый модуль
  //т.е. не app module ts будет использоваться а наш модуль
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //говорим какие компоненты и  сервисы нам нужны
      declarations: [
        TestMeComponent
      ],
    }).compileComponents();
    //compileComponents- пото конфигурируем эти компоненты
  }));

  it('компонент должен успешно создаваться', async(() => { // внимание - здесь async это имя функции, а не ключевое слово JS
    const fixture = TestBed.createComponent(TestMeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('свойство класса title должно содержать ожидаемое значение', async(() => {
    const fixture = TestBed.createComponent(TestMeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testing app');
  }));

  it('свойство title должно быть привязано к содержимому тега h1', async(() => {
    const fixture = TestBed.createComponent(TestMeComponent);
    fixture.detectChanges(); // чтобы привязки обновились
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testing app!');
  }));

});
