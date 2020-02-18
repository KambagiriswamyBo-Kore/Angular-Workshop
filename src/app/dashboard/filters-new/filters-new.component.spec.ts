import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersNewComponent } from './filters-new.component';

describe('FiltersNewComponent', () => {
  let component: FiltersNewComponent;
  let fixture: ComponentFixture<FiltersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
