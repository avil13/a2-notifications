import { OnInit, OnDestroy } from '@angular/core';
import { a2NotificationsService } from './a2-notifications.service';
export declare type INotifyMessageType = 'info' | 'success' | 'error' | 'clear';
export interface INotifyMessage {
    id: number;
    type: INotifyMessageType;
    text: string;
}
export declare class a2NotificationsComponent implements OnInit, OnDestroy {
    private a2Serv;
    protected mess: INotifyMessage[];
    private bSub;
    constructor(a2Serv: a2NotificationsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private add(txt, type?, timeout?);
    private close(obj);
}
