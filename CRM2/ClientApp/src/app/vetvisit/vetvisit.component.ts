import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';

import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { Visit } from '../_model/Visit';
import { VisitService } from '../_services/_visit/visit.service';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { VetService } from '../_services/_vet/vet.service';
import { ActivatedRoute, Router } from '@angular/router';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-vetvisit',
  templateUrl: './vetvisit.component.html',
  styleUrls: ['./vetvisit.component.css']
})
export class VetvisitComponent implements OnInit {







  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  visit: any;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] =
    [

    ];

  activeDayIsOpen: boolean = true;


  constructor(private service: VisitService, private alertify: AlertifyService,private  serviceVet: VetService, private route: Router) {

  
    //this.visit = service.getAll();
    console.log(this.visit);

  }


  ngOnInit(): void {

    this.service.getAll().subscribe(next => {
      this.alertify.sucess("Załadowano wizyty");

      for (let i = 0; i < next.length; i++) {
        let newDate = new Date(next[i].visit_date);
        console.log(newDate);
        console.log(next);

        this.events.push({
          start: newDate,
          end: newDate,
          title: "<br/>Kategoria: " + next[i].visit_category + "<br/>Lekarz: " + next[i].vet.vet_name + "<br/>Imie zwierzęcia: " + next[i].pet.pet_name +
            "<br/>Kategoria zwierzęcia: " + next[i].pet.pet_breed,
          color: colors.red,
          allDay: true,
          id: next[i].Id



        });

      }
    }, error => {
      this.alertify.error("Wystąpił błąd załadowania wizyt");
    });


  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }

  }


  handleEvent(action: string, event: CalendarEvent): void {
    console.log(event.id);
    console.log(action);
    this.route.navigate(['visitedit/' + event.id]);


  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
