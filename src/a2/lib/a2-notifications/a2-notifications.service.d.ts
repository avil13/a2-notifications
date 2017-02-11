import { Subject } from 'rxjs/Subject';
export declare class a2NotificationsService {
    static subject$: Subject<any>;
    constructor();
    info(txt: any, timeout?: number): void;
    error(txt: any, timeout?: number): void;
    success(txt: any, timeout?: number): void;
    clear(): void;
}
