import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { GeneralSettingsComponent } from './ui/general-settings/general-settings.component';
import { LabelSettingsComponent } from './ui/label-settings/label-settings.component';
import { InboxSettingsComponent } from './ui/inbox-settings/inbox-settings.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SettingsComponent, GeneralSettingsComponent, LabelSettingsComponent, InboxSettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      
    ])
  ]
})
export class SettingsModule { }
