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
    name: "Lift Model",
    timestamp: new Date(),
    lifts: [{
      name: "Curls",
      sets: [{
        reps: 10,
        weight: 25,
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
      reps: 11,
      weight: 12,
      weightType: this.weightTypes
    });
    console.log(this.liftModel);
  }
  
  constructor(private horizonService: HorizonService) { }
  
  

  ngOnInit() {
  }

}
