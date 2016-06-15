System.register(["angular2/core", "./http.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_service_1;
    var JsonSort;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            JsonSort = (function () {
                function JsonSort(_httpService) {
                    this._httpService = _httpService;
                }
                JsonSort.prototype.onGetChamp = function (champion) {
                    var _this = this;
                    this.selectedChampion = champion;
                    this._httpService.getChamp()
                        .subscribe(function (response) { return _this.response = response.data.Annie.title; }, function (error) { return console.log(error); });
                    return 'http://ddragon.leagueoflegends.com/cdn/6.4.1/img/champion' + response;
                };
                JsonSort = __decorate([
                    core_1.Pipe({
                        name: "jsonsort"
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], JsonSort);
                return JsonSort;
            })();
            exports_1("JsonSort", JsonSort);
        }
    }
});
//# sourceMappingURL=jsonsort.pipe.js.map