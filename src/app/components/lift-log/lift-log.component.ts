import { Component, OnInit } from '@angular/core';
import { HorizonService } from '../../shared/horizon.service';

@Component({
  selector: 'app-lift-log',
  templateUrl: 'lift-log.component.html',
  styleUrls: ['lift-log.component.css']
})
export class LiftLogComponent implements OnInit {
  title = "Lift Log";
  workouts = [];

  constructor(private horizonService: HorizonService) { }
  ngOnInit() {
    this.horizonService.connect().then(() => {
      this.horizonService.horizon('workouts').watch().subscribe((result) => {
        console.log('result', result);
        this.workouts = result;
      });
    });
  }
}
