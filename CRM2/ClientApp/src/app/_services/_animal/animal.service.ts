import { Injectable } from '@angular/core';
import { AlertifyService } from '../_alertify/alertify.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  baseUrl = "http://localhost:49913/api/pet/"

  constructor(private http: HttpClient, private alertify: AlertifyService)
  {

  }

  //getAll(): Observable<Owner[]>

  get(idOwner: number) {
    const url = `${this.baseUrl}get`;
    return this.http.post(url, {
      id: idOwner
    });
  }

  add(pet_name: string, pet_species: string,
    pet_breed: string, pet_sex: string, pet_color: string, owner_id: number, pet_dob:string) {

    const url = `${this.baseUrl}add`;
    return this.http.post(url, {
      pet_name: pet_name,
      pet_species: pet_species,
      pet_breed: pet_breed,
      pet_sex: pet_sex,
      pet_color: pet_color,
      owner_id: owner_id,
      pet_dob: pet_dob
    }).subscribe(next => {
      this.alertify.sucess("Dodano zwierzę!");
    }, error => {
      this.alertify.error("Błąd dodania zwierzęcia!");
    });

  }


  delete(id: number) {
    this.http.delete(`${this.baseUrl}delete/${id}`).subscribe(next => {
      this.alertify.error("Usunięto użytkownika!");
    }, error => {
      this.alertify.error("Wystąpił błąd usuwania użytkownika!");
    });
  }



}
