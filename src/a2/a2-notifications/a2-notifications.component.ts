import { Component, OnInit, OnDestroy } from '@angular/core';
import { a2NotificationsService } from './a2-notifications.service';



export type INotifyMessageType = 'info' | 'success' | 'error' | 'clear';

export interface INotifyMessage {
    id: number;
    type: INotifyMessageType;
    text: string;
};



@Component({
    selector: 'a2-notifications',
    templateUrl: './a2-notifications.component.html',
    styleUrls: ['./a2-notifications.component.css']
})

export class a2NotificationsComponent implements OnInit, OnDestroy {

    protected mess: INotifyMessage[] = [];

    private bSub;

    constructor(private a2Serv: a2NotificationsService) {
    }


    ngOnInit() {
        this.bSub = a2NotificationsService.subject$.subscribe(data => {
            this.add(data.text, data.type, data.timeout);
        });
    }


    ngOnDestroy() {
        if (this.bSub) {
            this.bSub.unsubscribe();
        }
    }


    private add(txt, type: INotifyMessageType = 'info', timeout = 3500) {
        if (type === 'clear') {
            this.mess = [];
            return;
        }

        if (!txt || typeof txt !== 'string') {
            return;
        }

        let message_block = {
            id: Date.now(),
            type: type,
            text: txt
        };

        this.mess.push(message_block);

        if (typeof timeout === 'number' && timeout > 0) {
            setTimeout(() => {
                this.close(message_block);
            }, timeout);
        }
    }


    private close(obj) {
        this.mess.forEach(v => {
            if (v.id === obj.id) {
                obj.type += ' -out';
            }
        });
        setTimeout(() => {
            this.mess = this.mess.filter(v => v.id !== obj.id);
        }, 350);
    }
}
