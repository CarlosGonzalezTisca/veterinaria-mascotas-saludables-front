import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarmascotaComponent } from './listarmascota.component';

describe('ListarmascotaComponent', () => {
  let component: ListarmascotaComponent;
  let fixture: ComponentFixture<ListarmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
