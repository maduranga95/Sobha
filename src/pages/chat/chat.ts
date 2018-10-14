import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs';
//import { Content } from ‘ionic-angular’;
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  groupName;
  username;
  gid:string;
  messages: Observable<any[]>;
  message;
  handle;pic;
  @ViewChild(Content) content: Content;
  //temp;
  constructor(private fire:AngularFireAuth,private db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.groupName=this.navParams.get('groupName');
    this.username=this.fire.auth.currentUser.email;
    
    this.db.list('/users').valueChanges().forEach(element => {
      element.forEach(entry=>{
        
        //console.log(entry['Name']);
        if(entry['name']==this.username){
                this.handle=entry['Handle'];
                this.pic=entry['profilePicture']
                //this.navCtrl.setRoot(NewgroupPage);
                 //console.log(this.groupname);
        }
        
      });
    });

    this.db.list('groups', ref => ref.orderByChild('Name').equalTo(this.groupName)).snapshotChanges()
   .subscribe(actions => {
       actions.forEach(action => {
         // here you get the key
         this.gid=action.key;
         this.messages = this.db.list('/groups/'+this.gid+'/chat').valueChanges();
         //this.db.list('users').update(action.key, { group: this.Name.value });
       });
   });

    //this.temp();
    //console.log(this.groupName);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  callFunction(){
    this.content.scrollToBottom(0)
  }
  sendMessage() {
    this.db.list('groups/'+this.gid+'/chat').push({
      username: this.handle,
      message: this.message
    });
    this.message = '';
    console.log(this.gid);
  }

}
