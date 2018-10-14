import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPostPage } from './new-post';

@NgModule({
  declarations: [
    NewPostPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPostPage),
  ],
})
export class NewPostPageModule {}
