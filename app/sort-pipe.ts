import {Pipe} from "angular2/core";

@Pipe ({
    name: "alphasort"
})
export class SortPipe {
    transform(value){
        return value.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
                return 0;
            });
    }
}
