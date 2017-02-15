"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var a2_notifications_service_1 = require('./a2-notifications.service');
;
var a2NotificationsComponent = (function () {
    function a2NotificationsComponent(a2Serv) {
        this.a2Serv = a2Serv;
        this.mess = [];
    }
    a2NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bSub = a2_notifications_service_1.a2NotificationsService.subject$.subscribe(function (data) {
            _this.add(data.text, data.type, data.timeout);
        });
    };
    a2NotificationsComponent.prototype.ngOnDestroy = function () {
        if (this.bSub) {
            this.bSub.unsubscribe();
        }
    };
    a2NotificationsComponent.prototype.add = function (txt, type, timeout) {
        var _this = this;
        if (type === void 0) { type = 'info'; }
        if (timeout === void 0) { timeout = 3500; }
        if (type === 'clear') {
            this.mess = [];
            return;
        }
        if (!txt || typeof txt !== 'string') {
            return;
        }
        var message_block = {
            id: Date.now(),
            type: type,
            text: txt
        };
        this.mess.push(message_block);
        if (typeof timeout === 'number' && timeout > 0) {
            setTimeout(function () {
                _this.close(message_block);
            }, timeout);
        }
    };
    a2NotificationsComponent.prototype.close = function (obj) {
        var _this = this;
        this.mess.forEach(function (v) {
            if (v.id === obj.id) {
                obj.type += ' -out';
            }
        });
        setTimeout(function () {
            _this.mess = _this.mess.filter(function (v) { return v.id !== obj.id; });
        }, 350);
    };
    a2NotificationsComponent = __decorate([
        core_1.Component({
            selector: 'a2-notifications',
            template: "\n<div class=\"-block-fix\">\n    <div class=\"-mess\" [ngClass]=\"m.type\" *ngFor=\"let m of mess\">\n        <span (click)=\"close(m)\" class=\"-close\" aria-hidden=\"true\">&#215;</span>\n        <p class=\"text\">{{ m.text }}</p>\n    </div>\n</div>\n    ",
            styles: ["\n.-block-fix { box-sizing: border-box; right: 0%; margin-right: 0.3rem; position: fixed; top: 0.4rem; z-index: 9000; width: 450px; max-width: 82%; }\n\n@keyframes fadeindown {\n    from { opacity: 0; transform: translate3d(0, -100%, 0); }\n    to { opacity: 1; transform: none; }\n}\n\n@keyframes fadeoutup {\n    from { opacity: 1; }\n    to { opacity: 0; transform: translate3d(0, -100%, 0); }\n}\n\n.-mess { width: 100%; border: 1px solid #523; padding: 0.6rem; box-sizing: border-box; margin-bottom: 0.1rem; position: relative; border: 0.1px solid transparent; border-radius: 2px;  -webkit-box-shadow: 1px 3px 8px 1px rgba(3, 3, 3, .4); box-shadow: 1px 3px 8px 1px rgba(3, 3, 3, .4);  display: block;  animation-duration: .35s; animation-fill-mode: both;  animation-name: fadeindown; }\n\n.-mess.-out { animation-name: fadeoutup; }\n\n.-mess>.text { word-wrap: pre; }\n\n.-mess>.-close { color: #222; text-shadow: 0 1px 0 #fff; font-size: 1.4rem; cursor: pointer; position: absolute; top: 0; right: .1rem; width: 1.4rem; height: 1.4rem; line-height: 1.4rem; text-align: center; opacity: .4; }\n\n.-mess>.-close :hover,\n.-mess>.-close :focus { opacity: 1; }\n\n.-mess>.-close :active { opacity: .2; }\n\n.-mess>.-close :before { margin: 0; }\n\n\n.-mess.info { color: #31708f; border-color: #bce8f1; background-color: #7bbbff; }\n\n.-mess.success { color: #1f4f2f; border-color: #d6e9c6; background-color: #73d987; }\n\n.-mess.error { color: #cc706d; border-color: #ebccd1; background-color: #ea9394 }\n"]
        }), 
        __metadata('design:paramtypes', [a2_notifications_service_1.a2NotificationsService])
    ], a2NotificationsComponent);
    return a2NotificationsComponent;
}());
exports.a2NotificationsComponent = a2NotificationsComponent;
//# sourceMappingURL=/Users/aleksej/git/a2/a2-notifications/src/a2/a2-notifications/a2-notifications.component.js.map