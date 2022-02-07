import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }
  playerList: Player[] = []

  topGoalScorerByYear(year: number, leagueId: number) :Promise<any>{
  
  let url = "https://v3.football.api-sports.io/players/topscorers?season="+year+"&league="+leagueId;
    const headerDict = {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "66f3ef45fecf0830d8d9e366f56ffb5c"
      }
      const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
      };
      
    return this.http.get<any>(url, requestOptions).toPromise();
  }

getLeagues(){
    fetch("https://v3.football.api-sports.io/leagues?id=253", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "66f3ef45fecf0830d8d9e366f56ffb5c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
  }

  getTopGoalscorer(): number{
    
    fetch("https://v3.football.api-sports.io/players/topscorers?season=2018&league=253", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "66f3ef45fecf0830d8d9e366f56ffb5c"
	}
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
  return 0;
  }
}
