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
            templateUrl: './a2-notifications.component.html',
            styleUrls: ['./a2-notifications.component.css']
        }), 
        __metadata('design:paramtypes', [a2_notifications_service_1.a2NotificationsService])
    ], a2NotificationsComponent);
    return a2NotificationsComponent;
}());
exports.a2NotificationsComponent = a2NotificationsComponent;
//# sourceMappingURL=/Users/aleksej/git/a2/a2-notifications/src/a2/a2-notifications/a2-notifications.component.js.map