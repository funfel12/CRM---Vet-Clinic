import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DicmedService } from '../../../../_services/_dicmed/dicmed.service';
import { AlertifyService } from '../../../../_services/_alertify/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { MedService } from '../../../../_services/_med/med.service';


@Component({
  selector: 'app-med-add-dialog',
  templateUrl: './med-add-dialog.component.html',
  styleUrls: ['./med-add-dialog.component.css']
})
export class MedAddDialogComponent implements OnInit {

  public dialogRef: MatDialogRef<MedAddDialogComponent>
  medicament = [];
  model: any = {};

  constructor(@Inject(MAT_DIALOG_DATA) public dialogBox, private service: DicmedService, private alertify: AlertifyService
    , private dialog: MatDialog, private route: ActivatedRoute, private medService: MedService) {

    service.getAll().subscribe(next => {
      alertify.sucess("Załadowano medykamenty");
      this.medicament = [];
      for (let i = 0; i < next.length; i++) {
        console.log(next[i].CreatedDate);
        this.medicament.push(next[i]);
      }
      console.log(this.medicament);
    }, error => {
      alertify.error("Wystąpił błąd ładowania medykamentu");
    });
  }

  ngOnInit() {
    console.log(this.dialogBox.anyProperty);
  }

  addMed() {
    console.log(this.dialogBox.anyProperty);
    var variable = this.medService.add(this.model.med_name, this.model.med_description, this.model.med_dosage_freq, this.model.med_start_date, this.model.med_end_date,
      this.model.med_category, this.dialogBox.anyProperty);

  }


}
