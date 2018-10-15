import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataProvider {

  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage, private angFAu: AngularFireAuth) { }
  currentUserMail = this.angFAu.auth.currentUser.email;


  getDP() {
   var a;
    this.db.list('users').valueChanges().forEach(element => {
      element.forEach(entry =>{

        if(entry['name'] == this.currentUserMail){
          //console.log('1st if passed');
          //console.log(this.currentUserMail);
          console.log(typeof entry['profilePicture']);
          //if(entry['profilePicture'] != undefined) {
            a= entry['profilePicture'];
          //}
          //else{
            //return 'https://firebasestorage.googleapis.com/v0/b/sobha-73684.appspot.com/o/ProfilePictures%2FdefaultDP.jpg?alt=media&token=2241fd15-c0ad-44de-bb03-3481da8bd20e';
          }

      })
    })
    return a;
    //let ref = this.db.list('/users/profilePictures');
    //return ref.snapshotChanges().map(changes => {
      //return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    //});
  }

  uploadAsProfilePictureToStorage(information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.txt`;

    return this.afStorage.ref('/${newName}').putString(information);
  }

  storeInfoToDatabase(metainfo) {
    let toSave = {
      created: metainfo.timeCreated,
      url: metainfo.downloadURLs[0],
      fullPath: metainfo.fullPath,
      contentType: metainfo.contentType
    }
    return this.db.list('users/profilePictures').push(toSave);
  }


  deleteProfilePicture(file) {
    let key = file.key;
    let storagePath = file.fullPath;

    let ref = this.db.list('users/profilePicture');

    ref.remove(key);
    return this.afStorage.ref(storagePath).delete();
  }
}
