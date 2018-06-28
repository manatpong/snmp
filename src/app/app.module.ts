import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCheckboxModule,MatSelectModule,MatIconModule,MatToolbarModule,MatListModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { AttendanceService } from '../services/attendanceService';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TablePaginationExample } from './my-table/my-table.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


export const appRoutes: Routes = [
  {
    path: 'my-table',
    component: TablePaginationExample
  },
  {
    path: 'my-dashboard',
    component: MyDashboardComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    TablePaginationExample,
    MyDashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    HttpModule,
    MatProgressBarModule

  ],
  providers: [
    AttendanceService,
  ],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
