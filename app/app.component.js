System.register(['angular2/core', "./http.service", "./sort-pipe", "./jsonsort.pipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_service_1, sort_pipe_1, jsonsort_pipe_1;
    var AppComponent, CHAMPIONS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (sort_pipe_1_1) {
                sort_pipe_1 = sort_pipe_1_1;
            },
            function (jsonsort_pipe_1_1) {
                jsonsort_pipe_1 = jsonsort_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_httpService) {
                    this._httpService = _httpService;
                    this.title = 'League of Legends Champions';
                    this.Champions = CHAMPIONS;
                }
                AppComponent.prototype.onPassive = function (passive) { this.selectedPassive = passive; };
                AppComponent.prototype.onAbility_q = function (ability_q) { this.selectedAbility_q = ability_q; };
                AppComponent.prototype.onAbility_e = function (ability_e) { this.selectedAbility_e = ability_e; };
                AppComponent.prototype.onAbility_w = function (ability_w) { this.selectedAbility_w = ability_w; };
                AppComponent.prototype.onAbility_r = function (ability_r) { this.selectedAbility_r = ability_r; };
                AppComponent.prototype.onGetChamp = function (champion) {
                    var _this = this;
                    this.selectedChampion = champion;
                    this._httpService.getChamp()
                        .subscribe(function (response) { return _this.response = Object(response.data); }, function (error) { return console.log(error); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        pipes: [sort_pipe_1.SortPipe, jsonsort_pipe_1.JsonSort],
                        providers: [http_service_1.HttpService],
                        template: "\n        <h1>{{title}}</h1>\n        <div *ngIf=\"selectedChampion\">\n            <h2>{{selectedChampion.name}}</h2>\n            <div><label>Game: </label>{{selectedChampion.game}}</div>\n            <div><label>Release Year: </label>{{selectedChampion.yr}}</div>\n            <div><label>Publisher: </label>{{selectedChampion.subname}}</div>\n            <div>\n                <h2>Abilities:</h2>\n                                <!----PASSIVE---->\n                <div #passive (click)=\"onPassive(passive)\">\n                    {{selectedChampion.passive}}\n                </div>\n                <div *ngIf=\"selectedPassive\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/{{selectedChampion.video}}?autoplay=1&start={{selectedChampion.passive_start}}&end={{selectedChampion.passive_end}}\" frameborder=\"0\" allowfullscreen></iframe>\n                </div>\n                                <!----Q---->\n                <div #ability_q (click)=\"onAbility_q(ability_q)\">\n                    {{selectedChampion.ability_q}}\n                </div>\n                <div *ngIf=\"selectedAbility_q\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/{{selectedChampion.video}}?autoplay=1&start={{selectedChampion.ability_q_start}}&end={{selectedChampion.ability_q_end}}\" frameborder=\"0\" allowfullscreen></iframe>\n                </div>\n                                <!----W---->\n                <div #ability_w (click)=\"onAbility_w(ability_w)\">\n                    {{selectedChampion.ability_w}}\n                </div>\n                <div *ngIf=\"selectedAbility_w\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/{{selectedChampion.video}}?autoplay=1&start={{selectedChampion.ability_w_start}}&end={{selectedChampion.ability_w_end}}\" frameborder=\"0\" allowfullscreen></iframe>\n                </div>\n                                <!----E---->\n                <div #ability_e (click)=\"onAbility_e(ability_e)\">\n                    {{selectedChampion.ability_e}}\n                </div>\n                <div *ngIf=\"selectedAbility_e\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/{{selectedChampion.video}}?autoplay=1&start={{selectedChampion.ability_e_start}}&end={{selectedChampion.ability_e_end}}\" frameborder=\"0\" allowfullscreen></iframe>\n                </div>\n                                <!----R---->\n                <div #ability_r (click)=\"onAbility_r(ability_r)\">\n                    {{selectedChampion.ability_r}}\n                </div>\n                <div *ngIf=\"selectedAbility_r\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/{{selectedChampion.video}}?autoplay=1&start={{selectedChampion.ability_r_start}}&end={{selectedChampion.ability_r_end}}\" frameborder=\"0\" allowfullscreen></iframe>\n                </div>\n            </div>\n            <div class=\"champion-img\" style=\"background: url({{selectedChampion.image}}) no-repeat center center; background-size: contain;\"></div>\n            <div>\n                <label>name: </label>\n                <div><input [(ngModel)]=\"selectedChampion.name\" placeholder=\"name\"></div>\n            </div>\n            <img [src]=\"response\"/>\n        </div>\n        <ul class=\"champion\">\n            <li *ngFor=\"#champion of Champions | alphasort\" [class.selected]=\"champion === selectedChampion\" (click)=\"onGetChamp(champion)\">\n                <span class=\"badge\">{{champion.yr}}</span> {{champion.name}}\n            </li>\n        </ul>\n        <ul class=\"jsonchamps\">\n            <li *ngFor=\"#champs of response | json\">\n                <span class=\"badge\"></span> {{ response }}\n            </li>\n        </ul>\n        ",
                        styles: [
                            "\n        .champion-img {\n            height: 120px;\n            background-size: contain;\n        }\n        .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n        }\n        .champion {\n            margin: 0 0 2em 0;\n            list-style-type: none;\n            padding: 0;\n            width: 15em;\n        }\n        .champion li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0em;\n            height: 1.6em;\n            border-radius: 4px;\n        }\n        .champion li.selected:hover {\n            color: white;\n        }\n        .champion li:hover {\n            color: #607D8B;\n            background-color: #EEE;\n            left: .1em;\n        }\n        .champion .text {\n            position: relative;\n            top: -3px;\n        }\n        .champion .badge {\n            display: inline-block;\n            font-size: small;\n            color: white;\n            padding: 0.8em 0.7em 0em 0.7em;\n            background-color: #607D8B;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 1.8em;\n            margin-right: .8em;\n            border-radius: 4px 0px 0px 4px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            CHAMPIONS = [
                { "yr": 2014,
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
                { "yr": 1991,
                    "name": "Chun Li",
                    "subname": "Capcom",
                    "image": "assets/chunli.gif",
                    "passive": "shurima's legacy",
                    "ability_q": "conquering sands",
                    "ability_w": "arise!",
                    "ability_e": "shifting sands",
                    "ultimate": "emperor's devide"
                },
                { "yr": 1994,
                    "name": "Gouki",
                    "subname": "Capcom",
                    "image": "assets/gouki.gif",
                    "passive": "shurima's legacy",
                    "ability_q": "conquering sands",
                    "ability_w": "arise!",
                    "ability_e": "shifting sands",
                    "ultimate": "emperor's devide"
                },
                { "yr": 1987,
                    "name": "Ken",
                    "subname": "Capcom",
                    "image": "assets/ken.gif",
                    "passive": "shurima's legacy",
                    "ability_q": "conquering sands",
                    "ability_w": "arise!",
                    "ability_e": "shifting sands",
                    "ultimate": "emperor's devide"
                },
                { "yr": 1995,
                    "name": "Crono",
                    "subname": "SquareSoft",
                    "image": "assets/chrono.gif",
                    "passive": "shurima's legacy",
                    "ability_q": "conquering sands",
                    "ability_w": "arise!",
                    "ability_e": "shifting sands",
                    "ultimate": "emperor's devide"
                },
                { "yr": 1987,
                    "name": "Rockman",
                    "subname": "Capcom",
                    "image": "assets/rockman.gif",
                    "passive": "shurima's legacy",
                    "ability_q": "conquering sands",
                    "ability_w": "arise!",
                    "ability_e": "shifting sands",
                    "ultimate": "emperor's devide"
                },
                { "yr": 1993,
                    "name": "Zero",
                    "subname": "Capcom",
                    "image": "assets/zero.gif",
                    "passive": "shurima's legacy",
                    "ability_q": "conquering sands",
                    "ability_w": "arise!",
                    "ability_e": "shifting sands",
                    "ultimate": "emperor's devide"
                },
                { "yr": 1996,
                    "name": "Snorlax",
                    "subname": "Nintendo",
                    "image": "assets/snorlax.gif",
                    "passive": "shurima's legacy",
                    "ability_q": "conquering sands",
                    "ability_w": "arise!",
                    "ability_e": "shifting sands",
                    "ultimate": "emperor's devide"
                },
                { "yr": 1996,
                    "name": "Hulk",
                    "subname": "Capcom",
                    "image": "assets/hulk.gif",
                    "passive": "shurima's legacy",
                    "ability_q": "conquering sands",
                    "ability_w": "arise!",
                    "ability_e": "shifting sands",
                    "ultimate": "emperor's devide"
                },
                { "yr": 1987,
                    "name": "Ryu",
                    "subname": "Capcom",
                    "image": "assets/ryu.gif",
                    "passive": "shurima's legacy",
                    "ability_q": "conquering sands",
                    "ability_w": "arise!",
                    "ability_e": "shifting sands",
                    "ultimate": "emperor's devide"
                },
                { "yr": 1995,
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
        }
    }
});
//# sourceMappingURL=app.component.js.map