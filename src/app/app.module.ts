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
import {CameraPage} from '../pages/camera/camera';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Camera } from '@ionic-native/camera';
import { AngularFireStorageModule } from '@angular/fire/storage';


const firebaseAuth={
  apiKey: "AIzaSyDTT3kYRvkk4JL_8qquUpTzrMs9fHHontc",
  authDomain: "sobha-73684.firebaseapp.com",
  databaseURL: "https://sobha-73684.firebaseio.com",
  projectId: "sobha-73684",
  storageBucket: "sobha-73684.appspot.com",
  messagingSenderId: "178696849195"
};

@NgModule({
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
    CameraPage,
    
  ],
  imports: [
    BrowserModule,
   // HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireStorageModule,
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
    LogoutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
