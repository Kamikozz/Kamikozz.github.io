webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hardtest_hardtest_component__ = __webpack_require__("./src/app/hardtest/hardtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_form_test_form_component__ = __webpack_require__("./src/app/test-form/test-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    // { path: '', redirectTo: '/hardtest', pathMatch: 'full' },
    { path: 'hardtest', component: __WEBPACK_IMPORTED_MODULE_2__hardtest_hardtest_component__["a" /* HardtestComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__test_form_test_form_component__["a" /* TestFormComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<!--<app-test-form></app-test-form>-->\r\n<!--<app-hardtest></app-hardtest>-->\r\n<app-messages></app-messages>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__test_form_test_form_component__ = __webpack_require__("./src/app/test-form/test-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hardtest_hardtest_component__ = __webpack_require__("./src/app/hardtest/hardtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hardtest_service__ = __webpack_require__("./src/app/hardtest.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/** Modules */




 // <-- NgModel lives here
/** HTTP */

// import { InterceptorModule } from './interceptor.module'; // for CORS
/** Compontents */





/** Services */


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__test_form_test_form_component__["a" /* TestFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__hardtest_hardtest_component__["a" /* HardtestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_12__hardtest_service__["a" /* HardtestService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hardtest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardtestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// 'Content-Type': 'application/json',
// 'Accept': 'application/json',
// 'Access-Control-Allow-Headers': 'Content-Type'
// 'Access-Control-Allow-Origin':'https://maxqfz.net',
// 'Origin':'https://maxqfz.net'
// 'Content-Type': '',
// 'Accept': 'application/json, text/plain',
// 'Access-Control-Allow-Origin': '*',
// 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
// 'Access-Control-Allow-Headers':'Content-Type, X-Requested-With, Accept',
// 'Access-Control-Allow-Credentials': 'true',
// 'Content-type': 'multipart/form-data',
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({})
};
var HardtestService = /** @class */ (function () {
    function HardtestService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.API_Url = 'https://maxqfz.net/hardtester'; // URL to web api
    }
    // getHeroes(): Observable<Hero[]> {
    //   // TODO: send the message _after_ fetching the heroes
    //   this.messageService.add('HeroService: fetched heroes');
    //   return of(HEROES);
    // }
    // getHero(id: number): Observable<Hero> {
    //   // TODO: send the message _after_ fetching the hero
    //   this.messageService.add(`HeroService: fetched hero id=${id}`);
    //   return of(HEROES.find(hero => hero.id === id));
    // }
    // /** GET hero by id. Will 404 if id not found */
    // getHero(id: number): Observable<Hero> {
    //   const url = `${this.heroesUrl}/${id}`;
    //   return this.http.get<Hero>(url).pipe(
    //     tap(_ => this.log(`fetched hero id=${id}`)),
    //     catchError(this.handleError<Hero>(`getHero id=${id}`))
    //   );
    // }
    // /** GET heroes from the server */
    // stopHardtest (): Observable<any> {
    //   const url = `${this.API_Url}`;
    //   return this.http.get<any>(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles`)
    //     .pipe(
    //       tap(data => this.log(`fetched dataFromStopHardTest`)),
    //       catchError(this.handleError<any>(`stopHardtest`))
    //     );
    // }
    // getHero(id: number): Observable<Hero> {
    //   const url = `${this.heroesUrl}/${id}`;
    //   return this.http.get<Hero>(url).pipe(
    //     tap(_ => this.log(`fetched hero id=${id}`)),
    //     catchError(this.handleError<Hero>(`getHero id=${id}`))
    //   );
    // }
    // /** GET something TODO:WORKS */
    // stopHardtest (): Observable<string> {
    //   const url = `${this.API_Url}/stop`;
    //   return this.http.get<string>(`http://httpbin.org/headers`).pipe(
    //       tap((data) => {
    //           this.log(`fetched data_from_stopHardtest`);
    //         }),
    //       catchError(this.handleError<string>(`stopHardtest`))
    //     );
    // }
    // // Часть кода, для посылки заголовков в GET запросе
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    // }
    //
    // const requestOptions = {
    //   headers: new Headers(headerDict),
    // };
    //
    // return this.http.get(this.heroesUrl, requestOptions)
    /** GET request stoping test */
    HardtestService.prototype.stopHardtest = function () {
        var _this = this;
        var url = this.API_Url + "/stop";
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (data) {
            _this.log("fetched data_from_stopHardtest GET " + url);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("stopHardtest")));
    };
    /** GET heroes from the server */
    HardtestService.prototype.startHardtest = function (test) {
        var _this = this;
        var url = this.API_Url + "/start";
        return this.http.post(url, test, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (data) {
            _this.log("fetched data_from_startHardtest");
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("startHardtest")));
    };
    /** GET heroes from the server */
    HardtestService.prototype.POSTstopHardtest = function (test) {
        var _this = this;
        var url = this.API_Url + "/start";
        return this.http.post(url, test, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (data) {
            _this.log("fetched data_from_POSTstopHardtest");
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("POSTstopHardtest")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HardtestService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    HardtestService.prototype.log = function (message) {
        this.messageService.add('HardtestService: ' + message);
    };
    HardtestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HardtestService);
    return HardtestService;
}());



/***/ }),

/***/ "./src/app/hardtest/hardtest.component.css":
/***/ (function(module, exports) {

module.exports = ".formWhite{\r\n  background-color: white;\r\n}\r\n\r\n.header {\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  border-bottom: 1px solid #707070;\r\n  height: 50px !important;\r\n  font-size: 15px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/hardtest/hardtest.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button (click)=\"stopHardtest()\">\r\n    testGET</button>\r\n</div>\r\n<div *ngIf=\"strResultOfRequest\">\r\n  <!--<label>GET Request:</label>-->\r\n  <!--<textarea  rows=\"5\" style=\"width:100%\">{{test | json}}</textarea>-->\r\n  <!--<pre></pre>-->\r\n  <label class=\"formWhite\">GET Respond:</label>\r\n  <pre class=\"formWhite\">{{strResultOfRequest |  json}}</pre>\r\n  <!--<textarea  rows=\"5\" style=\"width:100%\">{{strResultOfRequest |  json}}</textarea>-->\r\n</div>\r\n<div>\r\n  <button (click)=\"POSTstopHardtest(test)\">\r\n    testPOST</button>\r\n</div>\r\n<div *ngIf=\"POSTstrResultOfRequest\">\r\n  <!--<pre>{{ POSTstrResultOfRequest | json }}</pre>-->\r\n  <label class=\"formWhite\">POST Request:</label>\r\n  <pre class=\"formWhite\">{{ test | json }}</pre>\r\n  <!--<textarea  readonly rows=\"5\" style=\"width:100%\">{{ test | json }}</textarea>-->\r\n  <!--<pre></pre>-->\r\n  <label class=\"formWhite\">POST Respond:</label>\r\n  <pre class=\"formWhite\">{{POSTstrResultOfRequest| json}}</pre>\r\n  <!--<textarea  readonly #resOfReq rows=\"5\" style=\"width:100%\">{{POSTstrResultOfRequest| json}}</textarea>-->\r\n</div>\r\n\r\n<!--<div>-->\r\n  <!--<label>Result:</label>-->\r\n  <!--<input #success readonly style=\"width:100%\">-->\r\n  <!--<input #message readonly style=\"width:100%\">-->\r\n<!--</div>-->\r\n\r\n<div>\r\n  <div>\r\n    <label class=\"formWhite\">URL:</label>\r\n    <textarea [(ngModel)]=\"test.url\"></textarea>\r\n  </div>\r\n  <div>\r\n    <label class=\"formWhite\">Servers:</label>\r\n    <textarea [(ngModel)]=\"test.servers\"></textarea>\r\n  </div>\r\n  <div>\r\n    <label class=\"formWhite\">Threads:</label>\r\n    <textarea [(ngModel)]=\"test.threads\"></textarea>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hardtest/hardtest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardtestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hardtest_service__ = __webpack_require__("./src/app/hardtest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test__ = __webpack_require__("./src/app/test.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HardtestComponent = /** @class */ (function () {
    function HardtestComponent(hardtestService) {
        this.hardtestService = hardtestService;
        this.test = new __WEBPACK_IMPORTED_MODULE_2__test__["a" /* Test */]();
    }
    HardtestComponent.prototype.ngOnInit = function () {
    };
    // stopHardtest1(){
    //   this.http.get(`https://httpbin.org/headers`)
    //     .subscribe(
    //       (data:any) => {
    //         console.log(data);
    //       }
    //     )
    // }
    HardtestComponent.prototype.stopHardtest = function () {
        var _this = this;
        this.hardtestService.stopHardtest()
            .subscribe(function (respond) {
            _this.strResultOfRequest = respond;
            // this.str1 = respond.headers.Accept;
        });
    };
    HardtestComponent.prototype.POSTstopHardtest = function (test) {
        var _this = this;
        this.hardtestService.POSTstopHardtest(test)
            .subscribe(function (respond) {
            _this.POSTstrResultOfRequest = respond;
            // this.str1 = respond.headers.Accept;
        });
    };
    HardtestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hardtest',
            template: __webpack_require__("./src/app/hardtest/hardtest.component.html"),
            styles: [__webpack_require__("./src/app/hardtest/hardtest.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hardtest_service__["a" /* HardtestService */]])
    ], HardtestComponent);
    return HardtestComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    border-bottom: 1px solid #707070;\r\n    height: 50px !important;\r\n    font-size: 15px !important;\r\n}\r\n\r\n.btn-style {\r\n    border: 0px !important;\r\n    color: #ffffff !important;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    font-size: 15px !important;\r\n    width: 160px;\r\n    height: 50px;\r\n    border-radius: 0 !important;\r\n    margin-right: 0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top header\">\r\n    <a class=\"navbar-brand\" href=\"#\">HardTester</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse navbar-right\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n\r\n        <li class=\"nav-item active ml-auto\">\r\n          <button class=\"btn btn-lg btn-secondary btn-style\"><i class=\"fas fa-home\"></i> Главная</button>\r\n        </li>\r\n\r\n        <li ngbDropdown class=\"nav-item dropdown active\" >\r\n            <div ngbDropdown class=\"d-inline-block\" placement=\"bottom-center\">\r\n                <button class=\"btn btn-lg btn-secondary btn-style\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"fas fa-user-circle\"></i> UserID</button>\r\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                    <button class=\"dropdown-item btn\">Профиль</button>\r\n                    <button class=\"dropdown-item btn\">Тесты</button>\r\n                    <button class=\"dropdown-item btn\">Выход</button>\r\n                </div>\r\n            </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = ".formWhite{\r\n  background-color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<p><div *ngIf=\"messageService.messages.length\">\r\n\r\n  <h2 class=\"formWhite\">Messages</h2>\r\n  <button class=\"clear\"\r\n          (click)=\"messageService.clear()\">clear</button>\r\n  <div class=\"formWhite\" *ngFor='let message of messageService.messages'> {{message}} </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/test-form/test-form.component.css":
/***/ (function(module, exports) {

module.exports = ".Testform {\r\n    height: 450px;\r\n    background-color: white;\r\n    border-radius: 11px;\r\n    margin-top: 70px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.width-inp {\r\n    width: 85%;\r\n}\r\n\r\n.backfont {\r\n    background-color: #F1F9FF;\r\n    border: 2px solid #BCE0FD;\r\n}\r\n\r\n/** Styles for DEBUG*/\r\n\r\n.formWhite{\r\n  background-color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/test-form/test-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Testform col-6\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-10\">\r\n                <label class=\"mt-5\">Адрес сайта для тестирования</label>\r\n                <input [(ngModel)]=\"test.url\" type=\"text\" class=\"form-control backfont\" id=\"site\" placeholder=\"Ваш сайт\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-5 justify-content-center\">\r\n            <div class=\"col-5\">\r\n                <label >Таймаут ответа(с)</label>\r\n                <input [(ngModel)]=\"test.servers\" type=\"text\" class=\"form-control text-center backfont\" id=\"timeout\" placeholder=\"\">\r\n            </div>\r\n            <div class=\"col-5\">\r\n                <label>Время теста(мин)</label>\r\n                <input [(ngModel)]=\"test.threads\" type=\"text\" class=\"form-control text-center backfont\" id=\"testtime\" placeholder=\"\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-5 justify-content-center\">\r\n            <label class=\"col-10\">Характер нагрузки</label>\r\n        </div>\r\n\r\n        <div class=\"row mt-2 justify-content-center\">\r\n                <div class=\"form-check form-check-inline col-5\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\r\n                    <label class=\"form-check-label\" for=\"inlineRadio1\">Стресс-нагрузка</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-4\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\r\n                    <label class=\"form-check-label\" for=\"inlineRadio2\">Постепенная нагрузка</label>\r\n                </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-4 justify-content-center\">\r\n            <button (click)=\"startHardtest(test)\"\r\n                     class=\"col-3 btn btn-warning\">Начать тест</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--Debug information-->\r\n<div>\r\n  <!--<button (click)=\"stopHardtest()\" routerLink=\"/hardtest\">-->\r\n  <button (click)=\"stopHardtest()\">\r\n    DEBUG: stopTest</button>\r\n  <!--здесь пока ссылка тестовая, дабы хоть куда-то вела-->\r\n</div>\r\n<div *ngIf=\"stopRespond\">\r\n  <label class=\"formWhite\">GET Respond:</label>\r\n  <pre class=\"formWhite\">{{stopRespond |  json}}</pre>\r\n</div>\r\n\r\n<div *ngIf=\"startRespond\">\r\n  <label class=\"formWhite\">POST Request:</label>\r\n  <pre class=\"formWhite\">{{ test | json }}</pre>\r\n  <label class=\"formWhite\">POST Respond:</label>\r\n  <pre class=\"formWhite\">{{startRespond| json}}</pre>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/test-form/test-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hardtest_service__ = __webpack_require__("./src/app/hardtest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test__ = __webpack_require__("./src/app/test.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestFormComponent = /** @class */ (function () {
    function TestFormComponent(hardtestService) {
        this.hardtestService = hardtestService;
        this.test = new __WEBPACK_IMPORTED_MODULE_2__test__["a" /* Test */]();
    }
    TestFormComponent.prototype.ngOnInit = function () {
    };
    TestFormComponent.prototype.stopHardtest = function () {
        var _this = this;
        this.hardtestService.stopHardtest()
            .subscribe(function (respond) {
            _this.stopRespond = respond;
        });
    };
    TestFormComponent.prototype.startHardtest = function (test) {
        var _this = this;
        this.hardtestService.startHardtest(test)
            .subscribe(function (respond) {
            _this.startRespond = respond;
        });
    };
    TestFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test-form',
            template: __webpack_require__("./src/app/test-form/test-form.component.html"),
            styles: [__webpack_require__("./src/app/test-form/test-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hardtest_service__["a" /* HardtestService */]])
    ], TestFormComponent);
    return TestFormComponent;
}());



/***/ }),

/***/ "./src/app/test.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test; });
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map