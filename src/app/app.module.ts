import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';

/**import gmail infrastructure module */
import { GmailInfrastructureModule } from './gmail_infrastructure/gmail_infrastructure.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GmailInfrastructureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
