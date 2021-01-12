import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalEditDialogComponent } from './animal-edit-dialog.component';

describe('AnimalEditDialogComponent', () => {
  let component: AnimalEditDialogComponent;
  let fixture: ComponentFixture<AnimalEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
