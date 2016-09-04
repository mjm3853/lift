import { Component, OnInit } from '@angular/core';
import { HorizonService } from '../../shared/horizon.service';
import { WorkoutStore } from '../../shared/lift.store';
 
@Component({
  selector: 'app-add-lift',
  templateUrl: 'add-lift.component.html',
  styleUrls: ['add-lift.component.css']
})
export class AddLiftComponent implements OnInit {
  title = "Add Lift"

  addLift() {
    this.horizonService.horizon('workouts').store(this.store.workout);
    this.reset();
  }

  plusSet(key) {
    this.store.plusSet(key)
  }
  
  minusSet(key) {
    this.store.minusSet(key)
  }

  plusLift() {
    this.store.plusLift()
  }
  
  minusLift() {
   this.store.minusLift()
  }

  reset() {
    this.store.reset()
  }

  constructor(private horizonService: HorizonService, private store: WorkoutStore) { }

  ngOnInit() {
    
  }

}
