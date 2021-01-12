import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { OwnerService } from '../../../../_services/_owner/owner.service';
import { AlertifyService } from '../../../../_services/_alertify/alertify.service';


@Component({
  selector: 'app-owner-add-dialog',
  templateUrl: './owner-add-dialog.component.html',
  styleUrls: ['./owner-add-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OwnerAddDialogComponent implements OnInit {
  public dialogRef: MatDialogRef<OwnerAddDialogComponent>

  constructor(private dialog: MatDialog, private services: OwnerService, private alertify: AlertifyService)
  {


  }
  model: any = {};

  addOwner() {
    var variable = this.services.add(this.model.owner_first_name, this.model.owner_last_name, this.model.owner_adress, this.model.owner_city ,this.model.owner_email, this.model.owner_telephone);
  
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(true);
  }

}
