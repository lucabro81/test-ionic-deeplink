import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {MainService} from "../../services/main.service";

@IonicPage({
    name: "home",
    segment: "home"
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public mainService:MainService) {

  }

  public push() {
      this.mainService.injectedService.metodoCheFaQualcosaltro();
      this.navCtrl.push("page1");
  }

}
