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
var Subject_1 = require('rxjs/Subject');
var a2NotificationsService = (function () {
    function a2NotificationsService() {
        a2NotificationsService.subject$ = new Subject_1.Subject();
    }
    a2NotificationsService.prototype.info = function (txt, timeout) {
        if (timeout === void 0) { timeout = 3500; }
        a2NotificationsService.subject$.next({
            text: txt,
            type: 'info',
            timeout: timeout
        });
    };
    a2NotificationsService.prototype.error = function (txt, timeout) {
        if (timeout === void 0) { timeout = 3500; }
        a2NotificationsService.subject$.next({
            text: txt,
            type: 'error',
            timeout: timeout
        });
    };
    a2NotificationsService.prototype.success = function (txt, timeout) {
        if (timeout === void 0) { timeout = 3500; }
        a2NotificationsService.subject$.next({
            text: txt,
            type: 'success',
            timeout: timeout
        });
    };
    a2NotificationsService.prototype.clear = function () {
        a2NotificationsService.subject$.next({
            text: '',
            type: 'clear'
        });
    };
    a2NotificationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], a2NotificationsService);
    return a2NotificationsService;
}());
exports.a2NotificationsService = a2NotificationsService;
//# sourceMappingURL=/Users/aleksej/git/a2/a2-notifications/src/a2/a2-notifications/a2-notifications.service.js.map