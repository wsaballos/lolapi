import {Pipe} from "angular2/core";
import {HttpService} from "./http.service";

@Pipe ({
    name: "jsonsort"
})
    export class JsonSort {
        response: string;
        constructor(private _httpService: HttpService) {}

        onGetChamp(champion: Champion) {
            this.selectedChampion = champion;
            this._httpService.getChamp()

            .subscribe(
                response => this.response = response.data.Annie.title,
                error => console.log(error)
                return 'http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion' + response
            )


        }
    }

}
