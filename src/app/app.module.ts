import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


// Import a2 service and component
import { a2NotificationsComponent, a2NotificationsService } from './../a2/a2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    a2NotificationsComponent // a2 component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    a2NotificationsService // a2 service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
