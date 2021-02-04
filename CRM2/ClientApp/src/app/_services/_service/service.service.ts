import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_alertify/alertify.service';

import { map } from 'rxjs/operators';
import { Service } from '../../_model/Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = "http://localhost:49913/api/service/"



  constructor(private http: HttpClient, private alertify: AlertifyService) {


  }

  get(idVisit: number) {
    const url = `${this.baseUrl}get`;
    return this.http.post(url, {
      id: idVisit
    }).pipe(map((data: any[]) =>
      data.map((item: any) => new Service(item.id, item.createdDate, item.serv_name, item.serv_description, item.visit_id)
      )
    )
    );
  }


  getByid(idService: number) {
    const url = `${this.baseUrl}getbyid`;
    return this.http.post(url, {
      id: idService
    }
    );
  }

  update(Id: number, serv_name: string, serv_description: string, visit_id: number) {
    const url = `${this.baseUrl}update`;
    return this.http.post(url, {
      Id: Id,
      serv_name: serv_name,
      serv_description: serv_description,
      visit_id: visit_id,
    }).subscribe(next => {
      this.alertify.sucess("Zedytowano usługe!");
    }, error => {
      this.alertify.error("Błąd edycjii usługi!");
    });

  }

  add(serv_name: string, serv_description: string, visit_id: string) {
    const url = `${this.baseUrl}add`;
    return this.http.post(url, {
      serv_name: serv_name,
      serv_description: serv_description,
      visit_id: visit_id,
    }).subscribe(next => {
      this.alertify.sucess("Dodano usługe!");
    }, error => {
      this.alertify.error("Błąd dodania usługi!");
    });
  }

  delete(id: number) {
    this.http.delete(`${this.baseUrl}delete/${id}`).subscribe(next => {
      this.alertify.error("Usunięto usługe!");
    }, error => {
      this.alertify.error("Wystąpił błąd usuwania usługi!");
    });
  }



}

