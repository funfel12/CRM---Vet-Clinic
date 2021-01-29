import { Component, OnInit } from '@angular/core';
import { VetService } from '../../../../_services/_vet/vet.service';
import { AlertifyService } from '../../../../_services/_alertify/alertify.service';
import { MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';
import { VisitService } from '../../../../_services/_visit/visit.service';



@Component({
  selector: 'app-visit-add-dialog',
  templateUrl: './visit-add-dialog.component.html',
  styleUrls: ['./visit-add-dialog.component.css']
})
export class VisitAddDialogComponent implements OnInit {

  veterinary = [];
  model: any = {};

  
   

  constructor(private service: VetService, private visitService: VisitService, private alertify: AlertifyService, private dialog: MatDialog, private datePipe: DatePipe)
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
        alertify.error("Wystąpił błąd załadowania Lekarzy");
    });
  }



  ngOnInit() {
  }

  addVisit() {

    console.log(this.model);
    console.log(this.datePipe.transform(this.model.visit_date, 'yyyy-MM-ddTHH:mm:ss.SSS'));
    var variable = this.visitService.add(this.model.visite_date, this.model.visit_notes, this.model.med_visit_summary, this.model.visit_category, this.model.pet_id, this.model.vet_id);
    //var variable = this.services.add(this.model.vet_name, this.model.vet_adress, this.model.vet_city, this.model.vet_state, this.model.vet_zip, this.model.vet_phone, this.model.vet_email, this.model.vet_med_rec_site);
  }

}
