import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {MainService} from "../../services/main.service";

@IonicPage({
    name: "page2",
    segment: "page2"
})
@Component({
    selector: 'page2-home',
    templateUrl: 'page2.html'
})
export class Page2Page implements OnInit{

    constructor(public navCtrl: NavController, public mainService:MainService) {

    }

    public ngOnInit() {
        this.mainService.injectedService.metodoCheFaQualcosaltro();
    }
}
