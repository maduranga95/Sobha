import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { GroupdetailsPage } from '../groupdetails/groupdetails';
/**
 * Generated class for the JoingroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-joingroup',
  templateUrl: 'joingroup.html',
})
export class JoingroupPage {
  arr=[]
  constructor(private db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.db.list('groups').valueChanges().subscribe(data=>{
      data.forEach(element => {
        this.arr.push(element['Name']);
      });
        
    });
    console.log(this.arr);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoingroupPage');
  }
  view(i){
    //this.db.list('groups')
    //console.log(this.arr[i]);
    this.navCtrl.push(GroupdetailsPage,{
      groupName:this.arr[i]
    });
    // this.db.list('groups', ref => ref.orderByChild('Name').equalTo(this.arr[i])).snapshotChanges()
    // .subscribe(actions => {
    //     actions.forEach(action => {
    //       // here you get the key
    //      // console.log(action.key);
    //       action.forEach()
    //       //this.db.list('users').update(action.key, { group: this.Name.value });
    //     });
    // });
  }



}
