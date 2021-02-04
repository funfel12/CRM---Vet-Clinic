import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_alertify/alertify.service';

import { map } from 'rxjs/operators';
import { Vaccine } from '../../_model/Vaccine';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  baseUrl = "http://localhost:49913/api/vaccine/"



  constructor(private http: HttpClient, private alertify: AlertifyService) {


  }
  get(idVisit: number) {
    const url = `${this.baseUrl}get`;
    return this.http.post(url, {
      id: idVisit
    }).pipe(map((data: any[]) =>
      data.map((item: any) => new Vaccine(item.id, item.createdDate, item.vaccine_name, item.vaccine_description, item.vaccine_series_num, item.vaccine_date_given, item.vaccine_date_expires, item.vaccine_notes, item.visit_id)
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
  update(Id: number, vaccine_name: string, vaccine_description: string, vaccine_series_num: string, vaccine_date_given: string, vaccine_date_expires: string, vaccine_notes: string, visit_id: number) {
    const url = `${this.baseUrl}update`;
    return this.http.post(url, {
      Id: Id,
      vaccine_name: vaccine_name,
      vaccine_description: vaccine_description,
      vaccine_series_num: vaccine_series_num,
      vaccine_date_given: vaccine_date_given,
      vaccine_date_expires: vaccine_date_expires,
      vaccine_notes: vaccine_notes,
      visit_id: visit_id
    }).subscribe(next => {
      this.alertify.sucess("Zedytowano szczepionke!");
    }, error => {
      this.alertify.error("Błąd edycjii szczepionki!");
    });

  }

  add(vaccine_name: string, vaccine_description: string, vaccine_series_num: string, vaccine_date_given: string, vaccine_date_expires: string, vaccine_notes: string, visit_id: number) {
    const url = `${this.baseUrl}add`;
    return this.http.post(url, {
      vaccine_name: vaccine_name,
      vaccine_description: vaccine_description,
      vaccine_series_num: vaccine_series_num,
      vaccine_date_given: vaccine_date_given,
      vaccine_date_expires: vaccine_date_expires,
      vaccine_notes: vaccine_notes,
      visit_id: visit_id
    }).subscribe(next => {
      this.alertify.sucess("Dodano szczepionke!");
    }, error => {
      this.alertify.error("Błąd dodania szczepionki!");
    });
  }

  delete(id: number) {
    this.http.delete(`${this.baseUrl}delete/${id}`).subscribe(next => {
      this.alertify.error("Usunięto szczepionke!");
    }, error => {
      this.alertify.error("Wystąpił błąd usuwania szczepionki!");
    });
  }



}

