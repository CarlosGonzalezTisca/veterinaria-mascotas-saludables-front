import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjaulaComponent } from './addjaula.component';

describe('AddjaulaComponent', () => {
  let component: AddjaulaComponent;
  let fixture: ComponentFixture<AddjaulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjaulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
