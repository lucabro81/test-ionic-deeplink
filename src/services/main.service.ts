import {Injectable} from "@angular/core";
import {InjectedService} from "./Injected.service";

@Injectable()
export class MainService {

    constructor(public injectedService:InjectedService) {

    }

    public metodoCheFaQualcosa() {
        console.log("metodo che fa qualcosa");
    }

}