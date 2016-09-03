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
  
  deleteWorkout(workoutId) {
    this.horizonService.horizon('workouts').remove(workoutId)
  }

  constructor(private horizonService: HorizonService) { }
  ngOnInit() {
    this.horizonService.connect().then(() => {
      this.horizonService.horizon('workouts').watch().subscribe((result) => {
        this.workouts = result;
      }, (error) => console.error(error), () => console.log('Results fetched'));
    });
  }
}
