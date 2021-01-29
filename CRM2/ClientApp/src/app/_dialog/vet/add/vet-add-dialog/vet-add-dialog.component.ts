import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { VetService } from '../../../../_services/_vet/vet.service';
import { AlertifyService } from '../../../../_services/_alertify/alertify.service';


@Component({
  selector: 'app-vet-add-dialog',
  templateUrl: './vet-add-dialog.component.html',
  styleUrls: ['./vet-add-dialog.component.css']
})
export class VetAddDialogComponent implements OnInit {
  public dialogRef: MatDialogRef<VetAddDialogComponent>

    constructor(private dialog: MatDialog, private services: VetService, private alertify: AlertifyService)
  {


  }
  model: any = {};

  addVet() {
    var variable = this.services.add(this.model.vet_name, this.model.vet_adress, this.model.vet_city, this.model.vet_state, this.model.vet_zip, this.model.vet_phone, this.model.vet_email, this.model.vet_med_rec_site);

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(true);
  }

}

