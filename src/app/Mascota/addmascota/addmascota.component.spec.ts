import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmascotaComponent } from './addmascota.component';

describe('AddmascotaComponent', () => {
  let component: AddmascotaComponent;
  let fixture: ComponentFixture<AddmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
