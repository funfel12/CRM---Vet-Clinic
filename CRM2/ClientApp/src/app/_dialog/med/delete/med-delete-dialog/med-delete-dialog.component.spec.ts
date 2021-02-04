import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedDeleteDialogComponent } from './med-delete-dialog.component';

describe('MedDeleteDialogComponent', () => {
  let component: MedDeleteDialogComponent;
  let fixture: ComponentFixture<MedDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
