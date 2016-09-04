import { Component, OnInit } from '@angular/core';
import { WorkoutStore } from '../../shared/lift.store';

@Component({
  selector: 'app-add-lift-type',
  templateUrl: 'add-lift-type.component.html',
  styleUrls: ['add-lift-type.component.css']
})
export class AddLiftTypeComponent implements OnInit {
  title = 'Add Lift Type'
  
  addLiftType(liftTypeName) {
    console.log(liftTypeName)
  }

  constructor(private store: WorkoutStore) { }

  ngOnInit() {
  }

}
