import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ServiceService } from '../../../../_services/_service/service.service';
import { AlertifyService } from '../../../../_services/_alertify/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { DicserviceService } from '../../../../_services/_dicservice/dicservice.service';

@Component({
  selector: 'app-service-add-dialog',
  templateUrl: './service-add-dialog.component.html',
  styleUrls: ['./service-add-dialog.component.css']
})
export class ServiceAddDialogComponent implements OnInit {

  public dialogRef: MatDialogRef<ServiceAddDialogComponent>
  services = [];
  model: any = {};


  constructor(@Inject(MAT_DIALOG_DATA) public dialogBox, private service: DicserviceService, private alertify: AlertifyService,
    private dialog: MatDialog, private route: ActivatedRoute, private serviceService: ServiceService)
  {

    service.getAll().subscribe(next => {
      alertify.sucess("Załadowano lekarzy");
      this.services = [];
      for (let i = 0; i < next.length; i++) {
        console.log(next[i].CreatedDate);
        this.services.push(next[i]);
      }
      console.log(this.services);
    }, error => {
        alertify.error("Wystąpił błąd ładowania usług");
    });
  }

  ngOnInit() {
    console.log(this.dialogBox.anyProperty);
  }

  addService() {

    console.log(this.dialogBox.anyProperty);
    var variable = this.serviceService.add(this.model.serv_name, this.model.serv_description, this.dialogBox.anyProperty);
  }

}
