# A2-notifications

Simple Angular2 component for showing messages.

[Demo:](https://avil13.github.io/a2-notifications/)

Install package:
```bash
npm install --save a2-notifications
```

Include:
```javascrypt
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
```

In main HTML component add:

```html 
<a2-notifications></a2-notifications>
```


And use them on your page:
```javascrypt

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
```

You can transfer display time with second parameter. (In ms)

If you transfer not the number, then the message will not dissapear.
