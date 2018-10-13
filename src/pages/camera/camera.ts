import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

import { AngularFireStorage } from 'angularfire2/storage';
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
 
  public myPhotosRef: any;
  public myPhoto: any;
  public myPhotoURL: any;
 
  constructor(public navCtrl: NavController, private storage : AngularFireStorage ) {
    
  }
 
  takePhoto() {
    Camera.getPicture({
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto(this.myPhoto);
      console.log("Done");
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }
 
  selectPhoto(): void {
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: Camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto(this.myPhoto);
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }
 
  private uploadPhoto(e): void {
    const filePath = 'photos/';
    const reef = this.storage.ref(filePath);
    const task = reef.put(e);
    alert("Done!!!")


  }
 
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
