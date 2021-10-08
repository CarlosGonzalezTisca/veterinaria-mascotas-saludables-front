import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarjaulaComponent } from './listarjaula.component';

describe('ListarjaulaComponent', () => {
  let component: ListarjaulaComponent;
  let fixture: ComponentFixture<ListarjaulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarjaulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarjaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
