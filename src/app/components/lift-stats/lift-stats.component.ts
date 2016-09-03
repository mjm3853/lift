import { Component, OnInit } from '@angular/core';
import { HorizonService } from '../../shared/horizon.service';

@Component({
  selector: 'app-lift-stats',
  templateUrl: 'lift-stats.component.html',
  styleUrls: ['lift-stats.component.css']
})
export class LiftStatsComponent implements OnInit {
  title = "Lift Stats"
  totalNumberOfLifts: number
  totalWeightLifted: any
  testValue: any
  workouts = []
  lifted: number
  liftedArray = []

  evaluateAllWorkoutsForTotalLifted(workouts) {
    workouts.forEach((workout) => {
      this.evaluateEachWorkoutForTotalLifted(workout)
    })
  }

  evaluateEachWorkoutForTotalLifted(workout) {
    workout.lifts.forEach((lift) => {
      this.evaluateEachLiftForTotalLifted(lift)
    })
  }

  evaluateEachLiftForTotalLifted(lift) {
    lift.sets.map((set) => {
      this.updateLiftedArray(set)
    })
  }

  updateLiftedArray(set) {
    this.lifted = set.reps * set.weight
    this.liftedArray.push(this.lifted);
  }

  processLiftedArray(liftedArray) {
    liftedArray.reduce((prev, curr) => {
      return this.totalWeightLifted = prev + curr
    })
  }

  constructor(private horizonService: HorizonService) { }

  ngOnInit() {
    this.horizonService.connect().then(() => {
      this.horizonService.horizon('workouts').watch().subscribe((result) => {
        this.workouts = result;
        this.totalNumberOfLifts = this.workouts.length
        this.liftedArray = []

        this.evaluateAllWorkoutsForTotalLifted(this.workouts);
        this.processLiftedArray(this.liftedArray);

      }, (error) => console.error(error), () => console.log('Results fetched'));
    });
  }
}
