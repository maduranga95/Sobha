var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, trigger, state, style, transition, animate, keyframes, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    SignupPage.prototype.goback = function () {
        this.navCtrl.pop();
        console.log('Click on button Test Console Log');
    };
    SignupPage.prototype.signUpUser = function () {
        var _this = this;
        if (this.password.value == this.passwordre.value) {
            this.fire.auth.createUserWithEmailAndPassword(this.user.value + '@domian.xta', this.password.value)
                .then(function (data) {
                console.log('got data ', data);
                _this.alert('Registered! Please Log In again');
                _this.navCtrl.setRoot(LoginPage);
            })
                .catch(function (error) {
                console.log('got an error ', error);
                _this.alert(error.message);
            });
            console.log('Would register user with ', this.user.value, this.password.value);
        }
        else {
            this.alert('Passwords mismatched!');
        }
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    __decorate([
        ViewChild('username'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "user", void 0);
    __decorate([
        ViewChild('password'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "password", void 0);
    __decorate([
        ViewChild('password2'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "passwordre", void 0);
    SignupPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
            animations: [
                //For the logo
                trigger('flyInBottomSlow', [
                    state('in', style({
                        transform: 'translate3d(0,0,0)'
                    })),
                    transition('void => *', [
                        style({ transform: 'translate3d(0,2000px,0' }),
                        animate('2000ms ease-in-out')
                    ])
                ]),
                //For the background detail
                trigger('flyInBottomFast', [
                    state('in', style({
                        transform: 'translate3d(0,0,0)'
                    })),
                    transition('void => *', [
                        style({ transform: 'translate3d(0,2000px,0)' }),
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
                            style({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
                            style({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
                            style({ transform: 'translate3d(0,0,0)', offset: 1 })
                        ]))
                    ])
                ]),
                //For login button
                trigger('fadeIn', [
                    state('in', style({
                        opacity: 1
                    })),
                    transition('void => *', [
                        style({ opacity: 0 }),
                        animate('1000ms 2000ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [AlertController, AngularFireAuth, NavController, NavParams])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map