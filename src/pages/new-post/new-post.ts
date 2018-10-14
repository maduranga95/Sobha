import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

import { Component } from "@angular/core";
import { NavController, ToastController, normalizeURL } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import {
  AngularFireUploadTask,
  AngularFireStorage
} from "angularfire2/storage";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

import { finalize } from "rxjs/operators";
import { AngularFireList } from "angularfire2/database";

@Component({
  selector: "page-new-post",
  templateUrl: "new-post.html"
})
export class NewPostPage {
  photos = [];
  cap;
  imageData;

  task: AngularFireUploadTask;

  progress: any; // Observable 0 to 100

  image; // base64
  imageS: SafeUrl;
  images;

  post = {
    description: ""
  };
  userId: string;
  posts: AngularFireList<any>;
  constructor(
    private camera: Camera,
    public toastCtrl: ToastController,
    public storage: AngularFireStorage,
    private sanitizer: DomSanitizer,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = JSON.parse(JSON.stringify(user)).Handle;
    });

    this.posts = this.db.list("/posts/");
  }

  createUploadTask(file: string): void {
    const filePath = `sobha_${new Date().getTime()}.jpg`;

    this.images = "data:image/jpg;base64," + file;
    this.task = this.storage.ref(filePath).putString(this.images, "data_url");

    this.progress = this.task.percentageChanges();

    this.task.then(a => {
      let post = {
        Comments: 0,
        Description: this.post.description,
        Date: new Date().toString(),
        Likes: 0,
        Name: this.userId,
        Url: filePath,
        comments: []
      };
      this.posts.push(post);
      let toast = this.toastCtrl.create({
        message: "Post was added successfully",
        duration: 3000,
        position: "top"
      });

      toast.onDidDismiss(() => {
        this.navCtrl.pop();
      });

      toast.present();
    });
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum: true,
    correctOrientation: false,
    allowEdit: true
    //sourceType: 0
  };

  selectPhoto() {
    this.image = null;
    this.camera.getPicture(this.options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = "data:image/jpeg;base64," + imageData;
        //this.image = base64Image;
        //console.log(normalizeURL( this.image));
        this.image = this.sanitizer.bypassSecurityTrustUrl(base64Image);
        this.imageData = imageData;
        //this.createUploadTask(imageData);
      },
      err => {
        // Handle error
      }
    );
  }

  addNewPost() {
    //console.log(this.imageData);
    if (this.imageData) {
      this.createUploadTask(this.imageData);
    }
  }
}
