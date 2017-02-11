import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class a2NotificationsService {

    static subject$: Subject<any>;

    constructor() {
        a2NotificationsService.subject$ = new Subject();
    }

    info(txt, timeout = 3500) {
        a2NotificationsService.subject$.next({
            text: txt,
            type: 'info',
            timeout: timeout
        });
    }

    error(txt, timeout = 3500) {
        a2NotificationsService.subject$.next({
            text: txt,
            type: 'error',
            timeout: timeout
        });
    }

    success(txt, timeout = 3500) {
        a2NotificationsService.subject$.next({
            text: txt,
            type: 'success',
            timeout: timeout
        });
    }

    clear() {
        a2NotificationsService.subject$.next({
            text: '',
            type: 'clear'
        });
    }

}
