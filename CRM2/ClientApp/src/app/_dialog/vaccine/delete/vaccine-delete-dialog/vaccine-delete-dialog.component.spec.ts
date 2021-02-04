import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineDeleteDialogComponent } from './vaccine-delete-dialog.component';

describe('VaccineDeleteDialogComponent', () => {
  let component: VaccineDeleteDialogComponent;
  let fixture: ComponentFixture<VaccineDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
