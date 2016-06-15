import {Component} from 'angular2/core';
import {HttpService} from "./http.service";
import {SortPipe} from "./sort-pipe";
import {JsonSort} from "./jsonsort.pipe";




@Component({
    selector: 'my-app',
    pipes: [SortPipe, JsonSort],
    providers: [HttpService],
    template: `
        <h1>{{title}}</h1>
        <div *ngIf="selectedChampion">
            <h2>{{selectedChampion.name}}</h2>
            <div><label>Game: </label>{{selectedChampion.game}}</div>
            <div><label>Release Year: </label>{{selectedChampion.yr}}</div>
            <div><label>Publisher: </label>{{selectedChampion.subname}}</div>
            <div>
                <h2>Abilities:</h2>
                                <!----PASSIVE---->
                <div #passive (click)="onPassive(passive)">
                    {{selectedChampion.passive}}
                </div>
                <div *ngIf="selectedPassive">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/{{selectedChampion.video}}?autoplay=1&start={{selectedChampion.passive_start}}&end={{selectedChampion.passive_end}}" frameborder="0" allowfullscreen></iframe>
                </div>
                                <!----Q---->
                <div #ability_q (click)="onAbility_q(ability_q)">
                    {{selectedChampion.ability_q}}
                </div>
                <div *ngIf="selectedAbility_q">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/{{selectedChampion.video}}?autoplay=1&start={{selectedChampion.ability_q_start}}&end={{selectedChampion.ability_q_end}}" frameborder="0" allowfullscreen></iframe>
                </div>
                                <!----W---->
                <div #ability_w (click)="onAbility_w(ability_w)">
                    {{selectedChampion.ability_w}}
                </div>
                <div *ngIf="selectedAbility_w">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/{{selectedChampion.video}}?autoplay=1&start={{selectedChampion.ability_w_start}}&end={{selectedChampion.ability_w_end}}" frameborder="0" allowfullscreen></iframe>
                </div>
                                <!----E---->
                <div #ability_e (click)="onAbility_e(ability_e)">
                    {{selectedChampion.ability_e}}
                </div>
                <div *ngIf="selectedAbility_e">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/{{selectedChampion.video}}?autoplay=1&start={{selectedChampion.ability_e_start}}&end={{selectedChampion.ability_e_end}}" frameborder="0" allowfullscreen></iframe>
                </div>
                                <!----R---->
                <div #ability_r (click)="onAbility_r(ability_r)">
                    {{selectedChampion.ability_r}}
                </div>
                <div *ngIf="selectedAbility_r">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/{{selectedChampion.video}}?autoplay=1&start={{selectedChampion.ability_r_start}}&end={{selectedChampion.ability_r_end}}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="champion-img" style="background: url({{selectedChampion.image}}) no-repeat center center; background-size: contain;"></div>
            <div>
                <label>name: </label>
                <div><input [(ngModel)]="selectedChampion.name" placeholder="name"></div>
            </div>
            <img [src]="response"/>
        </div>
        <ul class="champion">
            <li *ngFor="#champion of Champions | alphasort" [class.selected]="champion === selectedChampion" (click)="onGetChamp(champion)">
                <span class="badge">{{champion.yr}}</span> {{champion.name}}
            </li>
        </ul>
        <ul class="jsonchamps">
            <li *ngFor="#champs of response | json">
                <span class="badge"></span> {{ response }}
            </li>
        </ul>
        `
    styles:[
        `
        .champion-img {
            height: 120px;
            background-size: contain;
        }
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .champion {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .champion li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0em;
            height: 1.6em;
            border-radius: 4px;
        }
        .champion li.selected:hover {
            color: white;
        }
        .champion li:hover {
            color: #607D8B;
            background-color: #EEE;
            left: .1em;
        }
        .champion .text {
            position: relative;
            top: -3px;
        }
        .champion .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0em 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0px 0px 4px;
        }
    `]
})

export class AppComponent {
    title = 'League of Legends Champions';
    Champions = CHAMPIONS;
    selectedChampion: Champion;
    selectedPassive: Passive;
    onPassive(passive: Champion) { this.selectedPassive = passive; }
    selectedAbility_q: Ability_q;
    onAbility_q(ability_q: Champion) { this.selectedAbility_q = ability_q; }
    selectedAbility_e: Ability_e;
    onAbility_e(ability_e: Champion) { this.selectedAbility_e = ability_e; }
    selectedAbility_w: Ability_w;
    onAbility_w(ability_w: Champion) { this.selectedAbility_w = ability_w; }
    selectedAbility_r: Ability_r;
    onAbility_r(ability_r: Champion) { this.selectedAbility_r = ability_r; }

