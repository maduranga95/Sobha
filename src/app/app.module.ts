import { Camera } from '@ionic-native/camera';
import { NewPostPage } from './../pages/new-post/new-post';
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

import { JoingroupPage } from '../pages/joingroup/joingroup';
import { GroupdetailsPage } from '../pages/groupdetails/groupdetails';
import { Groupdetails2Page } from '../pages/groupdetails2/groupdetails2';

import { ChatPage } from '../pages/chat/chat';
import { NewgroupPage } from '../pages/newgroup/newgroup';
import { OldgroupPage } from '../pages/oldgroup/oldgroup';
import { CommentsPage } from '../pages/comments/comments';

import {CameraPage} from '../pages/camera/camera';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireDatabase } from '@angular/fire/database';

import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { DataProvider } from '../providers/data/data';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//import { AngularFireDatabaseModule } from 'angularfire2/database';
//https://github.com/maduranga95/Sobha/pull/16/conflict?name=src%252Fpages%252Fhome%252Fhome.html&ancestor_oid=ef60ca29b8d6af50c75728d7e591e64ff2bb62fa&base_oid=a350c8c41fad2e8b5b7fa648cb09b9081822135d&head_oid=ce91c5491f26da2b2468d496aa938556f474dec7
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

    NewPostPage,

    NewgroupPage,
    OldgroupPage,
    JoingroupPage,
    GroupdetailsPage,
    Groupdetails2Page,
    ChatPage,
    CommentsPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
   // HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
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

    NewgroupPage,
    OldgroupPage,
    JoingroupPage,
    GroupdetailsPage,
    Groupdetails2Page,
    ChatPage,
    CommentsPage,
    CameraPage,

    LogoutPage,
    NewPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    DataProvider,
    InAppBrowser
  ]
})
export class AppModule {}
