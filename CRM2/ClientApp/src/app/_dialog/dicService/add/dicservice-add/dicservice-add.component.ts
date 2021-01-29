import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DicserviceService } from '../../../../_services/_dicservice/dicservice.service';
import { AlertifyService } from '../../../../_services/_alertify/alertify.service';

@Component({
  selector: 'app-dicservice-add',
  templateUrl: './dicservice-add.component.html',
  styleUrls: ['./dicservice-add.component.css']
})
export class DicserviceAddComponent implements OnInit {
  public dialogRef: MatDialogRef<DicserviceAddComponent>

  constructor(private dialog: MatDialog, private services: DicserviceService, private alertify: AlertifyService) {


  }
  model: any = {};

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  addService() {
    var variable = this.services.add(this.model.dic_services_name, Number(this.model.Price));

  }
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close(true);
  }

}
