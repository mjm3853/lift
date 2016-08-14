import { Component, OnInit } from '@angular/core';
import { HorizonService } from './horizon.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HorizonService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  list = [];
  constructor(private horizonService: HorizonService) {}
  ngOnInit() {    
    this.horizonService.connect().then(()=> {      
      this.horizonService.horizon('lifts').watch().subscribe((result)=> {
        console.log('result', result);
        this.list = result; 
      });      
    });    
  }     
}
