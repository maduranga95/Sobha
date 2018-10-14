var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { LeaderboardPage } from '../pages/leaderboard/leaderboard';
import { GroupPage } from '../pages/group/group';
import { LogoutPage } from '../pages/logout/logout';
import { CameraPage } from '../pages/camera/camera';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
var firebaseAuth = {
    apiKey: "AIzaSyDTT3kYRvkk4JL_8qquUpTzrMs9fHHontc",
    authDomain: "sobha-73684.firebaseapp.com",
    databaseURL: "https://sobha-73684.firebaseio.com",
    projectId: "sobha-73684",
    storageBucket: "sobha-73684.appspot.com",
    messagingSenderId: "178696849195"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                LoginPage,
                SignupPage,
                ProfilePage,
                SettingsPage,
                GroupPage,
                LeaderboardPage,
                LogoutPage,
                CameraPage
            ],
            imports: [
                BrowserModule,
                // HttpClientModule,
                IonicModule.forRoot(MyApp),
                AngularFireModule.initializeApp(firebaseAuth),
                AngularFireModule.initializeApp(firebase),
                AngularFireStorageModule,
                AngularFireAuthModule,
                BrowserAnimationsModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                LoginPage,
                SignupPage,
                ProfilePage,
                SettingsPage,
                LeaderboardPage,
                GroupPage,
                CameraPage,
                LogoutPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map