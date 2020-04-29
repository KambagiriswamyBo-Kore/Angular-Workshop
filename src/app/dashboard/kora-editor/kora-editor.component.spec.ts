import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoraEditorComponent } from './kora-editor.component';

describe('KoraEditorComponent', () => {
  let component: KoraEditorComponent;
  let fixture: ComponentFixture<KoraEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoraEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoraEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
