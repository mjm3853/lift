import { Component, OnInit } from '@angular/core';
import { HorizonService } from '../../shared/horizon.service';


@Component({
  selector: 'app-plan',
  templateUrl: 'plan.component.html',
  styleUrls: ['plan.component.css'],
  providers: [HorizonService]
})
export class PlanComponent implements OnInit {
  title = "Plan"
  plans = [];
  constructor(private horizonService: HorizonService) { }
  ngOnInit() {
    this.horizonService.connect().then(() => {
      this.horizonService.horizon('workouts').watch().subscribe((result) => {
        console.log('result', result);
        this.plans = result;
      });
    });
  }
}