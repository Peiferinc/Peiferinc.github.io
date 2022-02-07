import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsService } from '../services/stats.service'; 
import { Player } from '../models/Player';
import { League } from '../models/League';
import * as LeagueCollection from '../LeagueCollection/LeagueCollection.json';
import * as leagueList from '../LeagueCollection/LeagueList.json';
import * as BingeList from '../LeagueCollection/BingeList.json';
import { Binge } from '../models/Binge';


@Component({
  selector: 'app-binge-viewer',
  templateUrl: './binge-viewer.component.html',
  styleUrls: ['./binge-viewer.component.css']
})
export class BingeViewerComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, private stats: StatsService , private router: Router) { }
  currentBinge: Binge = {
    icon : "",
    length : 0,
    name : "",
    nickname : "",
  };
  leagueid = 0;
  year = 2021;
  bingeid = 0;
/*  leagues: League[] = allLeagues;*/
  leagueList: any = (LeagueCollection as any).default;
  bingeList: Binge [] = (BingeList as unknown as Binge[]);
  players : Player[] = [];

  ngOnInit(): void {
    console.log("bingeviewer invoked")
    this.players = this.stats.playerList;
    this.currentBinge = this.bingeList[0];
    console.log(this.bingeList);
    console.log(this.bingeList[0].name);
  }

  onClickSubmit(data: any) {
    this.stats.topGoalScorerByYear(data.year, data.leagueId).then(
      result => {
        this.players = result.response;
        this.stats.playerList = result.response;
      }
    );

    // this.router.navigateByUrl(`viewer/${data.year}`);
  }
  getRatio(player: Player): number {
    return player.statistics[0].goals.total / player.statistics[0].games.minutes*90;
  }
  hattricksPer(player: Player): number {
    return player.statistics[0].goals.total / player.statistics[0].games.minutes / 3* this.currentBinge.length

  }
}
