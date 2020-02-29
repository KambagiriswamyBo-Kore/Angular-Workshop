import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSelectAllComponent } from './auto-select-all.component';

describe('AutoSelectAllComponent', () => {
  let component: AutoSelectAllComponent;
  let fixture: ComponentFixture<AutoSelectAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSelectAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSelectAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
