import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEditDialogComponent } from './service-edit-dialog.component';

describe('ServiceEditDialogComponent', () => {
  let component: ServiceEditDialogComponent;
  let fixture: ComponentFixture<ServiceEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
