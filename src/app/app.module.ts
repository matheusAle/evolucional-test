import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import {ToolbarModule} from './components/toolbar/toolbar.module';
import {SummaryModule} from './domain/summary/summary.module';
import {defaultDataServiceConfig, entityConfig} from './entity-metadata';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthInterceptor} from './http-intercepts/auth.interceptor';
import {ClassService} from './state/data/class.service';
import {DegreeService} from './state/data/degree.service';
import {MatterService} from './state/data/matter.service';
import {RelationshipService} from './state/data/relationship.service';
import {StudentService} from './state/data/student.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {TeacherService} from './state/data/teacher.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    BrowserAnimationsModule,
    SummaryModule,
    ToolbarModule
  ],
  providers: [
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(
    studentService: StudentService,
    classService: ClassService,
    degreeService: DegreeService,
    teacherService: TeacherService,
    relationShipService: RelationshipService,
    matterService: MatterService,
  ) {
    studentService.getAll();
    classService.getAll();
    degreeService.getAll();
    teacherService.getAll();
    relationShipService.getAll();
    matterService.getAll();
  }
}
