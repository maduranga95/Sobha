import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';

import { AngularFireStorage } from '@angular/fire/storage';
import {DomSanitizer} from '@angular/platform-browser';
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
 
  constructor(public navCtrl: NavController, private camera : Camera, private storage : AngularFireStorage, private sanitizer:DomSanitizer) {
    
  }
  
  uploadFile() {
    
    const myPhotosRef = 'photos/';
    const ref = this.storage.ref(myPhotosRef);
    const task = ref.put(this.myPhoto);
    console.log(task);
  }

  takeImage(){
    const options: CameraOptions = {
      quality: 50,
      
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      console.log(this.myPhoto);
      this.uploadFile();
     }, (err) => {
      // Handle error
     });
  }
  showImage(){
    const sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(this.myPhoto);
    return sanitizedContent;
 }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
