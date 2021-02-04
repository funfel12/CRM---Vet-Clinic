import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineEditDialogComponent } from './vaccine-edit-dialog.component';

describe('VaccineEditDialogComponent', () => {
  let component: VaccineEditDialogComponent;
  let fixture: ComponentFixture<VaccineEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
