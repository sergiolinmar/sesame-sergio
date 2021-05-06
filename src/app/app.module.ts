import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeTrackerPageComponent } from './pages/time-tracker-page/time-tracker-page.component';
import { TimeTrackerComponent } from './pages/time-tracker-page/components/time-tracker/time-tracker.component';
import { TimeTrackerUserComponent } from './pages/time-tracker-page/components/time-tracker-user/time-tracker-user.component';
import { UserAvatarComponent } from './shared/components/user-avatar/user-avatar.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeTrackerPageComponent,
    TimeTrackerComponent,
    TimeTrackerUserComponent,
    UserAvatarComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
