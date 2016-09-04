import { Component } from '@angular/core';
import { HorizonService } from './shared/horizon.service';
import { WorkoutStore } from './shared/lift.store';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HorizonService, WorkoutStore]
})
export class AppComponent {
  title = 'Lift App';   
}
