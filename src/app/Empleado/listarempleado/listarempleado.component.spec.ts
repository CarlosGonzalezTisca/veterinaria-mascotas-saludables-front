import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarempleadoComponent } from './listarempleado.component';

describe('ListarempleadoComponent', () => {
  let component: ListarempleadoComponent;
  let fixture: ComponentFixture<ListarempleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarempleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
