import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DicserviceService } from '../_services/_dicservice/dicservice.service';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { Router } from '@angular/router';
import { DicvaccineService } from '../_services/_dicvaccine/dicvaccine.service';
import { ButtonRenderComponent } from '../_render/button-render/button-render.component';
import { DicvaccineAddDialogComponent } from '../_dialog/dicVaccine/add/dicvaccine-add-dialog/dicvaccine-add-dialog.component';
import { DicvaccineDeleteDialogComponent } from '../_dialog/dicVaccine/delete/dicvaccine-delete-dialog/dicvaccine-delete-dialog.component';
import { DicvaccineEditDialogComponent } from '../_dialog/dicVaccine/edit/dicvaccine-edit-dialog/dicvaccine-edit-dialog.component';

@Component({
  selector: 'app-dicvacine',
  templateUrl: './dicvacine.component.html',
  styleUrls: ['./dicvacine.component.css']
})
export class DicvacineComponent implements OnInit {

  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};
  rowDataClicked3 = {};
  rowData = [];



  constructor(public dialog: MatDialog, private service: DicvaccineService, private alertify: AlertifyService, private route: Router) {
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
    { headerName: 'Data utworzenia', field: 'CreatedDate' },
    { headerName: 'Nazwa szczepionki', field: 'dic_vaccines_name' },
    { headerName: 'Cena szczepionki', field: 'Price' },
  ];


  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
    this.openDialogEdit(this.rowDataClicked1);


  }
  onBtnClick2(e) {
    this.rowDataClicked2 = e.rowData;
    this.openDialogDelete(e.rowData.Id);
  }


  openDialogDelete(dialgBoxIdToDelete: number): void {
    let dialogRef = this.dialog.open(DicvaccineDeleteDialogComponent, {
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
    let dialogRef = this.dialog.open(DicvaccineAddDialogComponent, {
      width: '700px',
      height: '40%',
      panelClass: 'custom-dialog',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogEdit(clickVariableModel: any): void {
    let dialogRef = this.dialog.open(DicvaccineEditDialogComponent, {
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
      this.alertify.sucess("Załadowano usługi");
      this.rowData = [];
      for (let i = 0; i < next.length; i++) {
        this.rowData.push(next[i]);
        console.log(this.rowData)
      }
    }, error => {
      this.alertify.error("Wystąpił błąd załadowania");
    });
  }
}
