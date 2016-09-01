import { Component, OnInit } from '@angular/core';
import { HorizonService } from '../../shared/horizon.service';

@Component({
  selector: 'app-lift-stats',
  templateUrl: 'lift-stats.component.html',
  styleUrls: ['lift-stats.component.css']
})
export class LiftStatsComponent implements OnInit {
  title = "Lift Stats"
  totalNumberOfLifts = 0
  totalWeight = "1000 Pounds"
  workouts=[]

  constructor(private horizonService: HorizonService) { }

  ngOnInit() {
    this.horizonService.connect().then(() => {
      this.horizonService.horizon('workouts').watch().subscribe((result) => {
        this.workouts = result;
        this.totalNumberOfLifts = this.workouts.length
      }, (error) => console.error(error), () => console.log('Results fetched'));
    });
  }

}
