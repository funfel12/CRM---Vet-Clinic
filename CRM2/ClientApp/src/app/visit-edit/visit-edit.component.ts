import { Component, OnInit } from '@angular/core';
import { VisitService } from '../_services/_visit/visit.service';
import { ButtonRenderComponent } from '../_render/button-render/button-render.component';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { VetService } from '../_services/_vet/vet.service';
import { ServiceService } from '../_services/_service/service.service';
import { VaccineService } from '../_services/_vaccine/vaccine.service';
import { MedService } from '../_services/_med/med.service';
import { MatDialog } from '@angular/material';
import { ServiceDeleteDialogComponent } from '../_dialog/service/delete/service-delete-dialog/service-delete-dialog.component';
import { MedDeleteDialogComponent } from '../_dialog/med/delete/med-delete-dialog/med-delete-dialog.component';
import { VaccineDeleteDialogComponent } from '../_dialog/vaccine/delete/vaccine-delete-dialog/vaccine-delete-dialog.component';
import { ServiceEditDialogComponent } from '../_dialog/service/edit/service-edit-dialog/service-edit-dialog.component';
import { MedEditDialogComponent } from '../_dialog/med/edit/med-edit-dialog/med-edit-dialog.component';
import { VaccineAddDialogComponent } from '../_dialog/vaccine/add/vaccine-add-dialog/vaccine-add-dialog.component';
import { VaccineEditDialogComponent } from '../_dialog/vaccine/edit/vaccine-edit-dialog/vaccine-edit-dialog.component';
import { ServiceAddDialogComponent } from '../_dialog/service/add/service-add-dialog/service-add-dialog.component';
import { MedAddDialogComponent } from '../_dialog/med/add/med-add-dialog/med-add-dialog.component';

@Component({
  selector: 'app-visit-edit',
  templateUrl: './visit-edit.component.html',
  styleUrls: ['./visit-edit.component.css']
})
export class VisitEditComponent implements OnInit {


