import { NewPostPage } from './../new-post/new-post';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }
  //doClick(){}

  hi(){
    this.navCtrl.push(NewPostPage);
  }
}
