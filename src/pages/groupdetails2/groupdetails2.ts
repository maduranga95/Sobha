import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the Groupdetails2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groupdetails2',
  templateUrl: 'groupdetails2.html',
})
export class Groupdetails2Page {

  Name:string;
  Admin:String;
  username;
  gid;
  arr=[];
  constructor(private fire:AngularFireAuth,private db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.Name=navParams.get('groupName');
    
    // this.db.list('/groups', ref=>ref.orderByChild("Name").equalTo(this.Name)).snapshotChanges().map(
    //   action => {
    //     console.log(this.Name);
    //     for (let entry of action){
    //       var x = entry.payload.val();
    //     }
    //   });
    this.db.list('/groups').valueChanges().forEach(element => {
      element.forEach(entry=>{
        
        //console.log(entry['Name']);
        if(entry['Name']==this.Name){
                this.Admin=entry['Owner'];
                
                //this.navCtrl.setRoot(NewgroupPage);
                 //console.log(this.groupname);
        }
        
      });
    });  
    
    this.db.list('/users').valueChanges().forEach(element => {
      element.forEach(entry=>{
      
        //console.log(entry);
        if(entry['group']==this.Name){
                //this.Admin=entry['Owner'];
                this.arr.push(entry['name']);
                //this.navCtrl.setRoot(NewgroupPage);
                 //console.log(this.groupname);
        }
        
      });
    });  

    // this.db.list('groups').valueChanges().subscribe(data=>{
    //   data.forEach(element => {
    //     this.arr.push(element['Name']);
    //   });
        
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Groupdetails2Page');
  }
  


}
