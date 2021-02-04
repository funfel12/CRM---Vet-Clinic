import { Component, OnInit } from '@angular/core';
import { VisitDeleteDialogComponent } from '../_dialog/visit/delete/visit-delete-dialog/visit-delete-dialog.component';
import { VisitAddDialogComponent } from '../_dialog/visit/add/visit-add-dialog/visit-add-dialog.component';
import { VisitEditDialogComponent } from '../_dialog/visit/edit/visit-edit-dialog/visit-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { OwnerService } from '../_services/_owner/owner.service';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ButtonRenderComponent } from '../_render/button-render/button-render.component';
import { VisitService } from '../_services/_visit/visit.service';





@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})

export class VisitComponent implements OnInit {

  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};
  rowDataClicked3 = {};
  rowData = [];
  visit: any;

  constructor(public dialog: MatDialog, private routeRe: ActivatedRoute, private service: VisitService, private alertify: AlertifyService, private route: Router) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRenderComponent,
    }
  }


  ngOnInit() {
    this.routeRe.paramMap.subscribe(params => {
      this.visit = parseInt(params.get("visit"));
    })
    console.log(this.visit);
    this.refresh();
  }

  columnDefs = [
  
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
    {
      headerName: 'Data wizyty', field: 'visit_date', cellRenderer: (data) => {
        return data.value ? (new Date(data.value)).toLocaleDateString() : '';
      }
    },
    {
      headerName: 'Godzina wizyty', field: 'visit_date', cellRenderer: (data) => {
        return data.value ? (new Date(data.value)).toLocaleTimeString() : '';
      }
    },

    { headerName: 'Notatka z wizyty', field: 'visit_notes' },
    { headerName: 'Podsumowanie wizyty', field: 'med_visit_summary' },
    { headerName: 'Kategoria', field: 'visit_category' },
    { headerName: 'Zwierze', field: 'pet_id' },
    { headerName: 'Lekarz weterynarii', field: 'vet_id' }



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
    this.route.navigate(['/visitedit/' + this.rowDataClicked3['Id']]);
  }

  openDialogDelete(dialgBoxIdToDelete: number): void {
    let dialogRef = this.dialog.open(VisitDeleteDialogComponent, {
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
    console.log(this.visit);
    let dialogRef = this.dialog.open(VisitAddDialogComponent, {
      width: '700px',
      height: '40%',
      panelClass: 'custom-dialog',
      data: {
        anyProperty: this.visit
      }

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }


  openDialogEdit(clickVariableModel: any): void {
    let dialogRef = this.dialog.open(VisitEditDialogComponent, {
      width: '700px',
      height: '40%',
      panelClass: 'custom-dialog',
      data: {
        anyProperty: clickVariableModel
      }
    });
  }

  refresh() {
    this.service.get(this.visit).subscribe(next => {
      this.alertify.sucess("Załadowano wizyty");
      this.rowData = [];
      for (let i = 0; i < next.length; i++) {
        console.log(next[i].CreatedDate);
        this.rowData.push(next[i]);
        console.log(this.rowData)
      }
    }, error => {
      this.alertify.error("Wystąpił błąd załadowania wizyt");
    });
  }
}
