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
        if (!txt) {
            return;
        }
        var text = (typeof txt !== 'string') ? txt.statusText || txt.errorMessage || txt.toString() : txt;
        var message_block = {
            id: Date.now(),
            type: type,
            text: text
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
            // styleUrls: ['./a2-notifications.component.for-dev.css'],
            styles: ["\n.-block-fix {\n    box-sizing: border-box;\n    right: 0%;\n    margin-right: 0.3rem;\n    position: fixed;\n    top: 0.4rem;\n    z-index: 9000;\n    width: 450px;\n    max-width: 82%;\n}\n\n@keyframes fadeindown {\n    from {\n        opacity: 0;\n        transform: translate3d(0, -100%, 0);\n    }\n    to {\n        opacity: 1;\n        transform: none;\n    }\n}\n\n@keyframes fadeoutup {\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n        transform: translate3d(0, -100%, 0);\n    }\n}\n\n.-mess {\n    width: 100%;\n    border: 1px solid #523;\n    padding: 0.6rem;\n    box-sizing: border-box;\n    margin-bottom: 0.1rem;\n    position: relative;\n    border: 0.1px solid transparent;\n    border-radius: 2px;\n    /**/\n    -webkit-box-shadow: 1px 3px 8px 1px rgba(3, 3, 3, .4);\n    box-shadow: 1px 3px 8px 1px rgba(3, 3, 3, .4);\n    /**/\n    display: block;\n    /**/\n    animation-duration: .35s;\n    animation-fill-mode: both;\n    /**/\n    animation-name: fadeindown;\n}\n\n.-mess.-out {\n    animation-name: fadeoutup;\n}\n\n.-mess>.text {\n    word-wrap: pre;\n}\n\n\n/* close */\n\n.-mess>.-close {\n    color: #222;\n    text-shadow: 0 1px 0 #fff;\n    font-size: 1.4rem;\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    right: .1rem;\n    width: 1.4rem;\n    height: 1.4rem;\n    line-height: 1.4rem;\n    text-align: center;\n    opacity: .4;\n}\n\n.-mess>.-close :hover,\n.-mess>.-close :focus {\n    opacity: 1;\n}\n\n.-mess>.-close :active {\n    opacity: .2;\n}\n\n.-mess>.-close :before {\n    margin: 0;\n}\n\n\n/* types */\n\n.-mess.info {\n    color: #31708f;\n    border-color: #bce8f1;\n    background-color: #7bbbff;\n}\n\n.-mess.success {\n    color: #1f4f2f;\n    border-color: #d6e9c6;\n    background-color: #73d987;\n    /*background-color: #299d37;*/\n}\n\n.-mess.error {\n    color: #cc706d;\n    border-color: #ebccd1;\n    background-color: #ea9394\n}\n\n.-mess.info .text{ color: #0b4967; }\n.-mess.success .text{ color: #1f4f2f; }\n.-mess.error .text{ color: #822926; }\n\n"]
        }), 
        __metadata('design:paramtypes', [a2_notifications_service_1.a2NotificationsService])
    ], a2NotificationsComponent);
    return a2NotificationsComponent;
}());
exports.a2NotificationsComponent = a2NotificationsComponent;
//# sourceMappingURL=/Users/aleksej/git/a2/a2-notifications/src/a2/a2-notifications/a2-notifications.component.js.map