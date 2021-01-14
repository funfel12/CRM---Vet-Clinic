import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetDeleteDialogComponent } from './vet-delete-dialog.component';

describe('VetDeleteDialogComponent', () => {
  let component: VetDeleteDialogComponent;
  let fixture: ComponentFixture<VetDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
