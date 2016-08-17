import { Component, OnInit } from '@angular/core';
import { HorizonService } from '../../shared/horizon.service';

@Component({
  selector: 'app-add-lift',
  templateUrl: 'add-lift.component.html',
  styleUrls: ['add-lift.component.css']
})
export class AddLiftComponent implements OnInit {
  title = "Add Lift"
  autoLift = {
    name: "Auto Workout Test",
    timestamp: new Date(),
    lifts: [{
      name: "Curls",
      sets: [{
        reps: 10,
        weight: 25,
        weightType: "Pounds"
      }, {
          reps: 12,
          weight: 25,
          weightType: "Pounds"
        }]
    }, {
        name: "Shoulder Presses",
        sets: [{
          reps: 10,
          weight: 25,
          weightType: "Pounds"
        }, {
            reps: 12,
            weight: 25,
            weightType: "Pounds"
          }]
      }]
  }
  
  addLift() {
    this.horizonService.horizon('workouts').store(this.autoLift);
  }
  
  constructor(private horizonService: HorizonService) { }
  
  

  ngOnInit() {
  }

}
