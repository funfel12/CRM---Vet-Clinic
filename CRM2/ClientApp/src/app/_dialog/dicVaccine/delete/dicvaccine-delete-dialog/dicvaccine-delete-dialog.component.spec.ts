import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicvaccineDeleteDialogComponent } from './dicvaccine-delete-dialog.component';

describe('DicvaccineDeleteDialogComponent', () => {
  let component: DicvaccineDeleteDialogComponent;
  let fixture: ComponentFixture<DicvaccineDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicvaccineDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicvaccineDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
