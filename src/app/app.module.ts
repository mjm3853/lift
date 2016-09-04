import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LiftLogComponent } from './components/lift-log/lift-log.component';
import { AddLiftComponent } from './components/add-lift/add-lift.component';
import { LiftStatsComponent } from './components/lift-stats/lift-stats.component';
import { AddLiftTypeComponent } from './components/add-lift-type/add-lift-type.component';

@NgModule({
  declarations: [
    AppComponent,
    LiftLogComponent,
    AddLiftComponent,
    LiftStatsComponent,
    AddLiftTypeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
