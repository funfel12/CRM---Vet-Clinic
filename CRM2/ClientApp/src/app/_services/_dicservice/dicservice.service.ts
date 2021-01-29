import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_alertify/alertify.service';
import { Observable } from 'rxjs';
import { Dicservice } from '../../_model/Dicservice';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DicserviceService {

  baseUrl = "http://localhost:49913/api/dicservice/";

  constructor(private http: HttpClient, private alertify: AlertifyService) {
  }
  getAll(): Observable<Dicservice[]> {

    const url = `${this.baseUrl}get`;
    return this.http.post(url, {})
      .pipe(map((data: any[]) =>
        data.map((item: any) => new Dicservice(item.id, item.createdDate ,item.dic_services_name, item.price)
        )
      )
      );
  }
  add(dic_services_name: string, Price: number) {

    const url = `${this.baseUrl}add`;
    return this.http.post(url, {
      dic_services_name: dic_services_name,
      Price: Price
    }).subscribe(next => {
      this.alertify.sucess("Dodano usługe!");
    }, error => {
        this.alertify.error("Wystąpił błąd dodawania usługi!");
    });

  }


  update(Id: number, dic_services_name: string, Price: number) {

    const url = `${this.baseUrl}update`;
    return this.http.post(url, {
      Id: Id,
      dic_services_name: dic_services_name,
      Price: Price
    }).subscribe(next => {
      this.alertify.sucess("Edycja udana!");
    }, error => {
      this.alertify.error("Wystąpił błąd!");
    });

  }

  delete(id: number) {
    this.http.delete(`${this.baseUrl}delete/${id}`)
      .subscribe(next => {
        this.alertify.error("Usunięto medykament!");
      }, error => {
        this.alertify.error("Wystąpił błąd usuwania medykamentu!");
      });
  }
}
