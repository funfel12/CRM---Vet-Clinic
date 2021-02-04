import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedEditDialogComponent } from './med-edit-dialog.component';

describe('MedEditDialogComponent', () => {
  let component: MedEditDialogComponent;
  let fixture: ComponentFixture<MedEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
