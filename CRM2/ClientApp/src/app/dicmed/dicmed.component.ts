import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DicmedService } from '../_services/_dicmed/dicmed.service';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { Router } from '@angular/router';
import { ButtonRenderComponent } from '../_render/button-render/button-render.component';

import { DicmedEditDialogComponent } from '../_dialog/dicMed/edit/dicmed-edit-dialog/dicmed-edit-dialog.component';
import { DicmedDeleteDialogComponent } from '../_dialog/dicMed/delete/dicmed-delete-dialog/dicmed-delete-dialog.component';
import { DicmedAddDialogComponent } from '../_dialog/dicMed/add/dicmed-add-dialog/dicmed-add-dialog.component';

@Component({
  selector: 'app-dicmed',
  templateUrl: './dicmed.component.html',
  styleUrls: ['./dicmed.component.css']
})
export class DicmedComponent implements OnInit {

  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};
  rowDataClicked3 = {};
  rowData = [];



  constructor(public dialog: MatDialog, private service: DicmedService, private alertify: AlertifyService, private route: Router) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRenderComponent,
    }
  }

  ngOnInit() {
    this.refresh();

  }

  columnDefs = [
    {
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Edytuj'
      },
      headerName: 'Edytuj',
      cellRenderer: 'buttonRenderer',

    },
    {
      cellRendererParams: {
        onClick: this.onBtnClick2.bind(this),
        label: 'Usuń'
      },
      headerName: 'Usuń',
      cellRenderer: 'buttonRenderer',

    },
    { headerName: 'Id', field: 'Id' },
    {
      headerName: 'Data utworzenia', field: 'CreatedDate', cellRenderer: (data) => {
        return data.value ? (new Date(data.value)).toLocaleDateString() : '';
      }
    },
    { headerName: 'Nazwa produktu', field: 'dic_meds_name'},
    { headerName: 'Cena produktu', field: 'Price' },
  ];


  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
    this.openDialogEdit(this.rowDataClicked1);


  }
  onBtnClick2(e) {
    this.rowDataClicked2 = e.rowData;
    this.openDialogDelete(e.rowData.Id);
  }

  onBtnClick3(e) {
    this.rowDataClicked3 = e.rowData;
    this.route.navigate(['/animal/' + this.rowDataClicked3['Id']]);
  }


  openDialogDelete(dialgBoxIdToDelete: number): void {
    let dialogRef = this.dialog.open(DicmedDeleteDialogComponent, {
      width: '700px',
      height: '25%',
      panelClass: 'custom-dialog'

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {

      }
      else {
        this.service.delete(dialgBoxIdToDelete);

      }

    });
  }

  openDialogAdd(): void {
    let dialogRef = this.dialog.open(DicmedAddDialogComponent, {
      width: '700px',
      height: '40%',
      panelClass: 'custom-dialog',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }


  openDialogEdit(clickVariableModel: any): void {
    let dialogRef = this.dialog.open(DicmedEditDialogComponent, {
      width: '700px',
      height: '40%',
      panelClass: 'custom-dialog',
      data: {
        anyProperty: clickVariableModel
      }
    });
  }

  refresh() {
    this.service.getAll().subscribe(next => {
      this.alertify.sucess("Załadowano medykamenty");
      this.rowData = [];
      for (let i = 0; i < next.length; i++) {
        this.rowData.push(next[i]);
        console.log(this.rowData)
      }
    }, error => {
      this.alertify.error("Wystąpił błąd załadowania medykamentów");
    });
  }
}
