import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdsAdminComponent } from './ods-admin.component';

describe('OdsAdminComponent', () => {
  let component: OdsAdminComponent;
  let fixture: ComponentFixture<OdsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
