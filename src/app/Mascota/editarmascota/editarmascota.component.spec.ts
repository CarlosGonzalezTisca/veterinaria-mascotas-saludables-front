import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmascotaComponent } from './editarmascota.component';

describe('EditarmascotaComponent', () => {
  let component: EditarmascotaComponent;
  let fixture: ComponentFixture<EditarmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
