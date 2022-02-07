import { Component, OnInit } from '@angular/core';
import { Player } from '../models/Player';
import { StatsService } from '../services/stats.service'; 
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor(private stats: StatsService) { }

  year:number=0;
  playerList: Player[] = [];

  ngOnInit(): void {
    console.log("in the ngoninit")
  }
}
