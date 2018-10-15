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
import { AngularFireStorage} from "@angular/fire/storage";

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
  groups: object[] = [];
  users: object[] = [];
  names: object[] = [];
  emails: object[] = [];
  profilePicture: object[] = [];
  currentUserMail = this.afAuth.auth.currentUser.email;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser,
              private dataProvider: DataProvider, private alertCtrl: AlertController, private afStorage: AngularFireStorage,
              private toastCtrl: ToastController, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.db.list('users').valueChanges().forEach(element => {
      this.profilePicture = [];
      element.forEach(entry => {
        if (entry['name'] == this.currentUserMail) {
          console.log(entry['name']);
          console.log(entry['profilePicture']);
          this.profilePicture.push(entry['profilePicture']);
          console.log(entry['profilePicture'])
        }
      })
    })

    this.db.list('users').valueChanges().forEach(element => {
      this.names = [];
      element.forEach(entry => {
        if (entry['name'] == this.currentUserMail) {
          console.log(entry['name']);
          console.log(entry['Handle']);
          this.names.push(entry['Handle']);
        }
      })
    })

    this.db.list('users').valueChanges().forEach(element => {
      this.emails = [];
      element.forEach(entry => {
        if (entry['name'] == this.currentUserMail) {
          console.log(entry['name']);
          this.emails.push(entry['name']);
        }
      })
    })


  }

  viewDP(url) {
    this.iab.create(url);
  }

  deleteProfilePicture(url) {
    //let key = file.key;
    //let storagePath = file.fullPath;

    this.db.list('users', ref => ref.orderByChild('name').equalTo(this.currentUserMail)).snapshotChanges().subscribe(actions => {
      console.log('ghghgh')
      actions.forEach(action => {
        console.log(action.key);
        this.db.list('users').update(action.key, {profilePicture: "https://firebasestorage.googleapis.com/v0/b/sobha-73684.appspot.com/o/defaultpic.png?alt=media&token=ce8fd8db-3125-4a92-935d-2c1862f7f400"})
        console.log('deleted');
      })
    });
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

  uploadProfilePictureInfo(text) {
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
}

    //this.navCtrl.setRoot(ProfilePage);
    //this.afStorage.ref(url).delete();

   /* console.log('1st part');
    this.profilePicture = this.getDP();
    console.log(this.profilePicture);
    this.db.list('users').valueChanges().forEach(element => {
      element.forEach(entry => {
        console.log(3);
        if (entry['name'] == this.currentUserMail) {
          console.log('if passed');
          this.users = entry;
        }

      })
    })
  }
  addDP(){
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
}*/

/*deleteProfilePicture(file) {
  this.dataProvider.deleteProfilePicture(file).subscribe(() => {
    let toast = this.toastCtrl.create({
      message: 'File removed!',
      duration: 3000
    });
    toast.present();
  });
}
  viewDP(url) {
    console.log('entered iab');
    this.iab.create(url,'_self');
    console.log('got out');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }*/
   //getDP() {

    //this.db.list('users').valueChanges().forEach(element => {

      //element.forEach(entry =>{

        //if(entry['name'] == this.currentUserMail){

          //console.log('1st if passed');
          //console.log(this.currentUserMail);
          //console.log(entry['profilePicture']);
          //if(entry['profilePicture'] != undefined) {

          //this.test = entry['profilePicture'];
          //}
          //else{
          //return 'https://firebasestorage.googleapis.com/v0/b/sobha-73684.appspot.com/o/ProfilePictures%2FdefaultDP.jpg?alt=media&token=2241fd15-c0ad-44de-bb03-3481da8bd20e';
       // }

     // })
   // })

    //console.log(this.test);
    //return this.test;
    //let ref = this.db.list('/users/profilePictures');
    //return ref.snapshotChanges().map(changes => {
    //return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    //});
 // }
//}

