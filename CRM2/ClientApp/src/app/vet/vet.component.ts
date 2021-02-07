import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VetService } from '../_services/_vet/vet.service';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { Router } from '@angular/router';
import { ButtonRenderComponent } from '../_render/button-render/button-render.component';
import { VetDeleteDialogComponent } from '../_dialog/vet/delete/vet-delete-dialog/vet-delete-dialog.component';
import { VetAddDialogComponent } from '../_dialog/vet/add/vet-add-dialog/vet-add-dialog.component';
import { VetEditDialogComponent } from '../_dialog/vet/edit/vet-edit-dialog/vet-edit-dialog.component';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})
export class VetComponent implements OnInit {

  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};
  rowDataClicked3 = {};
  rowData = [];






  constructor(public dialog: MatDialog, private service: VetService, private alertify: AlertifyService, private route: Router) {
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
    {
      cellRendererParams: {
        onClick: this.onBtnClick3.bind(this),
        label: 'Przejdź'
      },
      headerName: 'Przejdź',
      cellRenderer: 'buttonRenderer'

    },
    { headerName: 'Id', field: 'Id' },
    {
      headerName: 'Data utworzenia', field: 'CreatedDate', cellRenderer: (data) => {
        return data.value ? (new Date(data.value)).toLocaleDateString() : '';
      }
    },
    { headerName: 'Imie i Nazwisko', field: 'vet_name' },
    { headerName: 'Adres', field: 'vet_adress' },
    { headerName: 'Miasto', field: 'vet_city' },
    { headerName: 'Województwo', field: 'vet_state' },
    { headerName: 'Kod pocztowy', field: 'vet_zip' },
    { headerName: 'Telefon', field: 'vet_phone' },
    { headerName: 'Telefon', field: 'vet_email' },
    { headerName: 'Inne', field: 'vet_med_rec_site' }
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
    this.route.navigate(['/vetvisit/' + this.rowDataClicked3['Id']]); 
  }




  openDialogDelete(dialgBoxIdToDelete: number): void {
    let dialogRef = this.dialog.open(VetDeleteDialogComponent, {
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
    let dialogRef = this.dialog.open(VetAddDialogComponent, {
      width: '700px',
      height: '45%',
      panelClass: 'custom-dialog',
    });
    dialogRef.afterClosed().subscribe(result => {


    });
  }


  openDialogEdit(clickVariableModel: any): void {
    let dialogRef = this.dialog.open(VetEditDialogComponent, {
      width: '700px',
      height: '45%',
      panelClass: 'custom-dialog',
      data: {
        anyProperty: clickVariableModel
      }
    });
  }

  refresh() {
    this.service.getAll().subscribe(next => {
      this.alertify.sucess("Załadowano weterynarzy");
      this.rowData = [];
      for (let i = 0; i < next.length; i++) {
        console.log(next[i].CreatedDate);
        this.rowData.push(next[i]);
        console.log(this.rowData)
      }
    }, error => {
      this.alertify.error("Wystąpił błąd załadowania uzytkowników");
    });
  }
}
