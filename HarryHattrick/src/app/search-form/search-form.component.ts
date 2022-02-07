import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from '../models/Player';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  exportAs: 'ngForm',
})
export class SearchFormComponent implements OnInit {
  
  year:number=0;
  playerList: Player[] = [];

  constructor(private router: Router, private stats: StatsService) { }

  ngOnInit(): void {
    //this.stats.getLeagues();
  }

  //onClickSubmit(data: any) {
  //  this.stats.topGoalScorerByYear(data.year).then(
  //      result =>{
  //      this.playerList = result.response;
  //      this.stats.playerList = result.response;
  //      console.log(this.playerList)
  //        alert("The top scorer in MLS in "+data.year+" was " +this.playerList[0].player.name+", who scored " +this.playerList[0].statistics[0].goals.total+ " goals!")
  //      }
  //    );
    // this.router.navigateByUrl(`viewer/${data.year}`);
  //}
}
