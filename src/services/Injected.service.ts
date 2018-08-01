import {Injectable} from "@angular/core";

@Injectable()
export class InjectedService {

    constructor() {

    }

    public metodoCheFaQualcosaltro() {
        console.log("metodo che fa qualcos'altro");
    }
}