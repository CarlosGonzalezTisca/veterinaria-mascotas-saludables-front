import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattaComponent } from './chatta.component';

describe('ChattaComponent', () => {
  let component: ChattaComponent;
  let fixture: ComponentFixture<ChattaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
