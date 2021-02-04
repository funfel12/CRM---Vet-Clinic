import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_alertify/alertify.service';

import { map } from 'rxjs/operators';
import { Med } from '../../_model/Med';


@Injectable({
  providedIn: 'root'
})
export class MedService {

  baseUrl = "http://localhost:49913/api/med/"



  constructor(private http: HttpClient, private alertify: AlertifyService) {


  }
  get(idVisit: number) {
    const url = `${this.baseUrl}get`;
    return this.http.post(url, {
      id: idVisit
    }).pipe(map((data: any[]) =>
      data.map((item: any) => new Med(item.id, item.createdDate, item.med_name, item.med_description, item.med_dosage_freq, item.med_start_date, item.med_end_date, item.med_category, item.visit_id)
      )
    )
    );
  }
  getByid(idMed: number) {
    const url = `${this.baseUrl}getbyid`;
    return this.http.post(url, {
      id: idMed
    }
    );
  }
  update(Id: number, med_name: string, med_description: string,med_dosage_freq: string, med_start_date: string, med_end_date: string, med_category: string, visit_id: number) {
    const url = `${this.baseUrl}update`;
    return this.http.post(url, {
      Id: Id,
      med_name: med_name,
      med_description: med_description,
      med_dosage_freq: med_dosage_freq,
      med_start_date: med_start_date,
      med_end_date: med_end_date,
      med_category: med_category,
      visit_id: visit_id
    }).subscribe(next => {
      this.alertify.sucess("Zedytowano medykament!");
    }, error => {
      this.alertify.error("Błąd edycjii medykamentu!");
    });

  }

  add(med_name: string, med_description: string, med_dosage_freq: string, med_start_date: string, med_end_date: string, med_category: string, visit_id: number) {
    const url = `${this.baseUrl}add`;
    return this.http.post(url, {
      med_name: med_name,
      med_description: med_description,
      med_dosage_freq: med_dosage_freq,
      med_start_date: med_start_date,
      med_end_date: med_end_date,
      med_category: med_category,
      visit_id: visit_id
    }).subscribe(next => {
      this.alertify.sucess("Dodano medykament!");
    }, error => {
      this.alertify.error("Błąd dodania usługi!");
    });
  }

  delete(id: number) {
    this.http.delete(`${this.baseUrl}delete/${id}`).subscribe(next => {
      this.alertify.error("Usunięto medykament!");
    }, error => {
      this.alertify.error("Wystąpił błąd usuwania usługi!");
    });
  }



}

