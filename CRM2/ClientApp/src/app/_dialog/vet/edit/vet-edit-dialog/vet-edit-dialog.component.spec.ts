import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetEditDialogComponent } from './vet-edit-dialog.component';

describe('VetEditDialogComponent', () => {
  let component: VetEditDialogComponent;
  let fixture: ComponentFixture<VetEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
