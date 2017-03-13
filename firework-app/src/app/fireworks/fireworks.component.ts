import { Component, OnInit } from '@angular/core';
import { FireworksService } from '../shared/fireworks.service';

@Component({
  selector: 'app-fireworks',
  templateUrl: './fireworks.component.html',
  styleUrls: ['./fireworks.component.css']
})
export class FireworksComponent implements OnInit {

  constructor(private fireworksService: FireworksService) { }
  
  fireworks = []

  ngOnInit() {
    this.fireworksService.getFireworks().
    subscribe(fireworks => this.fireworks = fireworks)
  }

}
