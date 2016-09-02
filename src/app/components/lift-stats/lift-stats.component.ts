import { Component, OnInit } from '@angular/core';
import { HorizonService } from '../../shared/horizon.service';
import { AddLiftComponent } from '../add-lift/add-lift.component'

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
  workouts=[]
  lifted: number
  liftedArray=[]

  constructor(private horizonService: HorizonService) { }

  ngOnInit() {
    this.horizonService.connect().then(() => {
      this.horizonService.horizon('workouts').watch().subscribe((result) => {
        this.workouts = result;
        this.totalNumberOfLifts = this.workouts.length
        this.liftedArray = []
        this.workouts.forEach((workout) => {
          workout.lifts.forEach((lift) => {
            lift.sets.map((set) => {
              this.lifted = set.reps * set.weight
              this.liftedArray.push(this.lifted);
            })
          })
        })
        
        this.liftedArray.reduce((prev, curr) => {
          return this.totalWeightLifted = prev + curr
        })
        
      }, (error) => console.error(error), () => console.log('Results fetched'));
    });  
  }
}
