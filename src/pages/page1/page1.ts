import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {MainService} from "../../services/main.service";

@IonicPage({
    name: "page1",
    segment: "page1"
})
@Component({
    selector: 'page1-home',
    templateUrl: 'page1.html'
})
export class Page1Page {

    constructor(public navCtrl: NavController, public mainService:MainService) {

    }

    public push() {
        this.mainService.injectedService.metodoCheFaQualcosaltro();
        this.navCtrl.push("page2");
    }
}
