import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdsSelectStatusComponent } from './ods-select-status.component';

describe('OdsSelectStatusComponent', () => {
  let component: OdsSelectStatusComponent;
  let fixture: ComponentFixture<OdsSelectStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdsSelectStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdsSelectStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
