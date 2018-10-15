import { NewPostPage } from './../new-post/new-post';
import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { CommentsPage } from '../comments/comments';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arr=[];
  temp=[];
  //colors=[];
  category: string = 'gear';
  x;
  y;
  z;
  w;
  username;
  pid;
  u;d;
 // color;
  //buttonColor:string='#000';
  constructor(public alertCtrl: AlertController,private fire:AngularFireAuth,private db:AngularFireDatabase,public navCtrl: NavController) {
    this.username=this.fire.auth.currentUser.email;
    this.y= true;
    
    this.db.list('/posts').valueChanges().forEach(element => {
      this.arr=[];
      this.temp=[];
      element.forEach(entry=>{
        //console.log(entry);
       // if(this.z){
      //  this.color='primary'; 
        this.arr.push(entry);
        //console.log(entry['Name']);
        this.temp.push(entry['Url']);
       // }
      //  this.db.list('/reactors').valueChanges().forEach(element=>{
      //   element.forEach(entry=>{
      //       if((entry['Name']==this.username) && (entry['Url']==this.z)){
      //           this.color='Danger';
      //       }
      //     })
      //     this.colors.push(this.color);
      //   });

      });
      
      
    });


   // this.arr=this.db.list('/posts').valueChanges();
    //this.arr=this.arr.slice().reverse();
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  like(i){
    this.z=this.temp[this.temp.length-1-i];
    this.x=this.arr[this.temp.length-1-i]['Likes'];
    //this.y=this.arr[i].Url;
   // console.log(i);
    // this.arr.forEach(element=>{
    //   element.forEach(entry=>{
    //     if(entry['Url']==i){
    //       this.x=entry['Likes'];
    //     }
    //   });
    // });
    
    // this.y=true;
    
    this.db.list('/reactors').valueChanges().forEach(element=>{
      element.forEach(entry=>{
          if((entry['Name']==this.username) && (entry['Url']==this.z)){
              this.y=false;
          }
      });
     if(this.y){
        
      this.db.list('posts', ref => ref.orderByChild('Url').equalTo(this.z)).snapshotChanges()
      .subscribe(actions => {
          actions.forEach(action => {
            // here you get the key
           // this.z=this.x+1;
            console.log(action.key,this.x);
            
            this.db.list('posts').update(action.key, { Likes: this.x+1 });
            this.db.list('reactors').push({
              Name: this.username,
              Url:this.z
            });
          });
      });
      // this.arr=[];
      // this.temp=[];
      //this.y=true;
      //this.buttonColor='#345465';
      }//else{
    //    this.alert('You already Liked this');
    //  }
     this.y=true;
    });

   // if(this.y)
    //{
      // this.db.list('posts', ref => ref.orderByChild('Url').equalTo(i)).snapshotChanges()
      // .subscribe(actions => {
      //     actions.forEach(action => {
      //       // here you get the key
      //       this.z=this.x+1;
      //       console.log(action.key,this.z);
      //       this.pid=action.key;
            
      //       this.db.list('reactors').push({
      //         Name: this.username,
      //         Url:i
      //       });
      //     });
      // });

      // this.db.list('posts').update(this.pid, { Likes: this.z });

   // }

    // this.db.list('posts', ref => ref.orderByChild('Url').equalTo(this.z)).snapshotChanges()
    // .subscribe(actions => {
    //     actions.forEach(action => {
    //       // here you get the key
    //      // this.z=this.x+1;
    //       console.log(action.key,this.x);
          
    //       this.db.list('posts').update(action.key, { Likes: this.x+1 });
    //       //this.db.list('reactors').push({
    //       //   Name: this.username,
    //       //   Url:i
    //       // });
    //     });
    // });


    //this.x=0;
    //location.reload();
  }

  
  //doClick(){}


  comment(i) {
    this.w=this.temp[this.temp.length-1-i];
    this.d=this.arr[this.temp.length-1-i]['Description'];
    // this.arr=[];
    // this.temp=[];
    this.navCtrl.push(CommentsPage,{
        Url:this.w,
        Des:this.d
    });
    
  }
}
