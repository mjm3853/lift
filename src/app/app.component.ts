import { Component } from '@angular/core';
import { HorizonService } from './shared/horizon.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HorizonService]
})
export class AppComponent {
  title = 'Lift App';   
}
