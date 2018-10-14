import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from "@angular/fire/database";
import firebase from 'firebase';
import { DataProvider } from './../../providers/data/data';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
  users: Observable<any[]> ;
  name: string ='';
  profilePicture: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser ,
              private dataProvider: DataProvider, private alertCtrl: AlertController,
              private toastCtrl: ToastController, private afAuth: AngularFireAuth) {
    this.profilePicture = this.dataProvider.getDP();

  }
  addDP() {
    let inputAlert = this.alertCtrl.create({
      title: 'Store new information',
      inputs: [
        {
          name: 'info',
          placeholder: ''
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Store',
          handler: data => {
            this.uploadProfilePictureInfo(data.info);

          }
        }
      ]
    });
    inputAlert.present();
  }

  uploadProfilePictureInfo(text){
    let upload = this.dataProvider.uploadAsProfilePictureToStorage(text);

  upload.then().then(res => {
  this.dataProvider.storeInfoToDatabase(res.metadata).then(() => {
  let toast = this.toastCtrl.create({
    message: 'New File added!',
    duration: 3000
  });
  toast.present();
});
});
}

deleteProfilePicture(file) {
  this.dataProvider.deleteProfilePicture(file).subscribe(() => {
    let toast = this.toastCtrl.create({
      message: 'File removed!',
      duration: 3000
    });
    toast.present();
  });
}
  viewDP(url) {
    this.iab.create(url);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
