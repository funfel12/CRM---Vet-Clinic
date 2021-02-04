import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineAddDialogComponent } from './vaccine-add-dialog.component';

describe('VaccineAddDialogComponent', () => {
  let component: VaccineAddDialogComponent;
  let fixture: ComponentFixture<VaccineAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
