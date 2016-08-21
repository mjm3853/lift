import { Component, OnInit } from '@angular/core';
import { HorizonService } from '../../shared/horizon.service';

@Component({
  selector: 'app-add-lift',
  templateUrl: 'add-lift.component.html',
  styleUrls: ['add-lift.component.css']
})
export class AddLiftComponent implements OnInit {
  title = "Add Lift"
  weightTypes = ["Pounds"]
  liftModel = {
    name: "New Workout",
    timestamp: new Date(),
    lifts: [{
      name: "New Lift",
      sets: [{
        reps: 0,
        weight: 0,
        weightType: this.weightTypes
      }]
    }]
  }

  addLift() {
    this.horizonService.horizon('workouts').store(this.liftModel);
  }

  plusSet(key) {
    console.log(key);
    this.liftModel.lifts[key].sets.push({
      reps: 0,
      weight: 0,
      weightType: this.weightTypes
    });
  }

  plusLift() {
    this.liftModel.lifts.push({
      name: "Next Lift",
      sets: [{
        reps: 0,
        weight: 0,
        weightType: this.weightTypes
      }]
    })
  }

  reset() {
    this.liftModel = {
      name: "New Workout",
      timestamp: new Date(),
      lifts: [{
        name: "New Lift",
        sets: [{
          reps: 0,
          weight: 0,
          weightType: this.weightTypes
        }]
      }]
    }
  }

  constructor(private horizonService: HorizonService) { }

  ngOnInit() {
  }

}
