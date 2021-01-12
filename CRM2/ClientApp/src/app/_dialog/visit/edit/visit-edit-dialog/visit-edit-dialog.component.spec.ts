import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitEditDialogComponent } from './visit-edit-dialog.component';

describe('VisitEditDialogComponent', () => {
  let component: VisitEditDialogComponent;
  let fixture: ComponentFixture<VisitEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
