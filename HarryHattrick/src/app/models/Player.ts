// Generated by https://quicktype.io

export interface Player {
    player:     PlayerClass;
    statistics: Statistic[];
}

export interface PlayerClass {
    id:          number;
    name:        string;
    firstname:   string;
    lastname:    string;
    age:         number;
    birth:       Birth;
    nationality: string;
    height:      null | string;
    weight:      null | string;
    injured:     boolean;
    photo:       string;
}

export interface Birth {
    date:    string;
    place:   string;
    country: string;
}

export interface Statistic {
    team:        Team;
    league:      League;
    games:       Games;
    substitutes: Substitutes;
    shots:       Shots;
    goals:       Goals;
    passes:      Passes;
    tackles:     Tackles;
    duels:       Duels;
    dribbles:    Dribbles;
    fouls:       Fouls;
    cards:       Cards;
    penalty:     Penalty;
}

export interface Cards {
    yellow:    number;
    yellowred: number;
    red:       number;
}

export interface Dribbles {
    attempts: number;
    success:  number;
    past:     null;
}

export interface Duels {
    total: number;
    won:   number;
}

export interface Fouls {
    drawn:     number;
    committed: number;
}

export interface Games {
    appearences: number;
    lineups:     number;
    minutes:     number;
    number:      null;
    position:    Position;
    rating:      string;
    captain:     boolean;
}

export enum Position {
    Attacker = "Attacker",
    Midfielder = "Midfielder",
}

export interface Goals {
    total:    number;
    conceded: number;
    assists:  number | null;
    saves:    null;
}

export interface League {
    id:      number;
    name:    Name;
    country: Country;
    logo:    string;
    flag:    string;
    season:  number;
}

export enum Country {
    Usa = "USA",
}

export enum Name {
    MajorLeagueSoccer = "Major League Soccer",
}

export interface Passes {
    total:    number;
    key:      number;
    accuracy: number;
}

export interface Penalty {
    won:      number | null;
    commited: null;
    scored:   number;
    missed:   number;
    saved:    null;
}

export interface Shots {
    total: number;
    on:    number;
}

export interface Substitutes {
    in:    number;
    out:   number;
    bench: number;
}

export interface Tackles {
    total:         number;
    blocks:        number;
    interceptions: number;
}

export interface Team {
    id:   number;
    name: string;
    logo: string;
}