    response: string;
    constructor(private _httpService: HttpService) {}


    onGetChamp(champion: Champion) {
        this.selectedChampion = champion;
        this._httpService.getChamp()

        .subscribe(
            response => this.response =  Object(response.data),
            error => console.log(error)
        )
    }
}


var CHAMPIONS: Champion[] = [
    {   "yr": 2014,
        "name": "Azir",
        "subname": "the Emperor of the Sands",
        "image": "assets/azir.png",
        "passive": "shurima's legacy",
        "video": "zqH4AA-KEgQ",
        "passive_start": 50,
        "passive_end": 96,
        "ability_q": "conquering sands",
        "ability_q_start": 205,
        "ability_q_end": 228,
        "ability_w": "arise!",
        "ability_w_start": 106,
        "ability_w_end": 204,
        "ability_e": "shifting sands",
        "ability_e_start": 234,
        "ability_e_end": 262,
        "ability_r": "emperor's devide",
        "ability_r_start": 268,
        "ability_r_end": 277
    },

    {   "yr": 1991,
        "name": "Chun Li",
        "subname": "Capcom",
        "image": "assets/chunli.gif",
        "passive": "shurima's legacy",
        "ability_q": "conquering sands",
        "ability_w": "arise!",
        "ability_e": "shifting sands",
        "ultimate": "emperor's devide"
    },

    {   "yr": 1994,
        "name": "Gouki",
        "subname": "Capcom",
        "image": "assets/gouki.gif",
        "passive": "shurima's legacy",
        "ability_q": "conquering sands",
        "ability_w": "arise!",
        "ability_e": "shifting sands",
        "ultimate": "emperor's devide"
    },

    {   "yr": 1987,
        "name": "Ken",
        "subname": "Capcom",
        "image": "assets/ken.gif",
        "passive": "shurima's legacy",
        "ability_q": "conquering sands",
        "ability_w": "arise!",
        "ability_e": "shifting sands",
        "ultimate": "emperor's devide"
    },

    {   "yr": 1995,
        "name": "Crono",
        "subname": "SquareSoft",
        "image": "assets/chrono.gif",
        "passive": "shurima's legacy",
        "ability_q": "conquering sands",
        "ability_w": "arise!",
        "ability_e": "shifting sands",
        "ultimate": "emperor's devide"
    },

    {   "yr": 1987,
        "name": "Rockman",
        "subname": "Capcom",
        "image": "assets/rockman.gif",
        "passive": "shurima's legacy",
        "ability_q": "conquering sands",
        "ability_w": "arise!",
        "ability_e": "shifting sands",
        "ultimate": "emperor's devide"
    },

    {   "yr": 1993,
        "name": "Zero",
        "subname": "Capcom",
        "image": "assets/zero.gif",
        "passive": "shurima's legacy",
        "ability_q": "conquering sands",
        "ability_w": "arise!",
        "ability_e": "shifting sands",
        "ultimate": "emperor's devide"
    },

    {   "yr": 1996,
        "name": "Snorlax",
        "subname": "Nintendo",
        "image": "assets/snorlax.gif",
        "passive": "shurima's legacy",
        "ability_q": "conquering sands",
        "ability_w": "arise!",
        "ability_e": "shifting sands",
        "ultimate": "emperor's devide"
    },

    {   "yr": 1996,
        "name": "Hulk",
        "subname": "Capcom",
        "image": "assets/hulk.gif",
        "passive": "shurima's legacy",
        "ability_q": "conquering sands",
        "ability_w": "arise!",
        "ability_e": "shifting sands",
        "ultimate": "emperor's devide"
    },

    {   "yr": 1987,
        "name": "Ryu",
        "subname": "Capcom",
        "image": "assets/ryu.gif",
        "passive": "shurima's legacy",
        "ability_q": "conquering sands",
        "ability_w": "arise!",
        "ability_e": "shifting sands",
        "ultimate": "emperor's devide"
    },

    {   "yr": 1995,
        "name": "Magus",
        "subname": "SquareSoft",
        "image": "assets/magus.gif",
        "passive": "shurima's legacy",
        "ability_q": "conquering sands",
        "ability_w": "arise!",
        "ability_e": "shifting sands",
        "ultimate": "emperor's devide"
    }
];
