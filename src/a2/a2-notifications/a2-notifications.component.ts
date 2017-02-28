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
    template: `
<div class="-block-fix">
    <div class="-mess" [ngClass]="m.type" *ngFor="let m of mess">
        <span (click)="close(m)" class="-close" aria-hidden="true">&#215;</span>
        <p class="text">{{ m.text }}</p>
    </div>
</div>
    `,
    styles: [`
.-block-fix { box-sizing: border-box; right: 0%; margin-right: 0.3rem; position: fixed; top: 0.4rem; z-index: 9000; width: 450px; max-width: 82%; }

@keyframes fadeindown {
    from { opacity: 0; transform: translate3d(0, -100%, 0); }
    to { opacity: 1; transform: none; }
}

@keyframes fadeoutup {
    from { opacity: 1; }
    to { opacity: 0; transform: translate3d(0, -100%, 0); }
}

.-mess { width: 100%; border: 1px solid #523; padding: 0.6rem; box-sizing: border-box; margin-bottom: 0.1rem; position: relative; border: 0.1px solid transparent; border-radius: 2px;  -webkit-box-shadow: 1px 3px 8px 1px rgba(3, 3, 3, .4); box-shadow: 1px 3px 8px 1px rgba(3, 3, 3, .4);  display: block;  animation-duration: .35s; animation-fill-mode: both;  animation-name: fadeindown; }

.-mess.-out { animation-name: fadeoutup; }

.-mess>.text { word-wrap: pre; }

.-mess>.-close { color: #222; text-shadow: 0 1px 0 #fff; font-size: 1.4rem; cursor: pointer; position: absolute; top: 0; right: .1rem; width: 1.4rem; height: 1.4rem; line-height: 1.4rem; text-align: center; opacity: .4; }

.-mess>.-close :hover,
.-mess>.-close :focus { opacity: 1; }

.-mess>.-close :active { opacity: .2; }

.-mess>.-close :before { margin: 0; }


.-mess.info { color: #31708f; border-color: #bce8f1; background-color: #7bbbff; }

.-mess.success { color: #1f4f2f; border-color: #d6e9c6; background-color: #73d987; }

.-mess.error { color: #cc706d; border-color: #ebccd1; background-color: #ea9394 }
`]
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
            text: txt.toString()
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
