import { Component, OnInit } from '@angular/core';
import { ButtonRenderComponent } from '../_render/button-render/button-render.component';
import { MatDialog } from '@angular/material/dialog';
import { OwnerAddDialogComponent } from '../_dialog/owner/add/owner-add-dialog/owner-add-dialog.component';
import { OwnerService } from '../_services/_owner/owner.service';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { Owner } from '../_model/Owner';




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
  

 



  constructor(public dialog: MatDialog, private service: OwnerService, private alertify: AlertifyService) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRenderComponent,
    }
    

  
  

  }


  ngOnInit() {

  
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
    { headerName: 'Data utworzenia', field: 'CreatedDate' },
    { headerName: 'Imie', field: 'owner_first_name' },
    { headerName: 'Nazwisko', field: 'owner_last_name' },
    { headerName: 'Adres', field: 'owner_adress' },
    { headerName: 'Miasto', field: 'owner_city' },
    { headerName: 'Telefon', field: 'owner_telephone' },
    { headerName: 'Email', field: 'owner_email' }



  ];



 



  //rowData = [this.service.getAll()]

  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
    console.log(e.rowData.owner_first_name);

  }

  onBtnClick2(e) {
    this.rowDataClicked2 = e.rowData;
  }

  onBtnClick3(e) {
    this.rowDataClicked3 = e.rowData;
  }


  openDialogAdd(): void {
    let dialogRef = this.dialog.open(OwnerAddDialogComponent, {
      width: '700px',
      height: '40%',
      panelClass: 'custom-dialog'

     // data: { name: this.name, animal: this.animal }
    });

      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
