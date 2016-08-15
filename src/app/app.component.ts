import { Component, OnInit } from '@angular/core';
import { HorizonService } from './shared/horizon.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HorizonService]
})
export class AppComponent implements OnInit {
  title = 'Lift App';
  users = [];
  constructor(private horizonService: HorizonService) {}
  ngOnInit() {    
    this.horizonService.connect().then(()=> {      
      this.horizonService.horizon('users').watch().subscribe((result)=> {
        console.log('result', result);
        this.users = result; 
      });      
    });    
  }     
}