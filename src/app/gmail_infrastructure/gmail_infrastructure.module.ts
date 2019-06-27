import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { DataGridComponent } from './ui/data_grid/data-grid.component';
import { MailActionComponent } from './ui/data_grid/mail-action/mail-action.component';

import { ActionEnableDirective } from './core/directives/action_enable.directive';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatCheckboxModule
    ],
    declarations: [
        DataGridComponent,
        MailActionComponent,
        ActionEnableDirective
    ],
    providers: [],
    exports: [DataGridComponent]
})
export class GmailInfrastructureModule {


}