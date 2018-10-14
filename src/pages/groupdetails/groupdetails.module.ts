import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupdetailsPage } from './groupdetails';

@NgModule({
  declarations: [
    GroupdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupdetailsPage),
  ],
})
export class GroupdetailsPageModule {}
