import { Component, OnInit } from '@angular/core';
import { ICellRenderer } from 'ag-grid-community';

@Component({
  selector: 'app-button-render',
  template: `<button mat-stroked-button color="primary" type="primary" (click)="onClick($event)">{{label}}</button>`
})

export class ButtonRenderComponent implements ICellRenderer {
  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  } IOwnerRepository
  refresh(params?: any): boolean {
    return true;

  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }

}
