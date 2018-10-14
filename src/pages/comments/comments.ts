import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs';
import { HomePage } from '../home/home';
/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  Url;Description;
  username;
  handle;
  gid:string;
  comments: Observable<any[]>;
  comment;
  pic;
  x;
  @ViewChild(Content) content: Content;
  //temp;
  constructor(private fire:AngularFireAuth,private db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    // this.groupName=this.navParams.get('groupName');
    this.username=this.fire.auth.currentUser.email;
    this.Url=this.navParams.get('Url');
    this.Description=this.navParams.get('Des');
    
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
    
    this.db.list('/posts').valueChanges().forEach(element => {
      element.forEach(entry=>{
        
        //console.log(entry['Name']);
        if(entry['Url']==this.Url){
                this.x=entry['Comments'];
        }
        
      });
    }); 
    
    
    this.db.list('posts', ref => ref.orderByChild('Url').equalTo(this.Url)).snapshotChanges()
   .subscribe(actions => {
       actions.forEach(action => {
         // here you get the key
         this.gid=action.key;
         this.comments = this.db.list('/posts/'+this.gid+'/comments').valueChanges();
         //this.db.list('users').update(action.key, { group: this.Name.value });
       });
   });

    //this.temp();
    //console.log(this.groupName);
    
  }

 
  callFunction(){
    this.content.scrollToBottom(0)
  }
  sendComment() {
    console.log(this.handle);
    this.db.list('posts/'+this.gid+'/comments').push({
      username: this.handle,
      comment: this.comment,
      picture:this.pic
    });
    this.comment = '';
    console.log(this.gid);

  
    this.db.list('posts').update(this.gid, { Comments: this.x+1 });
    //this.navCtrl.setRoot(HomePage);     
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

}
