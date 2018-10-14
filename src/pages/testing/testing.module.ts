import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestingPage } from './testing';

@NgModule({
  declarations: [
    TestingPage,
  ],
  imports: [
    IonicPageModule.forChild(TestingPage),
  ],
})
export class TestingPageModule {}
