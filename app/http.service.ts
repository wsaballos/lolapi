import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable ()




export class HttpService {
    constructor (private _http: Http) {}
    getChamp(): Observable<any> {
        return this._http.get('http://ddragon.leagueoflegends.com/cdn/6.4.1/data/en_US/champion.json')
            .map(res => res.json());
    }

}
