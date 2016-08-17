import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlanComponent } from './components/plan/plan.component';
import { LiftLogComponent } from './components/lift-log/lift-log.component';
import { AddLiftComponent } from './components/add-lift/add-lift.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlanComponent,
    LiftLogComponent,
    AddLiftComponent
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
