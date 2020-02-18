import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideZoomComponent } from './inside-zoom.component';

describe('InsideZoomComponent', () => {
  let component: InsideZoomComponent;
  let fixture: ComponentFixture<InsideZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
