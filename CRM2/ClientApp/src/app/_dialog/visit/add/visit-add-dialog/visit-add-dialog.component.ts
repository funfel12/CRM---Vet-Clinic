import { Component, OnInit, Inject } from '@angular/core';
import { VetService } from '../../../../_services/_vet/vet.service';
import { AlertifyService } from '../../../../_services/_alertify/alertify.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatePipe } from '@angular/common';
import { VisitService } from '../../../../_services/_visit/visit.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-visit-add-dialog',
  templateUrl: './visit-add-dialog.component.html',
  styleUrls: ['./visit-add-dialog.component.css']
})
export class VisitAddDialogComponent implements OnInit {
  public dialogRef: MatDialogRef<VisitAddDialogComponent>

  veterinary = [];
  model: any = {};

  
   

  constructor(@Inject(MAT_DIALOG_DATA)  public dialogBoxAnimalNumber,private service: VetService, private visitService: VisitService, private alertify: AlertifyService,private dialog: MatDialog, private datePipe: DatePipe, private route: ActivatedRoute)
  {
    service.getAll().subscribe(next => {
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
  }

  ngOnInit() {
    console.log(this.dialogBoxAnimalNumber.anyProperty);
  }

  addVisit() {
    console.log(this.model);
    console.log(this.datePipe.transform(this.model.visit_date, 'yyyy-MM-ddTHH:mm:ss.SSS'));
    console.log(this.dialogBoxAnimalNumber.anyProperty);
    var variable = this.visitService.add(this.model.visit_date, this.model.visit_notes, this.model.med_visit_summary, this.model.visit_category, this.dialogBoxAnimalNumber.anyProperty, this.model.vet_id);
    //var variable = this.services.add(this.model.vet_name, this.model.vet_adress, this.model.vet_city, this.model.vet_state, this.model.vet_zip, this.model.vet_phone, this.model.vet_email, this.model.vet_med_rec_site);
  }



}
