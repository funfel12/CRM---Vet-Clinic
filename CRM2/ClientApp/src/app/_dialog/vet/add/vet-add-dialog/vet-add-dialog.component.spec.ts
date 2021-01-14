import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetAddDialogComponent } from './vet-add-dialog.component';

describe('VetAddDialogComponent', () => {
  let component: VetAddDialogComponent;
  let fixture: ComponentFixture<VetAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
