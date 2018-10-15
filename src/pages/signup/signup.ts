import { Component,trigger, state, style, transition, animate, keyframes, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  animations: [

    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),

    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms ease-in-out')
      ])
    ]),

    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),

    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]
}  
)
export class SignupPage {
  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('password2') passwordre;
  @ViewChild('handle') handle;
  temp;
  constructor(private db:AngularFireDatabase,private alertCtrl: AlertController,private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
     this.temp=true;
  }

  
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  goback() {
    this.navCtrl.pop();
    //console.log('Click on button Test Console Log');
 }

  signUpUser(){
    
   
   if(this.password.value==this.passwordre.value){
      this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        // console.log('got data ', data);
        const itemsRef = this.db.list('users');
        itemsRef.push({ 
          name: this.user.value,
          group: 'null',
          photocount:0,
          Handle:this.handle.value,
          UID: this.fire.auth.currentUser.uid,
          profilePicture:"https://firebasestorage.googleapis.com/v0/b/sobha-73684.appspot.com/o/defaultpic.png?alt=media&token=ce8fd8db-3125-4a92-935d-2c1862f7f400"
        });

        this.alert('Registered! Please Log In again');
        this.navCtrl.setRoot( LoginPage );
      })
      .catch(error => {
        //console.log('got an error ', error);
        this.alert(error.message);
      });
      //console.log('Would register user with ', this.user.value, this.password.value);
    }else{
         this.alert('Passwords mismatched!');
    }
   }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad SignupPage');
  }

}
