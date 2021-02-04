import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedAddDialogComponent } from './med-add-dialog.component';

describe('MedAddDialogComponent', () => {
  let component: MedAddDialogComponent;
  let fixture: ComponentFixture<MedAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
