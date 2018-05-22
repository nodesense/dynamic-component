import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { AppComponent } from './app.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { WebWorkerService } from './services/web-worker.service';
import { ContainerComponent } from './container/container.component';
import { StackLayoutComponent } from './stack-layout/stack-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { HostTemplateDirective } from './directives/host-template.directive';
import { ChartComponent } from './chart/chart.component';
import { ReportComponent } from './report/report.component';
 import { ProgressComponent } from './progress/progress.component';
import { ManualEntryComponent } from './manual-entry/manual-entry.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, 
        MatCheckboxModule, 
        MatDialogModule} from '@angular/material';
 

@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    ContainerComponent,
    StackLayoutComponent,
    GridLayoutComponent,
    TabLayoutComponent,
    HostTemplateDirective,
    ChartComponent,
    ReportComponent,
    ProgressComponent,
    ManualEntryComponent
  ],

  // Component Factory to work to create dynamic components
  entryComponents: [
    StackLayoutComponent,
    GridLayoutComponent,
    TabLayoutComponent,

    MyGridApplicationComponent,
    ChartComponent,
    ReportComponent,
    ProgressComponent,
    ManualEntryComponent
  ], 

  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([MyGridApplicationComponent]),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [WebWorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
