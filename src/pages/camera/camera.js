var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import firebase from 'firebase';
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CameraPage = /** @class */ (function () {
    function CameraPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.myPhotosRef = firebase.storage().ref('/Photos/');
    }
    CameraPage.prototype.takePhoto = function () {
        var _this = this;
        Camera.getPicture({
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.PNG,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            _this.uploadPhoto();
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    CameraPage.prototype.selectPhoto = function () {
        var _this = this;
        Camera.getPicture({
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.DATA_URL,
            quality: 100,
            encodingType: Camera.EncodingType.PNG,
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            _this.uploadPhoto();
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    CameraPage.prototype.uploadPhoto = function () {
        var _this = this;
        this.myPhotosRef.child(this.generateUUID()).child('myPhoto.png')
            .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
            .then(function (savedPicture) {
            _this.myPhotoURL = savedPicture.downloadURL;
        });
    };
    CameraPage.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    CameraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameraPage');
    };
    CameraPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-camera',
            templateUrl: 'camera.html',
        }),
        __metadata("design:paramtypes", [NavController])
    ], CameraPage);
    return CameraPage;
}());
export { CameraPage };
//# sourceMappingURL=camera.js.map