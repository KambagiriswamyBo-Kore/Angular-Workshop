import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDemoComponent } from './worker-demo.component';

describe('WorkerDemoComponent', () => {
  let component: WorkerDemoComponent;
  let fixture: ComponentFixture<WorkerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
