import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
//import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

import { NewgroupPage } from '../newgroup/newgroup';
import { OldgroupPage } from '../oldgroup/oldgroup';
/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  people:Observable<any[]>;
  groupname: string='';

  constructor(public alertCtrl: AlertController,private db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,private fire:AngularFireAuth) {
   // console.log(fire.auth.currentUser.email);
  //  this.db.list('users', ref => ref.orderByChild('name').equalTo(fire.auth.currentUser.email)).snapshotChanges()
  //  .subscribe(actions => {
  //      actions.forEach(action => {
  //        // here you get the key
  //       // console.log(action.key);
  //        this.db.list('users').update(action.key, { group: this.Name.value });
  //      });
  //  });
    this.people=this.db.list('/users').valueChanges();
    
    this.people.forEach(element => {
      element.forEach(entry=>{
        if(entry.name==fire.auth.currentUser.email){
                // this.groupname=entry.group;
                 if(entry.group=='null'){ 
                  this.alert("You are NOT in a group currently");
                  this.navCtrl.setRoot(NewgroupPage);
                 }else{
                  
                  this.navCtrl.setRoot(OldgroupPage,{
                    mygroup:entry.group
                  });
                 }
                //this.navCtrl.setRoot(NewgroupPage);
                 //console.log(this.groupname);
        }
        
      });
    }); 
    //this.checker();
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }
  // checker(){
  //   console.log(this.groupname);
  //   if(this.groupname=='null'){
      
  //   }else{
      
  //   }
  // } 
  
}
