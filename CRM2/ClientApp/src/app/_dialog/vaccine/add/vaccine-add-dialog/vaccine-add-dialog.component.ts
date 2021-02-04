import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Dicvaccine } from '../../../../_model/Dicvaccine';
import { AlertifyService } from '../../../../_services/_alertify/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { VaccineService } from '../../../../_services/_vaccine/vaccine.service';
import { DicvaccineService } from '../../../../_services/_dicvaccine/dicvaccine.service';

@Component({
  selector: 'app-vaccine-add-dialog',
  templateUrl: './vaccine-add-dialog.component.html',
  styleUrls: ['./vaccine-add-dialog.component.css']
})
export class VaccineAddDialogComponent implements OnInit {

  public dialogRef: MatDialogRef<VaccineAddDialogComponent>
  vaccine = [];
  model: any = {};

  constructor(@Inject(MAT_DIALOG_DATA) public dialogBox, private service: DicvaccineService, private alertify: AlertifyService
    , private dialog: MatDialog, private route: ActivatedRoute, private vaccineService: VaccineService)
  {

    service.getAll().subscribe(next => {
      alertify.sucess("Załadowano szczepionki");
      this.vaccine = [];
      for (let i = 0; i < next.length; i++) {
        console.log(next[i].CreatedDate);
        this.vaccine.push(next[i]);
      }
      console.log(this.vaccine);
    }, error => {
      alertify.error("Wystąpił błąd ładowania szczepionek");
    });
  }

  ngOnInit() {
    console.log(this.dialogBox.anyProperty);
  }

  addVaccine() {
    console.log(this.dialogBox.anyProperty);
    var variable = this.vaccineService.add(this.model.vaccine_name, this.model.vaccine_description, this.model.vaccine_series_num, this.model.vaccine_date_given, this.model.vaccine_date_expires,
      this.model.vaccine_notes,this.dialogBox.anyProperty);
  }


}
