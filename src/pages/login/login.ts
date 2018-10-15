import { Component,trigger, state, style, transition, animate, keyframes, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
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
})
export class LoginPage {
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController,private fire:AngularFireAuth ) {

        
  }
  
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  logInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then( data => {
      //console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( HomePage );
      // user is logged in
    })
    .catch( error => {
      //console.log('got an error', error);
      this.alert(error.message);
    })
  	//console.log('Would sign in with ', this.user.value, this.password.value);
  }

  signUpUser() {
    this.navCtrl.push(SignupPage);
  }
  
  //ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  //}

}


 