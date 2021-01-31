import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { VisitsComponent } from './visits/visits.component'
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { AgGridModule } from 'ag-grid-angular';
import { AuthService } from './_services/_auth/auth.service';
import { AlertifyService } from './_services/_alertify/alertify.service';
import { HeadComponent } from './head/head.component';
import { ButtonRenderComponent } from './_render/button-render/button-render.component';
import { OwnerAddDialogComponent } from './_dialog/owner/add/owner-add-dialog/owner-add-dialog.component';
import { OwnerDeleteDialogComponent } from './_dialog/owner/delete/owner-delete-dialog/owner-delete-dialog.component';
import { OwnerEditDialogComponent } from './_dialog/owner/edit/owner-edit-dialog/owner-edit-dialog.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalAddDialogComponent } from './_dialog/animal/add/animal-add-dialog/animal-add-dialog.component';
import { AnimalDeleteDialogComponent } from './_dialog/animal/delete/animal-delete-dialog/animal-delete-dialog.component';
import { AnimalService } from './_services/_animal/animal.service';
import { VisitComponent } from './visit/visit.component';
import { VisitAddDialogComponent } from './_dialog/visit/add/visit-add-dialog/visit-add-dialog.component';
import { VisitDeleteDialogComponent } from './_dialog/visit/delete/visit-delete-dialog/visit-delete-dialog.component';
import { VisitEditDialogComponent } from './_dialog/visit/edit/visit-edit-dialog/visit-edit-dialog.component';
import { VisitService } from './_services/_visit/visit.service';
import { VetComponent } from './vet/vet.component';
import { VetService } from './_services/_vet/vet.service';
import { VetAddDialogComponent } from './_dialog/vet/add/vet-add-dialog/vet-add-dialog.component';
import { VetDeleteDialogComponent } from './_dialog/vet/delete/vet-delete-dialog/vet-delete-dialog.component';
import { VetEditDialogComponent } from './_dialog/vet/edit/vet-edit-dialog/vet-edit-dialog.component';
import { DicmedComponent } from './dicmed/dicmed.component';
import { DicserviceComponent } from './dicservice/dicservice.component';
import { DicvacineComponent } from './dicvacine/dicvacine.component';
import { DicserviceService } from './_services/_dicservice/dicservice.service';
import { DicmedService } from './_services/_dicmed/dicmed.service';
import { DicmedAddDialogComponent } from './_dialog/dicMed/add/dicmed-add-dialog/dicmed-add-dialog.component';
import { DicmedEditDialogComponent } from './_dialog/dicMed/edit/dicmed-edit-dialog/dicmed-edit-dialog.component';
import { DicmedDeleteDialogComponent } from './_dialog/dicMed/delete/dicmed-delete-dialog/dicmed-delete-dialog.component';
import { DicserviceAddComponent } from './_dialog/dicService/add/dicservice-add/dicservice-add.component';
import { DicserviceEditComponent } from './_dialog/dicService/edit/dicservice-edit/dicservice-edit.component';
import { DicserviceDeleteComponent } from './_dialog/dicService/delete/dicservice-delete/dicservice-delete.component';
import { DicvaccineAddDialogComponent } from './_dialog/dicVaccine/add/dicvaccine-add-dialog/dicvaccine-add-dialog.component';
import { DicvaccineEditDialogComponent } from './_dialog/dicVaccine/edit/dicvaccine-edit-dialog/dicvaccine-edit-dialog.component';
import { DicvaccineDeleteDialogComponent } from './_dialog/dicVaccine/delete/dicvaccine-delete-dialog/dicvaccine-delete-dialog.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MAT_DATE_LOCALE } from '@angular/material';
import { NgxMatTimepickerModule, NgxMatNativeDateModule } from "@angular-material-components/datetime-picker";
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
import { DatePipe } from '@angular/common';
import { VisitEditComponent } from './visit-edit/visit-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    HeadComponent,
    AnimalComponent,
    VisitComponent,
    VetComponent,
    DicmedComponent,
    VisitsComponent,
    DicserviceComponent,
    DicvacineComponent,
    ButtonRenderComponent,
    OwnerAddDialogComponent,
    OwnerDeleteDialogComponent,
    OwnerEditDialogComponent,
    AnimalAddDialogComponent,
    AnimalDeleteDialogComponent,
    VisitAddDialogComponent,
    VisitDeleteDialogComponent,
    VisitEditDialogComponent,
    VetAddDialogComponent,
    VetDeleteDialogComponent,
    VetEditDialogComponent,
    DicmedEditDialogComponent,
    DicmedAddDialogComponent,
    DicmedDeleteDialogComponent,
    DicserviceAddComponent,
    DicserviceEditComponent,
    DicserviceDeleteComponent,
    DicvaccineAddDialogComponent,
    DicvaccineEditDialogComponent,
    DicvaccineDeleteDialogComponent,
    VisitEditComponent

   


   


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'login', component: LoginComponent },
      { path: 'head', component: HeadComponent },
      { path: 'animal/:animal', component: AnimalComponent },
      { path: 'visit/:visit', component: VisitComponent },
      { path: 'vet', component: VetComponent },
      { path: 'dicvacine', component: DicvacineComponent },
      { path: 'dicservice', component: DicserviceComponent },
      { path: 'dicmed', component: DicmedComponent },
      { path: 'visits', component: VisitsComponent },
      { path: 'visitedit/:visit', component: VisitEditComponent}
    ]),
    BrowserAnimationsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([ButtonRenderComponent]),
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    NgxMaterialTimepickerModule,
    NgxMatDatetimePickerModule,

    


  ],
  exports: [MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    MatFormFieldModule

  ],
  providers: [AuthService, AlertifyService, AnimalService, VisitService, VetService, DicserviceService, DicmedService,
    DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [OwnerAddDialogComponent, DicmedAddDialogComponent, OwnerDeleteDialogComponent, OwnerEditDialogComponent, AnimalAddDialogComponent, AnimalDeleteDialogComponent, VisitAddDialogComponent, VisitEditDialogComponent, VisitDeleteDialogComponent, VetAddDialogComponent, VetDeleteDialogComponent, VetEditDialogComponent, DicmedEditDialogComponent, DicmedDeleteDialogComponent, DicserviceAddComponent,
    DicserviceEditComponent,
    DicserviceDeleteComponent,
    DicvaccineAddDialogComponent,
    DicvaccineEditDialogComponent,
    DicvaccineDeleteDialogComponent,
    ]
})
export class AppModule { }
