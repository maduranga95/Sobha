//import { dateValueRange } from 'ionic-angular/umd/util/datetime-util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
//import { Observable, Subject } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
/**
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})

export class LeaderboardPage {
  // username: string = '';
  photocount: number =0;
  s;
  users: object[]=[];
  sortedUsers: object[]=[];

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    // let email =<string>(firebase.auth().currentUser.email);
    // this.username = (email.split('@'))[0];
    //console.log(this.username); 
    this.s = this.db.list('/users').valueChanges().subscribe(data => {
      //console.log(data);
      this.users =[];
      data.map(elem =>{
        this.users.push(elem);
        //console.log(this.users);
      })

      this.users.sort((a,b): number =>{
        if (a['photocount'] < b['photocount']) return -1;
        if (a['photocount'] > b['photocount']) return 1;
      return 0;
      });
      //console.log(this.users);
      this.users.reverse();
      // var i;
      // for(i in this.users){
      //   this.sortedUsers.push(i['name']);
      // }
      // console.log(this.sortedUsers);
    }); 
    // this.sortedUsers = this.users.sort((n1, n2) => n1[2] - n2[2]);
    //console.log(this.users);
   }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LeaderboardPage');
  }

}


