System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var SigninComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SigninComponent = (function () {
                function SigninComponent(elementRef) {
                    this.element = elementRef.nativeElement.children[0];
                    this.signedIn = false; // todo -> auth factory
                }
                SigninComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    gapi.signin2.render(this.element, {
                        width: 240,
                        longtitle: true,
                        onsuccess: function (googleUser) {
                            _this.onSuccess(googleUser);
                            _this.signedIn = true;
                        },
                        onfailure: function (error) {
                            console.log(error);
                        },
                        scope: 'profile email',
                        redirect_uri: 'http://localhost:3000' //todo
                    });
                };
                SigninComponent.prototype.onSuccess = function (googleUser) {
                    console.log(googleUser);
                    localStorage.setItem('auth', googleUser);
                };
                SigninComponent = __decorate([
                    core_1.Component({
                        selector: 'signin',
                        template: '<div class="signin-wrapper"><div></div></div>',
                        styles: ['.signin-wrapper { display: inline-block; font-size: initial; text-shadow: none; text-align: center; padding-top: 1em; line-height: initial; }']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SigninComponent);
                return SigninComponent;
            }());
            exports_1("SigninComponent", SigninComponent);
        }
    }
});
//# sourceMappingURL=signin.component.js.map