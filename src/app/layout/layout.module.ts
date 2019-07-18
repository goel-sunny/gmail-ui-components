import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { SideBarComponent } from './side-bar/side-bar.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
    imports: [RouterModule,
        BsDropdownModule.forRoot()
    ],
    exports: [LayoutComponent],
    declarations: [
        LayoutComponent,
        NavBarComponent,
        SideBarComponent
    ],
    providers: []
})

export class LayoutModule {

}