  veterinary = [];
  visitModel: any;
  visit: any;
  modeView: any;

  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};
  rowDataClicked3 = {};
  rowData = [];
  columnDefs = [];



  constructor(private visitService: VisitService, private routeRe: ActivatedRoute, private alertify: AlertifyService, private vetservice: VetService,
    private serService: ServiceService, private vacService: VaccineService, private medService: MedService,  private dialog: MatDialog)
  {

    this.frameworkComponents = {
      buttonRenderer: ButtonRenderComponent,
    }
  

    
    this.modeView = 'ser';

    //Ładowanie lekarzy
    this.vetservice.getAll().subscribe(next => {
      alertify.sucess("Załadowano lekarzy");
      this.veterinary = [];
      for (let i = 0; i < next.length; i++) {
        console.log(next[i].CreatedDate);
        this.veterinary.push(next[i]);
      }
      console.log(this.veterinary);
    }, error => {
      alertify.error("Wystąpił błąd załadowania lekarzy");
    });

    //Ładowanie wizyty
    this.routeRe.paramMap.subscribe(params => {
      this.visit = parseInt(params.get("visit"));
    })
    this.visitService.getByid(this.visit).subscribe(next => {
      this.alertify.sucess("Załadowano wizyte!");
      this.visitModel = next;
      console.log(next);
    });

    this.changeModeView(this.modeView);
    
  }
  editVisit() {
    this.visitService.update(this.visit, this.visitModel.med_visit_summary, this.visitModel.visit_category, this.visitModel.visit_notes, this.visitModel.visit_weight, this.visitModel.visit_date, this.visitModel.vet_id);
  }




  ngOnInit() {

 
  }

  openDialogDelete(dialgBoxIdToDelete: number): void
  {

    let dialogRef;
    switch (this.modeView) {
      case 'ser':

        dialogRef = this.dialog.open(ServiceDeleteDialogComponent, {
          width: '700px',
          height: '25%',
          panelClass: 'custom-dialog'

        });
        dialogRef.afterClosed().subscribe(result => {
          if (result === undefined) {

          }
          else
          {
            this.serService.delete(dialgBoxIdToDelete);
          }
        });

        break;
      case 'med':
        dialogRef = this.dialog.open(MedDeleteDialogComponent, {
          width: '700px',
          height: '25%',
          panelClass: 'custom-dialog'

        });
        dialogRef.afterClosed().subscribe(result => {
          if (result === undefined) {

          }
          else {
            this.serService.delete(dialgBoxIdToDelete);

          }
        });
        break;
      case 'vac':
        dialogRef = this.dialog.open(VaccineDeleteDialogComponent, {
          width: '700px',
          height: '25%',
          panelClass: 'custom-dialog'

        });
        dialogRef.afterClosed().subscribe(result => {
          if (result === undefined) {

          }
          else {
            this.serService.delete(dialgBoxIdToDelete);
          }
        });
        break;

    }


  }

  openDialogEdit(clickVariableModel: any): void {
    let dialogRef;
    switch (this.modeView)
    {
      case 'ser':
        dialogRef = this.dialog.open(ServiceEditDialogComponent, {
          width: '700px',
          height: '40%',
          panelClass: 'custom-dialog',
          data: {
            anyProperty: clickVariableModel
          }
        });
        break;
      case 'med':
        dialogRef = this.dialog.open(MedEditDialogComponent, {
          width: '700px',
          height: '40%',
          panelClass: 'custom-dialog',
          data: {
            anyProperty: clickVariableModel
          }
        });
        break;
      case 'vac':
        dialogRef = this.dialog.open(VaccineEditDialogComponent, {
          width: '700px',
          height: '40%',
          panelClass: 'custom-dialog',
          data: {
            anyProperty: clickVariableModel
          }
        });
        break;
    }


  
  }




  openDialogAdd(): void {
    let dialogRef;

    switch (this.modeView) {
      case 'ser':
        dialogRef = this.dialog.open(ServiceAddDialogComponent, {
          width: '700px',
          height: '40%',
          panelClass: 'custom-dialog',
          data: {
            anyProperty: this.visit
          }

        });
        dialogRef.afterClosed().subscribe(result => {
        });

        break;
      case 'med':
        dialogRef = this.dialog.open(MedAddDialogComponent, {
          width: '700px',
          height: '40%',
          panelClass: 'custom-dialog',
          data: {
            anyProperty: this.visit
          }

        });
        dialogRef.afterClosed().subscribe(result => {
        });
        break;
      case 'vac':
        dialogRef = this.dialog.open(VaccineAddDialogComponent, {
          width: '700px',
          height: '40%',
          panelClass: 'custom-dialog',
          data: {
            anyProperty: this.visit
          }

        });
        dialogRef.afterClosed().subscribe(result => {
        });
        break;


    }
  }




  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
    this.openDialogEdit(this.rowDataClicked1);


  }
  onBtnClick2(e) {
    this.rowDataClicked2 = e.rowData;
    this.openDialogDelete(e.rowData.Id);
  }


  refreshServ()
  {
    this.serService.get(this.visit).subscribe(next => {
      this.alertify.sucess("Załadowano usługi");
      this.rowData = [];
      for (let i = 0; i < next.length; i++) {
        console.log(next[i].CreatedDate);
        this.rowData.push(next[i]);
        console.log(this.rowData)
      }
    }, error => {
      this.alertify.error("Wystąpił błąd załadowania usług");
    });
  }

  refreshVac() {
    this.vacService.get(this.visit).subscribe(next => {
      this.alertify.sucess("Załadowano szczepionki");
      this.rowData = [];
      for (let i = 0; i < next.length; i++) {
        console.log(next[i].CreatedDate);
        this.rowData.push(next[i]);
        console.log(this.rowData)
      }
    }, error => {
      this.alertify.error("Wystąpił błąd załadowania szczepionek");
    });
  }

  refreshMed() {
    this.medService.get(this.visit).subscribe(next => {
      this.alertify.sucess("Załadowano medykamenty");
      this.rowData = [];
      for (let i = 0; i < next.length; i++) {
        console.log(next[i].CreatedDate);
        this.rowData.push(next[i]);
        console.log(this.rowData)
      }
    }, error => {
      this.alertify.error("Wystąpił błąd załadowania medykamentów");
    });
  }




  changeModeView(modeView: string)
  {
    switch (modeView)
    {
    
      case 'ser':

        this.refreshServ();

        this.columnDefs =
          [
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
          { headerName: 'Nazwa usługi', field: 'serv_name' },
          { headerName: 'Opis usługi', field: 'serv_description' },
          { headerName: 'Id wizyty', field: 'visit_id' }
        ];
        break;


      case 'med':

        this.refreshMed();

        this.columnDefs = [
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
          { headerName: 'Nazwa medykamentu', field: 'med_name' },
          { headerName: 'Opis medykamentu', field: 'med_description' },
          { headerName: 'Opis częstotliwości podawania', field: 'med_dosage_freq' },
          { headerName: 'Start podawania', field: 'med_start_date' },
          { headerName: 'Koniec podawania', field: 'med_end_date' },
          { headerName: 'Opis iniekcjii', field: 'med_dosage_freq' },
          { headerName: 'Kategoria medykamentu', field: 'med_category' },
          { headerName: 'Id wizyty', field: 'visit_id' }
        ];
        break;

      case 'vac':

        this.refreshVac();

        this.columnDefs = [
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
          { headerName: 'Nazwa szczepionki', field: 'vaccine_name' },
          { headerName: 'Opis szczepionki', field: 'vaccine_description' },
          { headerName: 'Numer seryjny szczepionki', field: 'vaccine_series_num' },
          { headerName: 'Opis szczepionki', field: 'vaccine_description' },
          { headerName: 'Data podania', field: 'vaccine_date_given' },
          { headerName: 'Data ważności', field: 'vaccine_date_expires' },
          { headerName: 'Opis szczepionki', field: 'vaccine_notes' },
          { headerName: 'Id wizyty', field: 'visit_id' }

        ];
        break;

    }
    this.modeView = modeView;
  }

}
