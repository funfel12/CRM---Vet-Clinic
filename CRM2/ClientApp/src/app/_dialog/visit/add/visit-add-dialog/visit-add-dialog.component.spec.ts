import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitAddDialogComponent } from './visit-add-dialog.component';

describe('VisitAddDialogComponent', () => {
  let component: VisitAddDialogComponent;
  let fixture: ComponentFixture<VisitAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
