import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  // @ViewChild('url') url;
  // name;
  // date:String;
  constructor(private fire:AngularFireAuth,private db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    // this.name=fire.auth.currentUser.email;
    // this.date=new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  // upload(){
  //    this.db.list('reactors').push({
  //     Name:this.name,
  //     Url:"http"
  //     // Description:'This is a testing post. This post contains a testing image',
  //     // Date:this.date
  //    });
  // }
}
