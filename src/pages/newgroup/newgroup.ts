import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { JoingroupPage } from '../joingroup/joingroup';
/**
 * Generated class for the NewgroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newgroup',
  templateUrl: 'newgroup.html',
})
export class NewgroupPage {
  @ViewChild('groupname') Name;
  username;
  constructor(private fire:AngularFireAuth,private db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewgroupPage');
  }
  join(){
     this.navCtrl.push(JoingroupPage);
  }
  
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  create(){
    this.username=this.fire.auth.currentUser.email;
    //console.log(this.username);
    this.db.list('groups').push({
      Name:this.Name.value,
      Owner:this.username,
      participants:this.username
      //message: `${this.username} has joined the room`
    }); 
     
    
    this.db.list('users', ref => ref.orderByChild('name').equalTo(this.username)).snapshotChanges()
    .subscribe(actions => {
        actions.forEach(action => {
          // here you get the key
         // console.log(action.key);
          
          this.db.list('users').update(action.key, { group: this.Name.value });
        });
    });
    this.alert("Your group is Created");
  }
}