import { Component, OnInit } from '@angular/core';
import { ButtonRenderComponent } from '../_render/button-render/button-render.component';
import { MatDialog } from '@angular/material/dialog';
import { OwnerAddDialogComponent } from '../_dialog/owner/add/owner-add-dialog/owner-add-dialog.component';
import { OwnerDeleteDialogComponent } from '../_dialog/owner/delete/owner-delete-dialog/owner-delete-dialog.component';
import { OwnerService } from '../_services/_owner/owner.service';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { Owner } from '../_model/Owner';
import { OwnerEditDialogComponent } from '../_dialog/owner/edit/owner-edit-dialog/owner-edit-dialog.component';
import { Router, Route } from '@angular/router';




@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};
  rowDataClicked3 = {};
  rowData = [];
  

 



  constructor(public dialog: MatDialog, private service: OwnerService, private alertify: AlertifyService, private route: Router) {
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
    { headerName: 'Imie', field: 'owner_first_name' },
    { headerName: 'Nazwisko', field: 'owner_last_name' },
    { headerName: 'Adres', field: 'owner_adress' },
    { headerName: 'Miasto', field: 'owner_city' },
    { headerName: 'Telefon', field: 'owner_telephone' },
    { headerName: 'Email', field: 'owner_email' }



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
    let dialogRef = this.dialog.open(OwnerDeleteDialogComponent, {
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
    let dialogRef = this.dialog.open(OwnerAddDialogComponent, {
      width: '700px',
      height: '40%',
      panelClass: 'custom-dialog',
    });
      dialogRef.afterClosed().subscribe(result => {


    });
  }


  openDialogEdit(clickVariableModel: any): void {
    let dialogRef = this.dialog.open(OwnerEditDialogComponent, {
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
      this.alertify.sucess("Załadowano użytkowników");
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
