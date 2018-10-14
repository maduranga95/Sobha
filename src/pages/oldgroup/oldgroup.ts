import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { Groupdetails2Page } from '../groupdetails2/groupdetails2';
//import { AngularFireDatabase } from '@angular/fire/database';
/**
 * Generated class for the OldgroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oldgroup',
  templateUrl: 'oldgroup.html',
})
export class OldgroupPage {
  mygroup: string="NO";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mygroup=navParams.get('mygroup');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OldgroupPage');
  }

  openChat(){
    this.navCtrl.push(ChatPage,{
      groupName:this.mygroup
    })
  }

  view(){
    this.navCtrl.push(Groupdetails2Page,{
      groupName:this.mygroup
    });
  }
     
}
