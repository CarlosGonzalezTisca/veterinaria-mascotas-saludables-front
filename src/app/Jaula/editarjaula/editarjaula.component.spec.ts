import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarjaulaComponent } from './editarjaula.component';

describe('EditarjaulaComponent', () => {
  let component: EditarjaulaComponent;
  let fixture: ComponentFixture<EditarjaulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarjaulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarjaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
