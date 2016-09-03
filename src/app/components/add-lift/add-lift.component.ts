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
  liftTypes = ["Dumbbell Shoulder Press", "Dumbbell Bench Press", "Curls", "Push Ups", "Pull Ups"]
  liftModel = {
    name: "New Workout",
    timestamp: new Date(),
    lifts: [{
      name: this.liftTypes[0],
      sets: [{
        reps: 0,
        weight: 0,
        weightType: this.weightTypes[0]
      }]
    }]
  }

  addLift() {
    this.horizonService.horizon('workouts').store(this.liftModel);
    this.reset();
  }

  plusSet(key) {
    this.liftModel.lifts[key].sets.push({
      reps: 0,
      weight: 0,
      weightType: this.weightTypes[0]
    });
  }
  
  minusSet(key) {
    this.liftModel.lifts[key].sets.pop()
  }

  plusLift() {
    this.liftModel.lifts.push({
      name: this.liftTypes[0],
      sets: [{
        reps: 0,
        weight: 0,
        weightType: this.weightTypes[0]
      }]
    })
  }
  
  minusLift() {
   this.liftModel.lifts.pop()
  }

  reset() {
    this.liftModel = {
      name: "New Workout",
      timestamp: new Date(),
      lifts: [{
        name: this.liftTypes[0],
        sets: [{
          reps: 0,
          weight: 0,
          weightType: this.weightTypes[0]
        }]
      }]
    }
  }

  constructor(private horizonService: HorizonService) { }

  ngOnInit() {
  }

}
