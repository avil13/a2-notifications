import { Component } from '@angular/core';

import { a2NotificationsService } from '../a2/a2-notifications'; // Import a2 service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a2-notification';
  desc = 'Simple Angular2 component for show messaging';

  text = 'Enter You text.';

  constructor(private notify: a2NotificationsService){
  }

  add(type: string, time = 3500) {
    // this.notify.info(this.text);     // OR
    // this.notify.success(this.text);  // OR
    // this.notify.error(this.text);    // OR
    this.notify[type](this.text, time);
    return false;
  }



  code_0 = `npm install --save a2-notifications`;

  code_1 = `
...
import { a2NotificationsComponent, a2NotificationsService } from 'a2-notifications';

@NgModule({
  declarations: [
    ...
    a2NotificationsComponent // a2 component
  ],
  imports: [
    ...
  ],
  providers: [
    a2NotificationsService // a2 service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

code_2 = `<a2-notifications></a2-notifications>`;

code_3 = `
...
import { a2NotificationsService } from 'a2-notifications'; // Import a2 service

@Component({...})
export class NameOfComponent {

  // add service in constructor
  constructor(private notify: a2NotificationsService){}

  // blue message color
  info(text){
    this.notify.info(text);
  }

  // green message color
  success(text){
    this.notify.success(text);
  }

  // red message color
  error(text){
    this.notify.error(text);
  }

}
`;

}
