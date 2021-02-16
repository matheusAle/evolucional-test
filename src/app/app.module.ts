import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import {SummaryModule} from './domain/summary/summary.module';
import {defaultDataServiceConfig, entityConfig} from './entity-metadata';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClassService} from './state/data/class.service';
import {DegreeService} from './state/data/degree.service';
import {StudentService} from './state/data/student.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    BrowserAnimationsModule,
    SummaryModule
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    studentService: StudentService,
    classService: ClassService,
    degreeService: DegreeService
  ) {
    studentService.getAll();
    classService.getAll();
    degreeService.getAll();
  }
}
