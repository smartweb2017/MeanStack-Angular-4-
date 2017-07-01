webpackJsonp([1,5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
    }
    CompanyService.prototype.getAllCompanies = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/companies')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CompanyService.prototype.getCompanyDetail = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/companies/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CompanyService.prototype.createCompany = function (company) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/companies', { company: company })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CompanyService.prototype.updateCompany = function (id, company) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/companies/' + id, { company: company })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CompanyService.prototype.deleteCompanies = function (companies) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/companies/delete', companies)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CompanyService.prototype.deactivateRoles = function (companies) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/companies/deactivate', companies)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CompanyService.prototype.reactivateRoles = function (companies) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/companies/reactivate', companies)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return CompanyService;
}());
CompanyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CompanyService);

var _a;
//# sourceMappingURL=company.service.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleService = (function () {
    function RoleService(http) {
        this.http = http;
    }
    RoleService.prototype.getAllRoles = function () {
        // let headers = new Headers();
        var _this = this;
        // this.authToken = localStorage.getItem('id_token');    
        // headers.append('Authorization', this.authToken);
        // headers.append('Content-Type','application/json');
        return new Promise(function (resolve, reject) {
            _this.http.get('/roles')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoleService.prototype.getRoleDetails = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/roles/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoleService.prototype.saveRole = function (role) {
        // let headers = new Headers();
        var _this = this;
        // this.authToken = localStorage.getItem('id_token');    
        // headers.append('Authorization', this.authToken);
        // headers.append('Content-Type','application/json');
        return new Promise(function (resolve, reject) {
            _this.http.post('/roles', { role: role })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoleService.prototype.updateRole = function (id, role) {
        // let headers = new Headers();
        var _this = this;
        // this.authToken = localStorage.getItem('id_token');    
        // headers.append('Authorization', this.authToken);
        // headers.append('Content-Type','application/json');
        return new Promise(function (resolve, reject) {
            _this.http.put('/roles/' + id, { role: role })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoleService.prototype.deleteRoles = function (roles) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/roles/delete', { roles: roles })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoleService.prototype.deactivateRoles = function (roles) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/roles/deactivate', roles)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoleService.prototype.reactivateRoles = function (roles) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/roles/reactivate', roles)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return RoleService;
}());
RoleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], RoleService);

var _a;
//# sourceMappingURL=role.service.js.map

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUserDetails = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/users/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UsersService.prototype.createNewUser = function (newUser) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authToken = localStorage.getItem('id_token');
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.post('/users/register', newUser, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UsersService.prototype.updateUser = function (id, data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.put('/users/' + id, data, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UsersService.prototype.inActivateUser = function (users) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authToken = localStorage.getItem('id_token');
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/inactivate', users, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.deActivateUsers = function (users) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authToken = localStorage.getItem('id_token');
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/activate', users, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.deleteUsers = function (users) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authToken = localStorage.getItem('id_token');
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/delete', users, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getAllUsers = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authToken = localStorage.getItem('id_token');
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.get('/users', { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        // console.log('token =' + token +'  user data =' + JSON.stringify(user));    
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        //console.log(this.user);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoresService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoresService = (function () {
    function StoresService(http) {
        this.http = http;
    }
    StoresService.prototype.getAllStores = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('stores')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StoresService.prototype.saveStore = function (store) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.post('stores', store, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StoresService.prototype.getStore = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.get('stores/' + id, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StoresService.prototype.updateStore = function (id, data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.put('stores/' + id, data, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StoresService.prototype.deleteStore = function (stores) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('stores/delete', stores)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StoresService.prototype.deactivateStore = function (stores) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('stores/deactivate', stores)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StoresService.prototype.reactivateStore = function (stores) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('stores/reactivate', stores)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return StoresService;
}());
StoresService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], StoresService);

var _a;
//# sourceMappingURL=stores.service.js.map

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(126);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(location, router) {
        var _this = this;
        this.routeState = true;
        router.events.subscribe(function (val) {
            if (location.path() != '') {
                _this.route = location.path();
                if (_this.route === '/login') {
                    _this.routeState = true;
                }
                else {
                    _this.routeState = false;
                }
            }
            else {
                _this.route = 'Home';
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[app-root]',
        template: __webpack_require__(208),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_stores_stores_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_orders_orders_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pagenotfound_pagenotfound_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_users_user_user_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_stores_store_store_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navmenu_navmenu_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_header_header_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_users_createuser_createuser_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_users_createuser_customer_customer_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_users_createuser_staff_staff_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_main_main_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_users_user_staff_staff_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_users_user_customer_customer_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_validate_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_users_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_role_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_stores_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_company_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_stores_createstore_createstore_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_role_role_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_role_editrole_editrole_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_role_createrole_createrole_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_company_company_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_company_createcompany_createcompany_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_company_editcompany_editcompany_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_blank_blank_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var appRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'roles', component: __WEBPACK_IMPORTED_MODULE_31__components_role_role_component__["a" /* RoleComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_17__components_users_createuser_createuser_component__["a" /* CreateuserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_users_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_17__components_users_createuser_createuser_component__["a" /* CreateuserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'store/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_stores_store_store_component__["a" /* StoreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'createstore', component: __WEBPACK_IMPORTED_MODULE_30__components_stores_createstore_createstore_component__["a" /* CreatestoreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'stores', component: __WEBPACK_IMPORTED_MODULE_8__components_stores_stores_component__["a" /* StoresComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_9__components_orders_orders_component__["a" /* OrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'role/:id', component: __WEBPACK_IMPORTED_MODULE_32__components_role_editrole_editrole_component__["a" /* EditroleComponent */] },
    { path: 'companies', component: __WEBPACK_IMPORTED_MODULE_34__components_company_company_component__["a" /* CompanyComponent */] },
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_35__components_company_createcompany_createcompany_component__["a" /* CreatecompanyComponent */] },
    { path: 'company/:id', component: __WEBPACK_IMPORTED_MODULE_36__components_company_editcompany_editcompany_component__["a" /* EditcompanyComponent */] },
    { path: 'createrole', component: __WEBPACK_IMPORTED_MODULE_33__components_role_createrole_createrole_component__["a" /* CreateroleComponent */] },
    { path: 'blank', component: __WEBPACK_IMPORTED_MODULE_37__components_blank_blank_component__["a" /* BlankComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__components_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_stores_stores_component__["a" /* StoresComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_users_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_stores_store_store_component__["a" /* StoreComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navmenu_navmenu_component__["a" /* NavmenuComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_users_createuser_createuser_component__["a" /* CreateuserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_users_createuser_staff_staff_component__["a" /* StaffComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_users_createuser_customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_users_user_staff_staff_component__["a" /* StaffEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_users_user_customer_customer_component__["a" /* CustomerEditComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_stores_createstore_createstore_component__["a" /* CreatestoreComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_role_role_component__["a" /* RoleComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_role_editrole_editrole_component__["a" /* EditroleComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_role_createrole_createrole_component__["a" /* CreateroleComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_company_createcompany_createcompany_component__["a" /* CreatecompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_company_editcompany_editcompany_component__["a" /* EditcompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_blank_blank_component__["a" /* BlankComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_23__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_24__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_26__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_27__services_role_service__["a" /* RoleService */], __WEBPACK_IMPORTED_MODULE_29__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_28__services_stores_service__["a" /* StoresService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    return BlankComponent;
}());
BlankComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blank',
        template: __webpack_require__(209),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [])
], BlankComponent);

//# sourceMappingURL=blank.component.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_company_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyComponent = (function () {
    function CompanyComponent(companyServices) {
        this.companyServices = companyServices;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.selectedCompanies = [];
        this.getAllCompanies();
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    CompanyComponent.prototype.getAllCompanies = function () {
        var _this = this;
        this.companyServices.getAllCompanies().then(function (res) {
            _this.currentCompanies = res;
        }, function (err) {
            throw err;
        });
    };
    CompanyComponent.prototype.selectElement = function (event) {
        if (event.target.checked) {
            this.selectedCompanies.push(event.target.value);
        }
        else {
            for (var i = 0; i < this.selectedCompanies.length; i++) {
                if (this.selectedCompanies[i] === event.target.value) {
                    this.selectedCompanies.splice(i, 1);
                }
            }
        }
    };
    CompanyComponent.prototype.deleteComapnies = function () {
        var _this = this;
        this.companyServices.deleteCompanies(this.selectedCompanies).then(function (res) {
            _this.getAllCompanies();
        }, function (err) {
            console.error(err);
        });
    };
    CompanyComponent.prototype.deactivateComapnies = function () {
        var _this = this;
        this.companyServices.deactivateRoles(this.selectedCompanies).then(function (res) {
            _this.getAllCompanies();
        }, function (err) {
            console.error(err);
        });
    };
    CompanyComponent.prototype.reactivateComapnies = function () {
        var _this = this;
        this.companyServices.reactivateRoles(this.selectedCompanies).then(function (res) {
            _this.getAllCompanies();
        }, function (err) {
            console.error(err);
        });
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-company',
        template: __webpack_require__(210),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */]) === "function" && _a || Object])
], CompanyComponent);

var _a;
//# sourceMappingURL=company.component.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_company_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatecompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatecompanyComponent = (function () {
    function CreatecompanyComponent(companyService, router) {
        this.companyService = companyService;
        this.router = router;
    }
    CreatecompanyComponent.prototype.ngOnInit = function () {
        this.newCompany = {
            name: '',
            status: Boolean
        };
    };
    CreatecompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newCompany.name = this.companyName;
        this.newCompany.status = true;
        this.companyService.createCompany(this.newCompany).then(function (res) {
            _this.router.navigate(['/companies']);
        }, function (err) {
            console.error(err);
        });
    };
    CreatecompanyComponent.prototype.cancel = function () {
        this.router.navigate(['/companies']);
    };
    return CreatecompanyComponent;
}());
CreatecompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-createcompany',
        template: __webpack_require__(211),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CreatecompanyComponent);

var _a, _b;
//# sourceMappingURL=createcompany.component.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditcompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditcompanyComponent = (function () {
    function EditcompanyComponent(route, companyService, router) {
        this.route = route;
        this.companyService = companyService;
        this.router = router;
    }
    EditcompanyComponent.prototype.ngOnInit = function () {
        this.currentCompany = {
            name: '',
            status: Boolean
        };
        this.getCompanyDetails(this.route.snapshot.params['id']);
    };
    EditcompanyComponent.prototype.getCompanyDetails = function (id) {
        var _this = this;
        this.companyService.getCompanyDetail(id).then(function (res) {
            _this.currentCompany = res;
        }, function (err) {
            console.error(err);
        });
    };
    EditcompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.companyService.updateCompany(this.currentCompany._id, this.currentCompany).then(function (res) {
            console.log('success');
            _this.router.navigate(['/companies']);
        }, function (err) {
            console.error(err);
        });
    };
    EditcompanyComponent.prototype.cancel = function () {
        this.router.navigate(['/companies']);
    };
    return EditcompanyComponent;
}());
EditcompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editcompany',
        template: __webpack_require__(212),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], EditcompanyComponent);

var _a, _b, _c;
//# sourceMappingURL=editcompany.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        Morris.Bar({
            element: 'morris-bar',
            data: [{
                    x: '2011 Q1',
                    y: 3,
                    z: 2,
                    a: 3
                }, {
                    x: '2011 Q2',
                    y: 2,
                    z: null,
                    a: 1
                }, {
                    x: '2011 Q3',
                    y: 0,
                    z: 2,
                    a: 4
                }, {
                    x: '2011 Q4',
                    y: 2,
                    z: 4,
                    a: 3
                }],
            xkey: 'x',
            ykeys: ['y', 'z', 'a'],
            labels: ['Y', 'Z', 'A']
        });
        Morris.Bar({
            element: 'stacked',
            data: [{
                    x: '2011 Q1',
                    y: 3,
                    z: 2,
                    a: 3
                }, {
                    x: '2011 Q2',
                    y: 2,
                    z: null,
                    a: 1
                }, {
                    x: '2011 Q3',
                    y: 0,
                    z: 2,
                    a: 4
                }, {
                    x: '2011 Q4',
                    y: 2,
                    z: 4,
                    a: 3
                }],
            xkey: 'x',
            ykeys: ['y', 'z', 'a'],
            labels: ['Y', 'Z', 'A'],
            stacked: true
        });
        Morris.Area({
            element: 'morris-area-chart',
            data: [{
                    period: '2010',
                    iphone: 50,
                    ipad: 80,
                    itouch: 20
                }, {
                    period: '2011',
                    iphone: 130,
                    ipad: 100,
                    itouch: 80
                }, {
                    period: '2012',
                    iphone: 80,
                    ipad: 60,
                    itouch: 70
                }, {
                    period: '2013',
                    iphone: 70,
                    ipad: 200,
                    itouch: 140
                }, {
                    period: '2014',
                    iphone: 180,
                    ipad: 150,
                    itouch: 140
                }, {
                    period: '2015',
                    iphone: 105,
                    ipad: 100,
                    itouch: 80
                }, {
                    period: '2016',
                    iphone: 250,
                    ipad: 150,
                    itouch: 200
                }],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            pointSize: 3,
            fillOpacity: 0,
            pointStrokeColors: ['#00bfc7', '#fdc006', '#9675ce'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 1,
            hideHover: 'auto',
            lineColors: ['#00bfc7', '#fdc006', '#9675ce'],
            resize: true
        });
        //// Area Chart
        Morris.Area({
            element: 'morris-area-chart2',
            data: [{
                    period: '2010',
                    SiteA: 0,
                    SiteB: 0,
                }, {
                    period: '2011',
                    SiteA: 130,
                    SiteB: 100,
                }, {
                    period: '2012',
                    SiteA: 80,
                    SiteB: 60,
                }, {
                    period: '2013',
                    SiteA: 70,
                    SiteB: 200,
                }, {
                    period: '2014',
                    SiteA: 180,
                    SiteB: 150,
                }, {
                    period: '2015',
                    SiteA: 105,
                    SiteB: 90,
                }, {
                    period: '2016',
                    SiteA: 250,
                    SiteB: 150,
                }],
            xkey: 'period',
            ykeys: ['SiteA', 'SiteB'],
            labels: ['Site A', 'Site B'],
            pointSize: 0,
            fillOpacity: 0.4,
            pointStrokeColors: ['#b4becb', '#01c0c8'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 0,
            smooth: false,
            hideHover: 'auto',
            lineColors: ['#b4becb', '#01c0c8'],
            resize: true
        });
        // Line Chart
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'myfirstchart',
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [{
                    year: '2008',
                    value: 20
                }, {
                    year: '2009',
                    value: 10
                }, {
                    year: '2010',
                    value: 5
                }, {
                    year: '2011',
                    value: 5
                }, {
                    year: '2012',
                    value: 20
                }],
            // The name of the data record attribute that contains x-values.
            xkey: 'year',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['value'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Value']
        });
        Morris.Area({
            element: 'extra-area-chart',
            data: [{
                    period: '2010',
                    iphone: 0,
                    ipad: 0,
                    itouch: 0
                }, {
                    period: '2011',
                    iphone: 50,
                    ipad: 15,
                    itouch: 5
                }, {
                    period: '2012',
                    iphone: 20,
                    ipad: 50,
                    itouch: 65
                }, {
                    period: '2013',
                    iphone: 60,
                    ipad: 12,
                    itouch: 7
                }, {
                    period: '2014',
                    iphone: 30,
                    ipad: 20,
                    itouch: 120
                }, {
                    period: '2015',
                    iphone: 25,
                    ipad: 80,
                    itouch: 40
                }, {
                    period: '2016',
                    iphone: 10,
                    ipad: 10,
                    itouch: 10
                }
            ],
            lineColors: ['#fb9678', '#01c0c8', '#8698b7'],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['Site A', 'Site B', 'Site C'],
            pointSize: 0,
            lineWidth: 0,
            resize: true,
            fillOpacity: 0.8,
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            hideHover: 'auto'
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(213),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        if (!this.currentUser.logo) {
            this.logoUrl = 'assets/images/logo.png';
        }
        else {
            this.logoUrl = 'uploads/logo/' + this.currentUser.logo;
        }
        if (!this.currentUser.photo) {
            this.photoUrl = 'assets/images/photo.jpg';
        }
        else {
            this.photoUrl = 'uploads/logo/' + this.currentUser.photo;
        }
        // Minimalize menu
        $('.navbar-minimalize').on('click', function () {
            if ($(window).width() > 991) {
                $("body").toggleClass("mini-navbar");
            }
            else {
                $("body").toggleClass("mini-navbar");
            }
        });
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
        // $.material.init();
        $(function () {
            $('.scroller').slimScroll({
                height: '250px'
            });
            //$('#input-date-added').datepicker();
            //$('#input-date-modified').datepicker();
            $('#menu').metisMenu();
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(214),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.error = '';
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.user = JSON.parse(localStorage.getItem('user'));
                if (_this.user.accounttype === 'super') {
                    _this.router.navigate(['/dashboard']);
                }
                if (_this.user.accounttype === 'staff' || _this.user.accounttype == 'customer') {
                    if (!_this.user.role) {
                        if (!_this.user.special_permissions) {
                            _this.router.navigate(['/blank']);
                        }
                        else {
                            _this.router.navigate(['/' + _this.user.special_permissions.home_url]);
                        }
                    }
                    else {
                        if (!_this.user.role.home_url) {
                            _this.router.navigate(['/dashboard']);
                        }
                        else {
                            _this.router.navigate(['/' + _this.user.role.home_url]);
                        }
                    }
                }
                //this.router.navigate([this.user.role.home_url]);
            }
            else {
                _this.router.navigate(['login']);
                _this.error = data.msg;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(215),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(216),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavmenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavmenuComponent = (function () {
    function NavmenuComponent() {
    }
    NavmenuComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    };
    return NavmenuComponent;
}());
NavmenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navmenu',
        template: __webpack_require__(217),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], NavmenuComponent);

//# sourceMappingURL=navmenu.component.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = (function () {
    function OrdersComponent() {
        var _this = this;
        this.rows = [];
        this.temp = [];
        this.fetch(function (data) {
            //cache our list
            _this.temp = data.slice();
            //push our initial complete list
            _this.rows = data;
        });
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    OrdersComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/order.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    OrdersComponent.prototype.updateFilter = function (event) {
        var val = event.target.value;
        //filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(218),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [])
], OrdersComponent);

//# sourceMappingURL=orders.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    return PagenotfoundComponent;
}());
PagenotfoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagenotfound',
        template: __webpack_require__(219),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [])
], PagenotfoundComponent);

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(220),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_role_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateroleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateroleComponent = (function () {
    function CreateroleComponent(router, roleService) {
        this.router = router;
        this.roleService = roleService;
    }
    CreateroleComponent.prototype.ngOnInit = function () {
        this.getAllRoles();
        this.error = '';
        this.newRole = {
            role_name: '',
            staff: '',
            customer: '',
            store: '',
            order: '',
            role: '',
            company: '',
            home_url: '',
            status: ''
        };
        this.staff = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.customer = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.store = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.order = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.role = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.company = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.display_dashboard = true;
        this.home_url = '';
    };
    CreateroleComponent.prototype.getAllRoles = function () {
        var _this = this;
        this.roleService.getAllRoles().then(function (res) {
            _this.currentRoles = res;
        }, function (err) {
            console.log(err);
        });
    };
    CreateroleComponent.prototype.save = function () {
        var _this = this;
        this.newRole.staff = this.staff;
        this.newRole.customer = this.customer;
        this.newRole.store = this.store;
        this.newRole.order = this.order;
        this.newRole.role = this.role;
        this.newRole.company = this.company;
        this.newRole.home_url = this.home_url;
        this.newRole.status = true;
        this.newRole.display_dashboard = this.display_dashboard;
        this.roleService.saveRole(this.newRole).then(function (res) {
            _this.router.navigate(['/roles']);
        }, function (err) {
            alert('Something went wrong!!!');
        });
    };
    CreateroleComponent.prototype.cancel = function () {
        this.router.navigate(['/roles']);
    };
    return CreateroleComponent;
}());
CreateroleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-createrole',
        template: __webpack_require__(221),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_role_service__["a" /* RoleService */]) === "function" && _b || Object])
], CreateroleComponent);

var _a, _b;
//# sourceMappingURL=createrole.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_role_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditroleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditroleComponent = (function () {
    function EditroleComponent(route, router, roleService) {
        this.route = route;
        this.router = router;
        this.roleService = roleService;
        this.currentRole = {};
        this.staff = {};
        this.customer = {};
        this.store = {};
        this.order = {};
        this.role = {};
        this.company = {};
    }
    EditroleComponent.prototype.ngOnInit = function () {
        this.getRoleDetails(this.route.snapshot.params['id']);
    };
    EditroleComponent.prototype.getRoleDetails = function (id) {
        var _this = this;
        this.roleService.getRoleDetails(id).then(function (res) {
            _this.currentRole = res;
            _this.staff = res['staff'];
            _this.customer = res['customer'];
            _this.store = res['store'];
            _this.order = res['order'];
            _this.role = res['role'];
            _this.company = res['company'];
            _this.status = res['status'];
            _this.display_dashboard = res['display_dashboard'];
        }, function (err) {
            console.log(err);
        });
    };
    EditroleComponent.prototype.save = function () {
        var _this = this;
        this.currentRole.staff = this.staff;
        this.currentRole.customer = this.customer;
        this.currentRole.order = this.order;
        this.currentRole.store = this.store;
        this.currentRole.role = this.role;
        this.currentRole.status = this.status;
        this.currentRole.display_dashboard = this.display_dashboard;
        console.log(this.currentRole);
        this.roleService.updateRole(this.currentRole._id, this.currentRole).then(function (res) {
            _this.router.navigate(['/roles']);
        }, function (err) {
            console.log(err);
        });
    };
    EditroleComponent.prototype.cancel = function () {
        this.router.navigate(['/roles']);
    };
    return EditroleComponent;
}());
EditroleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editrole',
        template: __webpack_require__(222),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_role_service__["a" /* RoleService */]) === "function" && _c || Object])
], EditroleComponent);

var _a, _b, _c;
//# sourceMappingURL=editrole.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_role_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleComponent = (function () {
    function RoleComponent(router, roleService) {
        this.router = router;
        this.roleService = roleService;
    }
    RoleComponent.prototype.ngOnInit = function () {
        this.roles = [];
        this.selectedRoles = [];
        this.getAllRoles();
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    RoleComponent.prototype.getAllRoles = function () {
        var _this = this;
        this.roleService.getAllRoles().then(function (res) {
            _this.roles = res;
        }, function (err) {
            console.log(err);
        });
    };
    ;
    RoleComponent.prototype.selectElement = function (event) {
        if (event.target.checked) {
            this.selectedRoles.push(event.target.value);
        }
        else {
            for (var i = 0; i < this.selectedRoles.length; i++) {
                if (this.selectedRoles[i] === event.target.value) {
                    this.selectedRoles.splice(i, 1);
                }
            }
        }
    };
    RoleComponent.prototype.deleteRoles = function () {
        var _this = this;
        this.roleService.deleteRoles(this.selectedRoles).then(function (res) {
            if (res['success']) {
                _this.getAllRoles();
            }
        }, function (err) {
            console.error(err);
        });
    };
    RoleComponent.prototype.reactivateRoles = function () {
        var _this = this;
        this.roleService.reactivateRoles(this.selectedRoles).then(function (res) {
            _this.getAllRoles();
        }, function (err) {
            console.error(err);
        });
    };
    RoleComponent.prototype.deactivateRoles = function () {
        var _this = this;
        this.roleService.deactivateRoles(this.selectedRoles).then(function (res) {
            _this.getAllRoles();
        }, function (err) {
            console.error(err);
        });
    };
    return RoleComponent;
}());
RoleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-role',
        template: __webpack_require__(223),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_role_service__["a" /* RoleService */]) === "function" && _b || Object])
], RoleComponent);

var _a, _b;
//# sourceMappingURL=role.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stores_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatestoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatestoreComponent = (function () {
    function CreatestoreComponent(route, router, storeService) {
        this.route = route;
        this.router = router;
        this.storeService = storeService;
        this.regionData = { "Northland": ["Far North", "Kaipara", "Whangarei"],
            "Auckland": ["Auckland City", "Franklin", "Hauraki Gulf Islands", "Manukau City", "North Shore City", "Papakura", "Rodney", "Waiheke Island", "Waitakere City"],
            "Bay Of Plenty": ["Kawerau", "Opotiki", "Rotorua", "Tauranga", "Wetern Bay Of Plenty", "Whakatane"],
            "Coromandel": ["Thames-Coromandel"],
            "Waikato": ["Hamilton", "Hauraki", "Matamata-Piako", "Otorohanga", "South Waikato", "Waikato", "Waipa", "Waitomo"],
            "Gisborne": ["Gisborne"],
            "Central North Island": ["Ruapehu", "Taupo"],
            "Hawkes Bay": ["Central Hawkes Bay", "Hastings", "Napier City", "Wairoa"],
            "Taranaki": ["New Plymouth", "South Taranaki", "Stratford"],
            "Manawatu / Wanganui ": ["Horowhenua", "Manawatu", "Palmerston North City", "Rangitikei", "Tararua", "Wanganui"],
            "Wairarapa": ["Carterton", "Masterton", "South Wairarapa"],
            "Wellington": ["Kapiti", "Lower Hutt City", "Porirua City", "Upper Hutt City", "Wellington City"],
            "Marlborough": ["Kaikoura", "Marlborough"],
            "Nelson & Bays": ["Nelson", "Tasman"],
            "West Coast": ["Buller", "Grey", "Westland"],
            "Canterbury": ["Ashburton", "Banks Peninsula", "Christchurch City", "Hurunui", "Mackenzie", "Selwyn", "Timaru", "Waimakariri", "Waimate"],
            "Central Otago / Lakes District": ["Central Otago", "Queenstown", "Wanaka"],
            "Otago": ["Clutha", "Dunedin City", "Waitaki"],
            "Southland": ["Gore", "Invercargill City", "Southland"],
            "Pacific Islands": ["Chatham Islands", "Fiji", "New Caledonia", "Rarotonga", "Samoa", "Tonga", "Vanuatu"]
        };
        this.regions = Object.keys(this.regionData);
    }
    CreatestoreComponent.prototype.ngOnInit = function () {
        this.store = {
            store_title: '',
            key_contact: '',
            status: Boolean
        };
        this.store_info = {
            phone: '',
            email: '',
            fax: '',
            address: {
                address1: '',
                address2: ''
            },
            city: '',
            region: '',
            postcode: '',
            country: ''
        };
    };
    CreatestoreComponent.prototype.selectRegion = function (event) {
        var region = event.target.value;
        this.cities = this.regionData[region];
    };
    CreatestoreComponent.prototype.onSubmit = function () {
        var _this = this;
        this.store['store_info'] = this.store_info;
        this.store.status = true;
        this.storeService.saveStore(JSON.stringify(this.store)).then(function (result) {
            _this.router.navigate(['/stores']);
        }, function (err) {
            console.log(err);
        });
    };
    CreatestoreComponent.prototype.cancel = function () {
        this.router.navigate(['/stores']);
    };
    return CreatestoreComponent;
}());
CreatestoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-createstore',
        template: __webpack_require__(224),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_stores_service__["a" /* StoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stores_service__["a" /* StoresService */]) === "function" && _c || Object])
], CreatestoreComponent);

var _a, _b, _c;
//# sourceMappingURL=createstore.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stores_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreComponent = (function () {
    function StoreComponent(route, router, storeService) {
        this.route = route;
        this.router = router;
        this.storeService = storeService;
        this.store = {};
        this.store_info = {};
        this.address = {};
        this.regionData = { "Northland": ["Far North", "Kaipara", "Whangarei"],
            "Auckland": ["Auckland City", "Franklin", "Hauraki Gulf Islands", "Manukau City", "North Shore City", "Papakura", "Rodney", "Waiheke Island", "Waitakere City"],
            "Bay Of Plenty": ["Kawerau", "Opotiki", "Rotorua", "Tauranga", "Wetern Bay Of Plenty", "Whakatane"],
            "Coromandel": ["Thames-Coromandel"],
            "Waikato": ["Hamilton", "Hauraki", "Matamata-Piako", "Otorohanga", "South Waikato", "Waikato", "Waipa", "Waitomo"],
            "Gisborne": ["Gisborne"],
            "Central North Island": ["Ruapehu", "Taupo"],
            "Hawkes Bay": ["Central Hawkes Bay", "Hastings", "Napier City", "Wairoa"],
            "Taranaki": ["New Plymouth", "South Taranaki", "Stratford"],
            "Manawatu / Wanganui ": ["Horowhenua", "Manawatu", "Palmerston North City", "Rangitikei", "Tararua", "Wanganui"],
            "Wairarapa": ["Carterton", "Masterton", "South Wairarapa"],
            "Wellington": ["Kapiti", "Lower Hutt City", "Porirua City", "Upper Hutt City", "Wellington City"],
            "Marlborough": ["Kaikoura", "Marlborough"],
            "Nelson & Bays": ["Nelson", "Tasman"],
            "West Coast": ["Buller", "Grey", "Westland"],
            "Canterbury": ["Ashburton", "Banks Peninsula", "Christchurch City", "Hurunui", "Mackenzie", "Selwyn", "Timaru", "Waimakariri", "Waimate"],
            "Central Otago / Lakes District": ["Central Otago", "Queenstown", "Wanaka"],
            "Otago": ["Clutha", "Dunedin City", "Waitaki"],
            "Southland": ["Gore", "Invercargill City", "Southland"],
            "Pacific Islands": ["Chatham Islands", "Fiji", "New Caledonia", "Rarotonga", "Samoa", "Tonga", "Vanuatu"]
        };
        this.regions = Object.keys(this.regionData);
    }
    StoreComponent.prototype.ngOnInit = function () {
        this.getStore(this.route.snapshot.params['id']);
    };
    StoreComponent.prototype.selectRegion = function (event) {
        var region = event.target.value;
        this.cities = this.regionData[region];
    };
    StoreComponent.prototype.getStore = function (id) {
        var _this = this;
        this.storeService.getStore(id).then(function (res) {
            _this.store = res;
            _this.store_info = res['store_info'];
            _this.address = _this.store_info['address'];
        }, function (err) {
            console.log(err);
        });
    };
    StoreComponent.prototype.cancel = function () {
        this.router.navigate(['/stores']);
    };
    StoreComponent.prototype.onSubmit = function () {
        var _this = this;
        this.store_info['address'] = this.address;
        this.store['store_info'] = this.store_info;
        this.storeService.updateStore(this.store['_id'], JSON.stringify(this.store)).then(function (result) {
            _this.router.navigate(['/stores']);
        }, function (err) {
            console.log(err);
        });
    };
    return StoreComponent;
}());
StoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store',
        template: __webpack_require__(225),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_stores_service__["a" /* StoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stores_service__["a" /* StoresService */]) === "function" && _c || Object])
], StoreComponent);

var _a, _b, _c;
//# sourceMappingURL=store.component.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stores_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoresComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoresComponent = (function () {
    function StoresComponent(storeService) {
        this.storeService = storeService;
        this.regionData = {
            "Northland": ["Far North", "Kaipara", "Whangarei"],
            "Auckland": ["Auckland City", "Franklin", "Hauraki Gulf Islands", "Manukau City", "North Shore City", "Papakura", "Rodney", "Waiheke Island", "Waitakere City"],
            "Bay Of Plenty": ["Kawerau", "Opotiki", "Rotorua", "Tauranga", "Wetern Bay Of Plenty", "Whakatane"],
            "Coromandel": ["Thames-Coromandel"],
            "Waikato": ["Hamilton", "Hauraki", "Matamata-Piako", "Otorohanga", "South Waikato", "Waikato", "Waipa", "Waitomo"],
            "Gisborne": ["Gisborne"],
            "Central North Island": ["Ruapehu", "Taupo"],
            "Hawkes Bay": ["Central Hawkes Bay", "Hastings", "Napier City", "Wairoa"],
            "Taranaki": ["New Plymouth", "South Taranaki", "Stratford"],
            "Manawatu / Wanganui ": ["Horowhenua", "Manawatu", "Palmerston North City", "Rangitikei", "Tararua", "Wanganui"],
            "Wairarapa": ["Carterton", "Masterton", "South Wairarapa"],
            "Wellington": ["Kapiti", "Lower Hutt City", "Porirua City", "Upper Hutt City", "Wellington City"],
            "Marlborough": ["Kaikoura", "Marlborough"],
            "Nelson & Bays": ["Nelson", "Tasman"],
            "West Coast": ["Buller", "Grey", "Westland"],
            "Canterbury": ["Ashburton", "Banks Peninsula", "Christchurch City", "Hurunui", "Mackenzie", "Selwyn", "Timaru", "Waimakariri", "Waimate"],
            "Central Otago / Lakes District": ["Central Otago", "Queenstown", "Wanaka"],
            "Otago": ["Clutha", "Dunedin City", "Waitaki"],
            "Southland": ["Gore", "Invercargill City", "Southland"],
            "Pacific Islands": ["Chatham Islands", "Fiji", "New Caledonia", "Rarotonga", "Samoa", "Tonga", "Vanuatu"]
        };
        this.regions = Object.keys(this.regionData);
    }
    StoresComponent.prototype.ngOnInit = function () {
        this.selectedStores = [];
        this.getAllStores();
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    StoresComponent.prototype.getAllStores = function () {
        var _this = this;
        this.storeService.getAllStores().then(function (res) {
            _this.stores = res;
            _this.filteredStores = _this.stores;
        }, function (err) {
            console.log(err);
        });
    };
    StoresComponent.prototype.selectRegion = function (event) {
        var region = event.target.value;
        this.cities = this.regionData[region];
        var temp = [];
        if (region === '') {
            this.filteredStores = this.stores;
        }
        else {
            for (var i = 0; i < this.stores.length; i++) {
                if (this.stores[i].store_info.region === region) {
                    temp.push(this.stores[i]);
                }
            }
            this.filteredStores = temp;
        }
    };
    StoresComponent.prototype.selectCity = function (event) {
        var city = event.target.value;
        var temp = [];
        if (city === '') {
            if (this.filterRegion === '') {
                this.filteredStores = this.stores;
            }
            else {
                for (var i = 0; i < this.stores.length; i++) {
                    if (this.stores[i].store_info.region === this.filterRegion) {
                        temp.push(this.stores[i]);
                    }
                }
                this.filteredStores = temp;
            }
        }
        else {
            for (var i = 0; i < this.stores.length; i++) {
                if (this.stores[i].store_info.city == city) {
                    temp.push(this.stores[i]);
                }
            }
            this.filteredStores = temp;
        }
    };
    StoresComponent.prototype.selectElement = function (event) {
        if (event.target.checked) {
            this.selectedStores.push(event.target.value);
        }
        else {
            for (var i = 0; i < this.selectedStores.length; i++) {
                if (this.selectedStores[i] === event.target.value) {
                    this.selectedStores.splice(i, 1);
                }
            }
        }
    };
    StoresComponent.prototype.deleteStores = function () {
        var _this = this;
        this.storeService.deleteStore(this.selectedStores).then(function (res) {
            _this.getAllStores();
        }, function (err) {
            console.error(err);
        });
    };
    StoresComponent.prototype.deactivateStores = function () {
        var _this = this;
        this.storeService.deactivateStore(this.selectedStores).then(function (res) {
            _this.getAllStores();
        }, function (err) {
            console.error(err);
        });
    };
    StoresComponent.prototype.reactivateStores = function () {
        var _this = this;
        this.storeService.reactivateStore(this.selectedStores).then(function (res) {
            _this.getAllStores();
        }, function (err) {
            console.error(err);
        });
    };
    return StoresComponent;
}());
StoresComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stores',
        template: __webpack_require__(226),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_stores_service__["a" /* StoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stores_service__["a" /* StoresService */]) === "function" && _a || Object])
], StoresComponent);

var _a;
//# sourceMappingURL=stores.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateuserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateuserComponent = (function () {
    function CreateuserComponent() {
    }
    CreateuserComponent.prototype.ngOnInit = function () {
        this.usertype = '';
        this.user = JSON.parse(localStorage.getItem('user'));
        // this.usertype = this.user.accounttype;
    };
    return CreateuserComponent;
}());
CreateuserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-createuser',
        template: __webpack_require__(227),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [])
], CreateuserComponent);

//# sourceMappingURL=createuser.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_role_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_company_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerComponent = (function () {
    function CustomerComponent(http, router, roleService, companyService, userService) {
        this.http = http;
        this.router = router;
        this.roleService = roleService;
        this.companyService = companyService;
        this.userService = userService;
        this.filesToLogo = [];
        this.filesToPhoto = [];
        this.users = [];
        this.modalValid = true;
        this.regionData = {
            "Northland": ["Far North", "Kaipara", "Whangarei"],
            "Auckland": ["Auckland City", "Franklin", "Hauraki Gulf Islands", "Manukau City", "North Shore City", "Papakura", "Rodney", "Waiheke Island", "Waitakere City"],
            "Bay Of Plenty": ["Kawerau", "Opotiki", "Rotorua", "Tauranga", "Wetern Bay Of Plenty", "Whakatane"],
            "Coromandel": ["Thames-Coromandel"],
            "Waikato": ["Hamilton", "Hauraki", "Matamata-Piako", "Otorohanga", "South Waikato", "Waikato", "Waipa", "Waitomo"],
            "Gisborne": ["Gisborne"],
            "Central North Island": ["Ruapehu", "Taupo"],
            "Hawkes Bay": ["Central Hawkes Bay", "Hastings", "Napier City", "Wairoa"],
            "Taranaki": ["New Plymouth", "South Taranaki", "Stratford"],
            "Manawatu / Wanganui ": ["Horowhenua", "Manawatu", "Palmerston North City", "Rangitikei", "Tararua", "Wanganui"],
            "Wairarapa": ["Carterton", "Masterton", "South Wairarapa"],
            "Wellington": ["Kapiti", "Lower Hutt City", "Porirua City", "Upper Hutt City", "Wellington City"],
            "Marlborough": ["Kaikoura", "Marlborough"],
            "Nelson & Bays": ["Nelson", "Tasman"],
            "West Coast": ["Buller", "Grey", "Westland"],
            "Canterbury": ["Ashburton", "Banks Peninsula", "Christchurch City", "Hurunui", "Mackenzie", "Selwyn", "Timaru", "Waimakariri", "Waimate"],
            "Central Otago / Lakes District": ["Central Otago", "Queenstown", "Wanaka"],
            "Otago": ["Clutha", "Dunedin City", "Waitaki"],
            "Southland": ["Gore", "Invercargill City", "Southland"],
            "Pacific Islands": ["Chatham Islands", "Fiji", "New Caledonia", "Rarotonga", "Samoa", "Tonga", "Vanuatu"]
        };
        this.regions = Object.keys(this.regionData);
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.newCompany = {
            name: '',
            status: ''
        };
        this.staffPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.customerPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.storePermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.orderPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.rolePermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.companyPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.logoUrl = 'assets/images/default-logo.jpg';
        this.photoUrl = 'assets/images/photo.jpg';
        this.customer = {
            username: '',
            password: '',
            company: '',
            role_name: '',
            parent: '',
            account_email: '',
            special_permissions: {}
        };
        this.user_info = {
            email: '',
            phone: '',
            mobile: ''
        };
        this.customer_info = {
            position: '',
            prefered_contact: '',
            address: {
                address1: '',
                address2: ''
            },
            city: '',
            region: '',
            postcode: '',
            key_contact: '',
            customer_type: ''
        };
        this.getAllCompanies();
        this.getAllRoles();
        this.getAllUsers();
    };
    //Get All Users
    CustomerComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().then(function (res) {
            for (var i = 0; i < Object.keys(res).length; i++) {
                if (res[i].accounttype === 'customer') {
                    _this.users.push(res[i].username);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Get Current Companies
    CustomerComponent.prototype.getAllCompanies = function () {
        var _this = this;
        this.companyService.getAllCompanies().then(function (res) {
            _this.currentCompanies = [];
            for (var i = 0; i < Object.keys(res).length; i++) {
                _this.currentCompanies.push(res[i]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Get Current Roles
    CustomerComponent.prototype.getAllRoles = function () {
        var _this = this;
        this.roleService.getAllRoles().then(function (res) {
            _this.roles = res;
        }, function (err) {
            console.log(err);
        });
    };
    //Select Region
    CustomerComponent.prototype.selectRegion = function (event) {
        var region = event.target.value;
        this.cities = this.regionData[region];
    };
    CustomerComponent.prototype.onSubmit = function () {
        var _this = this;
        this.customer['user_info'] = this.user_info;
        this.customer.user_info.phone = this.user_info.phone;
        this.customer.user_info.mobile = this.user_info.mobile;
        this.customer['status'] = true;
        this.customer['accounttype'] = 'customer';
        this.customer['customer_info'] = this.customer_info;
        if (this.filesToLogo.length !== 0) {
            this.uploadLogo();
        }
        if (this.filesToPhoto.length !== 0) {
            this.uploadPhoto();
        }
        this.userService.createNewUser(this.customer).then(function (result) {
            _this.router.navigate(['/users']);
        }, function (err) {
            console.log(err);
        });
    };
    CustomerComponent.prototype.cancel = function () {
        this.router.navigate(['/users']);
    };
    CustomerComponent.prototype.uploadLogo = function () {
        var formData = new FormData();
        var files = this.filesToLogo;
        formData.append("uploads[]", files[0], files[0]['name']);
        this.http.post('upload', formData)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return console.log(res); });
        this.customer['logo'] = files[0]['name'];
    };
    CustomerComponent.prototype.uploadPhoto = function () {
        var formData = new FormData();
        var files = this.filesToPhoto;
        formData.append("uploads[]", files[0], files[0]['name']);
        this.http.post('upload', formData)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return console.log(res); });
        this.customer['photo'] = files[0]['name'];
    };
    CustomerComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.filesToLogo = event.target.files;
            this.logo = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.logoUrl = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    CustomerComponent.prototype.readPhoto = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.filesToPhoto = event.target.files;
            this.photo = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.photoUrl = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    CustomerComponent.prototype.createCompany = function () {
        var _this = this;
        this.currentCompanies.push(this.newCompany.name);
        this.customer.company = this.newCompany.name;
        this.newCompany.status = 'active';
        this.companyService.createCompany(this.newCompany).then(function (res) {
            _this.getAllCompanies();
        }, function (err) {
            console.log(err);
        });
    };
    CustomerComponent.prototype.savePermissions = function () {
        this.customer.special_permissions.staff = this.staffPermission;
        this.customer.special_permissions.customer = this.customerPermission;
        this.customer.special_permissions.store = this.storePermission;
        this.customer.special_permissions.order = this.orderPermission;
        this.customer.special_permissions.company = this.orderPermission;
        this.customer.special_permissions.role = this.rolePermission;
        this.customer.special_permissions.company = this.companyPermission;
        this.customer.special_permissions.display_dashboard = this.display_dashboard;
        this.customer.special_permissions.home_url = this.home_url;
        this.modalValid = false;
        this.customer.role_name = '';
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-user',
        template: __webpack_require__(228),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_role_service__["a" /* RoleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */]) === "function" && _e || Object])
], CustomerComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=customer.component.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_role_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffComponent = (function () {
    function StaffComponent(router, roleService, companyService, userService) {
        this.router = router;
        this.roleService = roleService;
        this.companyService = companyService;
        this.userService = userService;
        this.users = []; //For select Parent user
        this.currentCompanies = [];
        this.modalValid = true;
    }
    StaffComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.newCompany = {
            name: '',
            status: ''
        };
        this.staff = {
            username: '',
            parent: '',
            password: '',
            company: '',
            role_name: '',
            special_permissions: {}
        };
        this.user_info = {
            email: '',
            phone: '',
            mobile: ''
        };
        this.staffPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.customerPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.storePermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.orderPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.rolePermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.companyPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.getAllCompanies();
        this.getAllRoles();
        this.getAllUsers();
    };
    //Get All Users
    StaffComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().then(function (res) {
            for (var i = 0; i < Object.keys(res).length; i++) {
                if (res[i].accounttype === 'staff') {
                    _this.users.push(res[i].username);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Get Current Companies
    StaffComponent.prototype.getAllCompanies = function () {
        var _this = this;
        this.companyService.getAllCompanies().then(function (res) {
            _this.currentCompanies = [];
            for (var i = 0; i < Object.keys(res).length; i++) {
                _this.currentCompanies.push(res[i]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Get Current Roles
    StaffComponent.prototype.getAllRoles = function () {
        var _this = this;
        this.roleService.getAllRoles().then(function (res) {
            _this.roles = res;
        }, function (err) {
            console.log(err);
        });
    };
    StaffComponent.prototype.onSubmit = function () {
        var _this = this;
        this.staff['user_info'] = this.user_info;
        this.staff.user_info.phone = this.user_info.phone;
        this.staff.user_info.mobile = this.user_info.mobile;
        this.staff['status'] = 'active';
        this.staff['accounttype'] = 'staff';
        this.userService.createNewUser(this.staff).then(function (result) {
            _this.router.navigate(['/users']);
        }, function (err) {
            console.log(err);
        });
    };
    StaffComponent.prototype.cancel = function () {
        this.router.navigate(['/users']);
    };
    StaffComponent.prototype.createCompany = function () {
        var _this = this;
        this.currentCompanies.push(this.newCompany.name);
        this.staff.company = this.newCompany.name;
        this.newCompany.status = 'active';
        this.companyService.createCompany(this.newCompany).then(function (res) {
            _this.getAllCompanies();
        }, function (err) {
            console.log(err);
        });
    };
    StaffComponent.prototype.savePermissions = function () {
        this.staff.special_permissions.staff = this.staffPermission;
        this.staff.special_permissions.customer = this.customerPermission;
        this.staff.special_permissions.store = this.storePermission;
        this.staff.special_permissions.order = this.orderPermission;
        this.staff.special_permissions.company = this.companyPermission;
        this.staff.special_permissions.role = this.rolePermission;
        this.staff.special_permissions.display_dashboard = this.display_dashboard;
        this.staff.special_permissions.home_url = this.home_url;
        this.staff.role_name = '';
        this.modalValid = false;
    };
    return StaffComponent;
}());
StaffComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'staff-user',
        template: __webpack_require__(229),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_role_service__["a" /* RoleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _d || Object])
], StaffComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=staff.component.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_role_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_company_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerEditComponent = (function () {
    function CustomerEditComponent(http, router, roleService, companyService, userService) {
        this.http = http;
        this.router = router;
        this.roleService = roleService;
        this.companyService = companyService;
        this.userService = userService;
        this.filesToUpload = [];
        this.filesToPhoto = [];
        this.modalValid = true;
        this.users = [];
        this.usersForParents = [];
        this.usersForChilds = [];
        this.regionData = {
            "Northland": ["Far North", "Kaipara", "Whangarei"],
            "Auckland": ["Auckland City", "Franklin", "Hauraki Gulf Islands", "Manukau City", "North Shore City", "Papakura", "Rodney", "Waiheke Island", "Waitakere City"],
            "Bay Of Plenty": ["Kawerau", "Opotiki", "Rotorua", "Tauranga", "Wetern Bay Of Plenty", "Whakatane"],
            "Coromandel": ["Thames-Coromandel"],
            "Waikato": ["Hamilton", "Hauraki", "Matamata-Piako", "Otorohanga", "South Waikato", "Waikato", "Waipa", "Waitomo"],
            "Gisborne": ["Gisborne"],
            "Central North Island": ["Ruapehu", "Taupo"],
            "Hawkes Bay": ["Central Hawkes Bay", "Hastings", "Napier City", "Wairoa"],
            "Taranaki": ["New Plymouth", "South Taranaki", "Stratford"],
            "Manawatu / Wanganui ": ["Horowhenua", "Manawatu", "Palmerston North City", "Rangitikei", "Tararua", "Wanganui"],
            "Wairarapa": ["Carterton", "Masterton", "South Wairarapa"],
            "Wellington": ["Kapiti", "Lower Hutt City", "Porirua City", "Upper Hutt City", "Wellington City"],
            "Marlborough": ["Kaikoura", "Marlborough"],
            "Nelson & Bays": ["Nelson", "Tasman"],
            "West Coast": ["Buller", "Grey", "Westland"],
            "Canterbury": ["Ashburton", "Banks Peninsula", "Christchurch City", "Hurunui", "Mackenzie", "Selwyn", "Timaru", "Waimakariri", "Waimate"],
            "Central Otago / Lakes District": ["Central Otago", "Queenstown", "Wanaka"],
            "Otago": ["Clutha", "Dunedin City", "Waitaki"],
            "Southland": ["Gore", "Invercargill City", "Southland"],
            "Pacific Islands": ["Chatham Islands", "Fiji", "New Caledonia", "Rarotonga", "Samoa", "Tonga", "Vanuatu"]
        };
        this.regions = Object.keys(this.regionData);
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.customer = this.user.user;
        this.user_info = this.user.user['user_info'];
        this.logoUrl = '/uploads/logo/' + this.customer.logo;
        this.photoUrl = '/uploads/logo/' + this.customer.photo;
        this.customer_info = this.user.user.customer_info;
        this.address = this.customer_info.address;
        this.cities = this.regionData[this.customer.customer_info.region];
        this.childs = this.customer.child;
        this.staffPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.customerPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.storePermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.orderPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.rolePermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.companyPermission = {
            create: '',
            edit: '',
            delete: '',
            view: ''
        };
        this.newCompany = {
            name: '',
            status: ''
        };
        if (this.customer.special_permissions) {
            this.companyPermission = this.customer.special_permissions.company;
            this.staffPermission = this.customer.special_permissions.staff;
            this.customerPermission = this.customer.special_permissions.customer;
            this.orderPermission = this.customer.special_permissions.order;
            this.storePermission = this.customer.special_permissions.store;
            this.rolePermission = this.customer.special_permissions.role;
            this.home_url = this.customer.special_permissions.home_url;
            this.display_dashboard = this.customer.special_permissions.display_dashboard;
        }
        this.getAllCompanies();
        this.getAllRoles();
        this.getAllUsers();
    };
    //Get All Users
    CustomerEditComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().then(function (res) {
            for (var i = 0; i < Object.keys(res).length; i++) {
                if (res[i].accounttype === 'customer' && res[i].username !== _this.user.username) {
                    _this.users.push(res[i].username);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Get Current Companies
    CustomerEditComponent.prototype.getAllCompanies = function () {
        var _this = this;
        this.companyService.getAllCompanies().then(function (res) {
            _this.currentCompanies = [];
            for (var i = 0; i < Object.keys(res).length; i++) {
                _this.currentCompanies.push(res[i]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Get Current Roles
    CustomerEditComponent.prototype.getAllRoles = function () {
        var _this = this;
        this.roleService.getAllRoles().then(function (res) {
            _this.roles = res;
        }, function (err) {
            console.log(err);
        });
    };
    //Select Region
    CustomerEditComponent.prototype.selectRegion = function (event) {
        var region = event.target.value;
        this.cities = this.regionData[region];
    };
    CustomerEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.customer['user_info'] = this.user_info;
        this.customer['status'] = 'active';
        this.customer['accounttype'] = 'customer';
        this.customer['child'] = this.childs;
        this.customer['customer_info'] = this.customer_info;
        if (this.logo) {
            this.upload();
        }
        if (this.photo) {
            this.uploadPhoto();
        }
        console.log(this.customer);
        this.userService.updateUser(this.customer.id, this.customer).then(function (result) {
            _this.router.navigate(['/users']);
        }, function (err) {
            console.log(err);
        });
    };
    CustomerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/users']);
    };
    CustomerEditComponent.prototype.upload = function () {
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append("uploads[]", files[0], files[0]['name']);
        this.http.post('upload', formData)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return console.log(res); });
        this.customer['logo'] = files[0]['name'];
    };
    CustomerEditComponent.prototype.uploadPhoto = function () {
        var formData = new FormData();
        var files = this.filesToPhoto;
        formData.append("uploads[]", files[0], files[0]['name']);
        this.http.post('upload', formData)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return console.log(res); });
        this.customer['photo'] = files[0]['name'];
    };
    CustomerEditComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.filesToUpload = event.target.files;
            this.logo = event.target.files[0];
            console.log(this.logo);
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.logoUrl = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    CustomerEditComponent.prototype.readPhoto = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.filesToPhoto = event.target.files;
            this.photo = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.photoUrl = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    CustomerEditComponent.prototype.createCompany = function () {
        var _this = this;
        this.currentCompanies.push(this.newCompany.name);
        this.customer.company = this.newCompany.name;
        this.newCompany.status = 'active';
        this.companyService.createCompany(this.newCompany).then(function (res) {
            _this.getAllCompanies();
        }, function (err) {
            console.log(err);
        });
    };
    CustomerEditComponent.prototype.savePermissions = function () {
        this.customer.special_permissions.staff = this.staffPermission;
        this.customer.special_permissions.customer = this.customerPermission;
        this.customer.special_permissions.store = this.storePermission;
        this.customer.special_permissions.order = this.orderPermission;
        this.customer.special_permissions.company = this.orderPermission;
        this.customer.special_permissions.role = this.rolePermission;
        this.customer.special_permissions.display_dashboard = this.display_dashboard;
        this.customer.special_permissions.home_url = this.home_url;
        this.customer.role = '';
        this.modalValid = false;
        this.customer.role_name = '';
    };
    return CustomerEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomerEditComponent.prototype, "user", void 0);
CustomerEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-customer',
        template: __webpack_require__(230),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_role_service__["a" /* RoleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */]) === "function" && _e || Object])
], CustomerEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=customer.component.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_role_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffEditComponent = (function () {
    function StaffEditComponent(router, roleService, companyService, userService) {
        this.router = router;
        this.roleService = roleService;
        this.companyService = companyService;
        this.userService = userService;
        this.currentCompanies = [];
        this.users = [];
        this.modalValid = true;
    }
    StaffEditComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.staff = this.user.user;
        this.user_info = this.user.user['user_info'];
        this.newCompany = {
            name: '',
            status: ''
        };
        if (this.staff.special_permissions) {
            this.companyPermission = this.staff.special_permissions.company;
            this.staffPermission = this.staff.special_permissions.staff;
            this.customerPermission = this.staff.special_permissions.customer;
            this.orderPermission = this.staff.special_permissions.order;
            this.storePermission = this.staff.special_permissions.store;
            this.rolePermission = this.staff.special_permissions.role;
            this.home_url = this.staff.special_permissions.home_url;
            this.display_dashboard = this.staff.special_permissions.display_dashboard;
        }
        else {
            this.staffPermission = {
                create: '',
                edit: '',
                delete: '',
                view: ''
            };
            this.customerPermission = {
                create: '',
                edit: '',
                delete: '',
                view: ''
            };
            this.storePermission = {
                create: '',
                edit: '',
                delete: '',
                view: ''
            };
            this.orderPermission = {
                create: '',
                edit: '',
                delete: '',
                view: ''
            };
            this.rolePermission = {
                create: '',
                edit: '',
                delete: '',
                view: ''
            };
            this.companyPermission = {
                create: '',
                edit: '',
                delete: '',
                view: ''
            };
            this.staff.special_permissions = {};
        }
        this.getAllCompanies();
        this.getAllRoles();
        this.getAllUsers();
    };
    //Get All Users
    StaffEditComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().then(function (res) {
            for (var i = 0; i < Object.keys(res).length; i++) {
                if (res[i].accounttype === 'staff' && res[i].username !== _this.user.username) {
                    _this.users.push(res[i].username);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Get Current Companies
    StaffEditComponent.prototype.getAllCompanies = function () {
        var _this = this;
        this.companyService.getAllCompanies().then(function (res) {
            _this.currentCompanies = [];
            for (var i = 0; i < Object.keys(res).length; i++) {
                _this.currentCompanies.push(res[i]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Get Current Roles
    StaffEditComponent.prototype.getAllRoles = function () {
        var _this = this;
        this.roleService.getAllRoles().then(function (res) {
            _this.roles = res;
        }, function (err) {
            console.log(err);
        });
    };
    StaffEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.staff['user_info'] = this.user_info;
        this.staff['status'] = 'active';
        this.staff['accounttype'] = 'staff';
        if (this.staff.role) {
            console.log('delete special permissions');
            delete this.staff.special_permissions;
            console.log(this.staff);
        }
        this.userService.updateUser(this.staff['id'], this.staff).then(function (result) {
            _this.router.navigate(['/users']);
        }, function (err) {
            console.log(err);
        });
    };
    StaffEditComponent.prototype.cancel = function () {
        this.router.navigate(['/users']);
    };
    StaffEditComponent.prototype.createCompany = function () {
        var _this = this;
        this.currentCompanies.push(this.newCompany.name);
        this.staff.company = this.newCompany.name;
        this.newCompany.status = 'active';
        this.companyService.createCompany(this.newCompany).then(function (res) {
            _this.getAllCompanies();
        }, function (err) {
            console.log(err);
        });
    };
    StaffEditComponent.prototype.selectRole = function (event) {
        this.staff.role = event.target.value;
        if (this.staff.special_permissions) {
            delete this.staff.special_permissions;
        }
    };
    StaffEditComponent.prototype.savePermissions = function () {
        this.staff.special_permissions.staff = this.staffPermission;
        this.staff.special_permissions.customer = this.customerPermission;
        this.staff.special_permissions.store = this.storePermission;
        this.staff.special_permissions.order = this.orderPermission;
        this.staff.special_permissions.company = this.companyPermission;
        this.staff.special_permissions.role = this.rolePermission;
        this.staff.special_permissions.display_dashboard = this.display_dashboard;
        this.staff.special_permissions.home_url = this.home_url;
        this.staff.role = '';
        this.modalValid = false;
        console.log(this.staff.special_permissions);
    };
    return StaffEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StaffEditComponent.prototype, "user", void 0);
StaffEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-staff',
        template: __webpack_require__(231),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_role_service__["a" /* RoleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _d || Object])
], StaffEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=staff.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.user = {};
        this.getUserDetails(this.route.snapshot.params['id']);
    };
    UserComponent.prototype.getUserDetails = function (id) {
        var _this = this;
        this.userService.getUserDetails(id).then(function (res) {
            _this.user = res;
            _this.accounttype = _this.user.user.accounttype;
        }, function (err) {
            console.log(err);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(232),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(usersService, route, router) {
        this.usersService = usersService;
        this.route = route;
        this.router = router;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.filterUserType = '';
        this.selectedUsers = [];
        this.childs = [];
        this.user = JSON.parse(localStorage.getItem('user'));
        this.getAllUsers();
    };
    UsersComponent.prototype.filter = function () {
        var temp1 = [];
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].accounttype === this.filterUserType) {
                temp1.push(this.users[i]);
            }
        }
        this.temp = temp1;
    };
    UsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.usersService.getAllUsers().then(function (res) {
            _this.users = res;
            _this.temp = _this.users;
            if (_this.user.accounttype === 'customer') {
                for (var i = 0; i < _this.users.length; i++) {
                    for (var j = 0; j < _this.user.child.length; i++) {
                        if (_this.users[i].username === _this.user.child[j]) {
                            _this.childs.push(_this.users[i]);
                        }
                    }
                }
            }
            else {
            }
        }, function (err) {
            console.log(err);
        });
    };
    UsersComponent.prototype.selectElement = function (event) {
        if (event.target.checked) {
            this.selectedUsers.push(event.target.value);
        }
        else {
            for (var i = 0; i < this.selectedUsers.length; i++) {
                if (this.selectedUsers[i] === event.target.value) {
                    this.selectedUsers.splice(i, 1);
                }
            }
        }
    };
    UsersComponent.prototype.inActivateUsers = function () {
        var _this = this;
        this.usersService.inActivateUser(this.selectedUsers).subscribe(function (data) {
            console.log(data);
            _this.getAllUsers();
            _this.selectedUsers = [];
        });
    };
    UsersComponent.prototype.reActivateUsers = function () {
        var _this = this;
        this.usersService.deActivateUsers(this.selectedUsers).subscribe(function (data) {
            console.log(data);
            _this.getAllUsers();
            _this.selectedUsers = [];
        });
    };
    UsersComponent.prototype.deleteUsers = function () {
        var _this = this;
        this.usersService.deleteUsers(this.selectedUsers).subscribe(function (data) {
            console.log(data);
            _this.getAllUsers();
            _this.selectedUsers = [];
        });
    };
    UsersComponent.prototype.createNewUser = function () {
        this.router.navigate(['/user']);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(233),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UsersComponent);

var _a, _b, _c;
//# sourceMappingURL=users.component.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".row {\r\n    margin-top: 8em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".row {\r\n    margin-top: 200px;\r\n    margin-left: -15%\r\n}\r\n@media screen and (max-width: 991px) and (min-width: 320px) {\r\n    .row {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n.login_logo {\r\nmin-width: 50%;\r\nmin-height: 50%;\r\nwidth: 70%;\r\nheight: 70%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 207 */,
/* 208 */
/***/ (function(module, exports) {

module.exports = "  \n<!-- header -->\n<div *ngIf=\"!routeState\">\n    <app-header></app-header>  \n    <!-- END HEADER -->\n    <div class=\"clearfix\"> </div>\n</div>\n    <!-- BEGIN CONTAINER -->\n    <div class=\"page-container\">\n           <!--  nav -->\n    <app-navmenu *ngIf=\"!routeState\"></app-navmenu>      \n    <!-- BEGIN CONTENT BODY -->\n        <div class=\"page-content-wrapper\">\n            <div class=\"content-wrapper container\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n\n    </div>\n    <!-- END CONTAINER -->\n\n\n<!-- SCROLL TO TOP -->\n<a href=\"#\" id=\"toTop\"></a>\n\n\n<!-- PRELOADER -->\n<div id=\"preloader\">\n    <div class=\"inner\">\n        <span class=\"loader\"></span>\n    </div>\n</div><!-- /PRELOADER -->\n\n"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n<div class=\"row\">\n  <div class=\"alert alert-danger\">\n    <strong>\n      You have no permissions now.\n    </strong>\n  </div>\n</div>\n  \n\n</div>"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"page-title\">\n            <div class=\"row\">\n                <h4 class=\"pull-left\">Company Management</h4>\n                <ol class=\"breadcrumb pull-right\">\n\t                <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n\t                <li>Company Management</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</div><!-- end .page title-->\n\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"form-group\">\n            <ng-container *ngIf=\"user.accounttype === 'super'\">\n                <a [routerLink]=\"['/company']\"  class=\"btn btn-primary\"><i class=\"fa fa-bank\"></i> Register New Company</a>\n            </ng-container>\n            <ng-container *ngIf=\"user.accounttype === 'staff' || user.accounttype === 'customer'\">\n                <ng-container *ngIf=\"user.role\">\n                    <a [routerLink]=\"['/company']\" *ngIf=\"user.role.company.create\" class=\"btn btn-primary\"><i class=\"fa fa-bank\"></i> Register New Company</a>\n                </ng-container>\n                <ng-container *ngIf=\"user.special_permissions\">\n                    <a [routerLink]=\"['/company']\" *ngIf=\"user.special_permissions.company.create\" class=\"btn btn-primary\"><i class=\"fa fa-bank\"></i> Register New Company</a>\n                </ng-container>\n            </ng-container>            \n        </div>\n        <div  class=\"col-md-12 col-sm-12s\">\n            <div class=\"table-responsive\">            \n                <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n                    \n                    <thead>\n                        <tr>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                                #\n                            </th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Company</th>                            \n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Status</th>                                                    \n                        </tr>\n                    </thead>\n                    <tbody >\n                        <tr *ngFor=\"let item of currentCompanies\">\n                            <td class=\"title\">\n                                <input type=\"checkbox\" name=\"select\" value=\"{{item._id}}\" (change)=\"selectElement($event)\">\n                            </td>                            \n                            <td class=\"title\">\n                                <ng-container *ngIf=\"user.accounttype==='super'\">\n                                    <a [routerLink]=\"['/company', item._id]\">{{ item.name }}</a>\n                                </ng-container>\n                                <ng-container *ngIf=\"user.accounttype==='staff' || user.accounttype==='customer'\">\n                                    <ng-container *ngIf=\"user.role\">\n                                        <a [routerLink]=\"['/company', item._id]\" *ngIf=\"user.role.company.edit\">{{ item.name }}</a>\n                                        <span *ngIf=\"!user.role.company.edit\">{{ item.name }}</span>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"user.special_permissions\">\n                                        <a [routerLink]=\"['/company', item._id]\" *ngIf=\"user.special_permissions.company.edit\">{{ item.name }}</a>\n                                        <span *ngIf=\"!user.special_permissions.company.edit\">{{ item.name }}</span>\n                                    </ng-container>\n                                </ng-container>\n                            </td>                            \n                            <td class=\"title\">{{ item.status ? 'active' : 'inactive' }}</td>\n                        </tr>                 \n                        \n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>  \n<br>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"form-group\" *ngIf=\" user.accounttype === 'super'\">\n      <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary\" (click)=\"deleteComapnies()\"><i class=\"fa fa-delete\"></i> Delete Selected</button>\n      <button type=\"button\"  id=\"button-filter\" class=\"btn btn-primary \" (click)=\"deactivateComapnies()\"><i class=\"fa fa-delete\"></i> Deactivate Selected</button>\n      <button  type=\"button\" id=\"button-filter\" class=\"btn btn-primary \" (click)=\"reactivateComapnies()\"><i class=\"fa fa-delete\"></i> Reactivate Selected</button>\n    </div>\n    <div class=\"form-group\" *ngIf=\" user.accounttype === 'staff' || user.accounttype === 'customer' \">\n    <ng-container *ngIf=\"user.role\">\n      <button type=\"button\" *ngIf=\"user.role.role.delete\" id=\"button-filter\" class=\"btn btn-primary \" (click)=\"deactivateComapnies()\"><i class=\"fa fa-delete\"></i> Deactivate Selected</button>\n    </ng-container>\n    <ng-container *ngIf=\"user.special_permissions\">\n      <button *ngIf=\"user.special_permissions.role.delete\" type=\"button\" id=\"button-filter\" class=\"btn btn-primary \" (click)=\"reactivateComapnies()\"><i class=\"fa fa-delete\"></i> Reactivate Selected</button>\n    </ng-container>      \n    </div>\n  </div>\n</div>"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"page-title\">\n      <div class=\"row\">\n        <h4 class=\"pull-left\">Company Details</h4>\n        <ol class=\"breadcrumb pull-right\">\n          <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n          <li>Company Details</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end .page title-->\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"panel panel-card margin-b-30\">\n      <div class=\"well\">\n        <div class=\"panel-body\">\n          <form class=\"form-horizontal group-border stripped\" name=\"form\" #companyForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n            <div class=\"form-group\">\n              <label class=\"col-lg-2 col-md-3 control-label\">Company Name</label>\n              <div class=\"col-lg-5 col-md-5\">\n                <input type=\"text\" name=\"companyname\" placeholder=\"Enter Company Name\" minlength=\"3\" maxlength=\"24\" class=\"form-control\"\n                  [(ngModel)]=\"companyName\" #companyname=\"ngModel\" required>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n\n              <div class=\"col-md-9 col-md-offset-3\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!companyForm.form.valid\">Submit</button>\n                <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n                <button class=\"btn btn-info btn-primary\" (click)=\"cancel()\">Cancel</button>\n              </div>\n\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"page-title\">\n      <div class=\"row\">\n        <h4 class=\"pull-left\">Company Details</h4>\n        <ol class=\"breadcrumb pull-right\">\n          <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n          <li>Company Details</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end .page title-->\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"panel panel-card margin-b-30\">\n      <div class=\"well\">\n        <div class=\"panel-body\">\n          <form class=\"form-horizontal group-border stripped\" name=\"form\" #companyForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n            <div class=\"form-group\">\n              <label class=\"col-lg-2 col-md-3 control-label\">Company Name</label>\n              <div class=\"col-lg-5 col-md-5\">\n                <input type=\"text\" name=\"companyname\" placeholder=\"Enter Company Name\" minlength=\"3\" maxlength=\"24\" class=\"form-control\"\n                  [(ngModel)]=\"currentCompany.name\" #companyname=\"ngModel\" required>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n\n              <div class=\"col-md-9 col-md-offset-3\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!companyForm.form.valid\">Submit</button>\n                <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n                <button class=\"btn btn-info btn-primary\" (click)=\"cancel()\">Cancel</button>\n              </div>\n\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"page-title\">\n            <div class=\"row\">\n\n                <h4 class=\"pull-left\">Dashboard</h4>\n\n\n                <ol class=\"breadcrumb pull-right\">\n                    <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n                    <li>Dashboard</li>\n                </ol>\n\n            </div>\n        </div>\n    </div>\n</div><!-- end .page title-->\n\n<div class=\"row\">\n    <div class=\"col-md-6 col-lg-3\">\n        <div class=\"panel panel-card recent-activites\">\n            <!-- Start .panel -->\n            <div class=\"panel-heading\">\n                HEADING\n                <div class=\"pull-right\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info btn-rounded btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu panel-dropdown\" role=\"menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body text-center\">\n                <i class=\"icon-layers widget-icon\"></i>  <h1 class=\"right panel-middle margin-b-0\">3,100</h1>\n            </div>\n        </div><!-- End .panel --> \n\n\n\n        </div>\n        <div class=\"col-md-6 col-lg-3\">\n            <div class=\"panel panel-card recent-activites\">\n                <!-- Start .panel -->\n                <div class=\"panel-heading\">\n                    HEADING\n                    <div class=\"pull-right\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info btn-rounded btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu panel-dropdown\" role=\"menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-body text-center\">\n                    <i class=\"icon-user widget-icon\"></i>  <h1 class=\"right panel-middle margin-b-0\">6,782</h1>\n                </div>\n            </div><!-- End .panel --> \n\n\n\n        </div>\n\n        <div class=\"col-md-6 col-lg-3\">\n            <div class=\"panel panel-card recent-activites\">\n                <!-- Start .panel -->\n                <div class=\"panel-heading\">\n                    HEADING\n                    <div class=\"pull-right\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info btn-rounded btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu panel-dropdown\" role=\"menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-body text-center\">\n                    <i class=\"icon-list widget-icon\"></i>  <h1 class=\"right panel-middle margin-b-0\">6,782</h1>\n                </div>\n            </div><!-- End .panel --> \n\n\n\n        </div>\n\n        <div class=\"col-md-6 col-lg-3\">\n            <div class=\"panel panel-card recent-activites\">\n                <!-- Start .panel -->\n                <div class=\"panel-heading\">\n                    HEADING\n                    <div class=\"pull-right\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info btn-rounded btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu panel-dropdown\" role=\"menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-body text-center\">\n                    <i class=\"icon-like widget-icon\"></i>  <h1 class=\"right panel-middle margin-b-0\">1,782</h1>\n                </div>\n            </div><!-- End .panel --> \n\n\n\n        </div>\n\n\n    </div>\n\n<div class=\"row\">\n    <div class=\"col-md-6 col-lg-3\">\n        <div class=\"card cyan white-text clearfix\">\n\n            <div class=\"card-content clearfix\">\n                <i class=\"icon-settings background-icon\"></i>\n                <p class=\"card-stats-title right panel-title wdt-lable\">HEADING</p>\n                <h4 class=\"right panel-middle margin-b-0 wdt-lable\">$4762</h4>\n\n                <div class=\"clearfix\"></div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"col-md-6 col-lg-3\">\n        <div class=\"card orange white-text clearfix\">\n\n            <div class=\"card-content clearfix\">\n                <i class=\"icon-user background-icon\"></i>\n                <p class=\"card-stats-title right panel-title wdt-lable\">HEADING</p>\n                <h4 class=\"right panel-middle margin-b-0 wdt-lable\">6,782</h4>\n\n                <div class=\"clearfix\"></div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"col-md-6 col-lg-3\">\n        <div class=\"card teal white-text clearfix\">\n\n            <div class=\"card-content clearfix\">\n                <i class=\"icon-basket background-icon\"></i>\n                <p class=\"card-stats-title right panel-title wdt-lable\">HEADING</p>\n                <h4 class=\"right panel-middle margin-b-0 wdt-lable\">1,782</h4>\n\n                <div class=\"clearfix\"></div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"col-md-6 col-lg-3\">\n        <div class=\"card green white-text clearfix\">\n\n            <div class=\"card-content clearfix\">\n                <i class=\"icon-graph background-icon\"></i>\n                <p class=\"card-stats-title right panel-title wdt-lable\">HEADING</p>\n                <h4 class=\"right panel-middle margin-b-0 wdt-lable\">1,782</h4>\n\n                <div class=\"clearfix\"></div>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"panel panel-card recent-activites\">\n            <!-- Start .panel -->\n            <div class=\"panel-heading\"> <div class=\"pull-right\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info btn-rounded btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu panel-dropdown\" role=\"menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                        </ul>\n                    </div>\n                </div>\n                HEADING<!--<p>This is Morris bar chart description.</p>-->\n\n            </div>\n            <div class=\"panel-body text-center\">\n                <div id=\"morris-bar\" class=\"h370\"></div>\n            </div>\n        </div><!-- End .panel --> \n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"panel panel-card recent-activites\">\n            <!-- Start .panel -->\n            <div class=\"panel-heading\">\n                <div class=\"pull-right\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info btn-rounded btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu panel-dropdown\" role=\"menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                        </ul>\n                    </div>\n                </div> HEADING\n                <!--<p>This is Morris bar chart description.</p>-->\n\n            </div>\n            <div class=\"panel-body text-center\">\n                <div id=\"morris-area-chart\" class=\"h370\"></div>\n            </div>\n        </div><!-- End .panel --> \n    </div>\n\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"panel panel-card recent-activites\">\n            <!-- Start .panel -->\n            <div class=\"panel-heading\">\n                HEADING\n                <div class=\"pull-right\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info btn-rounded btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu panel-dropdown\" role=\"menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body text-center\">\n                <div id=\"morris-area-chart2\" class=\"h370\"></div>\n            </div>\n        </div><!-- End .panel --> \n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"panel panel-card recent-activites\">\n            <!-- Start .panel -->\n            <div class=\"panel-heading\">\n                HEADING\n                <div class=\"pull-right\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info btn-rounded btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu panel-dropdown\" role=\"menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body text-center\">\n                <div id=\"myfirstchart\" class=\"h370\"></div>\n            </div>\n        </div><!-- End .panel --> \n    </div>\n\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"panel panel-card recent-activites\">\n            <!-- Start .panel -->\n            <div class=\"panel-heading\">\n                HEADING\n                <div class=\"pull-right\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info btn-rounded btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu panel-dropdown\" role=\"menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body text-center\">\n                <div id=\"stacked\" class=\"h370\"></div>\n            </div>\n        </div><!-- End .panel --> \n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"panel panel-card recent-activites\">\n            <!-- Start .panel -->\n            <div class=\"panel-heading\">\n               HEADING\n                <div class=\"pull-right\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info btn-rounded btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Action <span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu panel-dropdown\" role=\"menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body text-center\">\n                <div id=\"extra-area-chart\" class=\"h370\"></div>\n            </div>\n        </div><!-- End .panel --> \n    </div>\n\n</div>"

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = "<!-- wrapper -->\n  <div id=\"wrapper\">\n    <!-- BEGIN HEADER -->\n    <div class=\"page-header navbar navbar-fixed-top\"> \n        <div class=\"page-header-inner \">\n            <div class=\"page-logo\">\n                <a href=\"index.html\">\n                    <img [src]=\"logoUrl\" alt=\"absolute admin\" class=\"img-responsive logo-default\"/>\n                </a>\n            </div>\n            <div class=\"menu-toggler sidebar-toggler\">\n                <a href=\"javascript:;\" class=\"navbar-minimalize minimalize-styl-2  pull-left \"><i class=\"fa fa-bars\"></i></a>\n            </div>\n            <!--<div class=\"search-bar\">\n                <form class=\"sidebar-search  \" action=\"page_general_search_3.html\" method=\"POST\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n\n                    </div>\n                </form>\n            </div>-->\n            <div class=\"top-menu\">\n                <ul class=\"nav navbar-nav pull-right\">\n                            <li class=\"dropdown dropdown-extended dropdown-notification\" id=\"header_notification_bar\">\n                                <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\n                                    <i class=\"icon-bell\"></i>\n                                    <span class=\"badge badge-default\"> <span class=\"ring\">\n                                        </span><span class=\"ring-point\">\n                                        </span> </span>\n                                </a>\n                                <!--<ul class=\"dropdown-menu animated flipInX\">\n                                    <li class=\"external\">\n                                        <h3>\n                                            <span class=\"bold\">12 pending</span> notifications</h3>\n                                        <a href=\"page_user_profile_1.html\">view all</a>\n                                    </li>\n                                    <li>  <ul class=\"dropdown-menu-list scroller\" data-handle-color=\"#637283\">\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">just now</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-success\">\n                                                            <i class=\"fa fa-plus\"></i>\n                                                        </span> New user registered. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">3 mins</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-danger\">\n                                                            <i class=\"fa fa-bolt\"></i>\n                                                        </span> Server #12 overloaded. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">10 mins</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-warning\">\n                                                            <i class=\"fa fa-bell-o\"></i>\n                                                        </span> Server #2 not responding. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">14 hrs</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-info\">\n                                                            <i class=\"fa fa-bullhorn\"></i>\n                                                        </span> Application error. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">2 days</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-danger\">\n                                                            <i class=\"fa fa-bolt\"></i>\n                                                        </span> Database overloaded 68%. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">3 days</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-danger\">\n                                                            <i class=\"fa fa-bolt\"></i>\n                                                        </span> A user IP blocked. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">4 days</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-warning\">\n                                                            <i class=\"fa fa-bell-o\"></i>\n                                                        </span> Storage Server #4 not responding dfdfdfd. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">5 days</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-info\">\n                                                            <i class=\"fa fa-bullhorn\"></i>\n                                                        </span> System Error. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">9 days</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-danger\">\n                                                            <i class=\"fa fa-bolt\"></i>\n                                                        </span> Storage server failed. </span>\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                </ul>-->\n                            </li> \n                            <li class=\"dropdown dropdown-extended dropdown-notification\" id=\"header_inbox_bar\">\n                                <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\n                                    <i class=\"icon-envelope-open\"></i>\n                                    <span class=\"badge badge-default\"> <span class=\"ring\">\n                                        </span><span class=\"ring-point\">\n                                        </span> </span>\n                                </a>\n                                <!--<ul class=\"dropdown-menu animated flipInX\">\n                                    <li class=\"external\">\n                                        <h3>\n                                            <span class=\"bold\">12 New Email</span> </h3>\n                                        <a href=\"page_user_profile_1.html\">view all</a>\n                                    </li>\n                                    <li>\n                                        <ul class=\"dropdown-menu-list scroller\"  data-handle-color=\"#637283\">\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">just now</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-success\">\n                                                            <i class=\"fa fa-plus\"></i>\n                                                        </span> 12 New Inbox. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">3 mins</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-danger\">\n                                                            <i class=\"fa fa-bolt\"></i>\n                                                        </span> 10 Spam. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">10 mins</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-warning\">\n                                                            <i class=\"fa fa-bell-o\"></i>\n                                                        </span> 2 Trash. </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"time\">14 hrs</span>\n                                                    <span class=\"details\">\n                                                        <span class=\"label label-sm label-icon label-info\">\n                                                            <i class=\"fa fa-bullhorn\"></i>\n                                                        </span> 5 Social. </span>\n                                                </a>\n                                            </li>\n\n                                        </ul>\n                                    </li>\n                                </ul>-->\n                            </li> \n                            <li class=\"dropdown dropdown-extended dropdown-tasks\" id=\"header_task_bar\">\n                                <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\n                                    <i class=\"icon-calendar\"></i>\n                                    <span class=\"badge badge-default\"> <span class=\"ring\">\n                                        </span><span class=\"ring-point\">\n                                        </span> </span>\n                                </a>\n                                <ul class=\"dropdown-menu extended tasks animated flipInX\">\n                                    <li class=\"external\">\n                                        <h3>You have\n                                            <span class=\"bold\">12 pending</span> tasks</h3>\n                                        <a href=\"app_todo.html\">view all</a>\n                                    </li>\n                                    <li>\n\n                                        <!--<ul class=\"dropdown-menu-list scroller\" data-handle-color=\"#637283\" data-initialized=\"1\">\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"task\">\n                                                        <span class=\"desc\">New release v1.2 </span>\n                                                        <span class=\"percent\">30%</span>\n                                                    </span>\n                                                    <span class=\"progress\">\n                                                        <span style=\"width: 40%;\" class=\"progress-bar progress-bar-success\" >\n                                                            <span class=\"sr-only\">40% Complete</span>\n                                                        </span>\n                                                    </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"task\">\n                                                        <span class=\"desc\">Application deployment</span>\n                                                        <span class=\"percent\">65%</span>\n                                                    </span>\n                                                    <span class=\"progress\">\n                                                        <span style=\"width: 65%;\" class=\"progress-bar progress-bar-danger\">\n                                                            <span class=\"sr-only\">65% Complete</span>\n                                                        </span>\n                                                    </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"task\">\n                                                        <span class=\"desc\">Mobile app release</span>\n                                                        <span class=\"percent\">98%</span>\n                                                    </span>\n                                                    <span class=\"progress\">\n                                                        <span style=\"width: 98%;\" class=\"progress-bar progress-bar-success\" >\n                                                            <span class=\"sr-only\">98% Complete</span>\n                                                        </span>\n                                                    </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"task\">\n                                                        <span class=\"desc\">Database migration</span>\n                                                        <span class=\"percent\">10%</span>\n                                                    </span>\n                                                    <span class=\"progress\">\n                                                        <span style=\"width: 10%;\" class=\"progress-bar progress-bar-warning\">\n                                                            <span class=\"sr-only\">10% Complete</span>\n                                                        </span>\n                                                    </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"task\">\n                                                        <span class=\"desc\">Web server upgrade</span>\n                                                        <span class=\"percent\">58%</span>\n                                                    </span>\n                                                    <span class=\"progress\">\n                                                        <span style=\"width: 58%;\" class=\"progress-bar progress-bar-info\" >\n                                                            <span class=\"sr-only\">58% Complete</span>\n                                                        </span>\n                                                    </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"task\">\n                                                        <span class=\"desc\">Mobile development</span>\n                                                        <span class=\"percent\">85%</span>\n                                                    </span>\n                                                    <span class=\"progress\">\n                                                        <span style=\"width: 85%;\" class=\"progress-bar progress-bar-success\" >\n                                                            <span class=\"sr-only\">85% Complete</span>\n                                                        </span>\n                                                    </span>\n                                                </a>\n                                            </li>\n                                            <li>\n                                                <a href=\"javascript:;\">\n                                                    <span class=\"task\">\n                                                        <span class=\"desc\">New UI release</span>\n                                                        <span class=\"percent\">38%</span>\n                                                    </span>\n                                                    <span class=\"progress progress-striped\">\n                                                        <span style=\"width: 38%;\" class=\"progress-bar progress-bar-important\" >\n                                                            <span class=\"sr-only\">38% Complete</span>\n                                                        </span>\n                                                    </span>\n                                                </a>\n                                            </li>\n                                        </ul>-->\n                                    </li>\n                                </ul>\n                            </li>\n                            <li class=\"dropdown dropdown-user\">\n                                <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" aria-expanded=\"false\">\n                                    <img alt=\"\" class=\"img-circle\" [src]=\"photoUrl\" >\n\n                                </a>\n                                <ul class=\"dropdown-menu dropdown-menu-default\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"icon-user\"></i> My Profile</a>\n                                    </li>\n                                    <!--<li>\n                                        <a href=\"app_calendar.html\">\n                                            <i class=\"icon-calendar\"></i> My Calendar </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"app_inbox.html\">\n                                            <i class=\"icon-envelope-open\"></i> My Inbox\n                                            <span class=\"badge badge-danger\"> 3 </span>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"app_todo.html\">\n                                            <i class=\"icon-rocket\"></i> My Tasks\n                                            <span class=\"badge badge-success\"> 7 </span>\n                                        </a>\n                                    </li>\n                                    <li class=\"divider\"> </li>\n                                    <li>\n                                        <a href=\"page_user_lock_1.html\">\n                                            <i class=\"icon-lock\"></i> Lock Screen </a>\n                                    </li>-->\n                                    <li>\n                                        <a [routerLink]=\"['/login']\" (click)=\"logout()\">\n                                            <i class=\"icon-key\"></i> Log Out </a>\n                                    </li>\n                                </ul>\n                            </li>\n                            <!--<li class=\"dropdown dropdown-quick-sidebar-toggler\">\n                                <a href=\"javascript:;\" class=\"dropdown-toggle\">\n                                    <i class=\"icon-logout\"></i>\n                                </a>\n                            </li>-->\n                </ul>\n            </div>\n\n        </div>\n    </div>"

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"account-col text-center\">\n        <img src=\"assets/images/login.png\" alt=\"\" class=\"login_logo img-responsive\">\n        <h3>Log into your account</h3>\n        <form class=\"m-t\" (submit)=\"onLoginSubmit()\" role=\"form\" action=\"index.html\">\n            <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required=\"\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-block \">Login</button>\n            <a href=\"#\"><small>Forgot password?</small></a>\n            <p>Carpet Court &copy; 2017</p>\n        </form>\n        <div *ngIf=\"error\" class=\"alert alert-danger  alert-dismissable\">\n            <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">×</a>\n            <strong>Sorry, your login was unsuccessful, please try again.</strong>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = "<p>\n  main works!\n</p>\n"

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = "<!--For Super User-->\n<aside class=\"sidebar\" *ngIf=\"user.accounttype  === 'super'\">\n\t<nav class=\"sidebar-nav\">\n\t    <ul class=\"metismenu\" id=\"menu\" >\n\n\t        <li class=\"active\">\n\t            <a routerLink=\"/dashboard\"><i class=\"icon-grid\"></i> <span class=\"nav-label\">Dashboard</span></a>\n\t        </li>\n\t        <li>\n\t            <a [routerLink]=\"['/users']\"><i class=\"fa fa-users\"></i> <span class=\"nav-label\">Users</span></a>                                \n\t        </li>\n\t\t\t<li>\n\t\t\t\t<a [routerLink]=\"['/roles']\"><i class=\"fa fa-edit\"></i> <span class=\"nav-label\">User Roles</span></a>\n\t\t\t</li>\n\t        <li>\n\t            <a [routerLink]=\"['/stores']\"><i class=\"fa fa-building\"></i> <span class=\"nav-label\">Stores</span></a>\n\t        </li>    \n\t\t\t<li>\n\t            <a [routerLink]=\"['/companies']\"><i class=\"fa fa-bank\"></i> <span class=\"nav-label\">Companies</span></a>\n\t        </li>                  \n\t        <li>\n\t            <a [routerLink]=\"['/orders']\"><i class=\"fa fa-shopping-bag\"></i> <span class=\"nav-label\">Orders/Invoices</span></a>\n\t        </li> \n\n\t    </ul>\t \n\t</nav>\n</aside> \n<!--For staff  and customer -->\n<aside class=\"sidebar\" *ngIf=\"user.accounttype  === 'staff' || user.accounttype === 'customer' \">\n\t<ng-container *ngIf=\" user.role || user.special_permissions \">\n\t<nav class=\"sidebar-nav\">\n\t    <ul class=\"metismenu\" id=\"menu\" >\n\t\t<ng-container *ngIf=\"user.role\">\n\t\t\t<li class=\"active\" *ngIf=\"user.role.display_dashboard\">\n\t            <a routerLink=\"/dashboard\"><i class=\"icon-grid\"></i> <span class=\"nav-label\">Dashboard</span></a>\n\t        </li>\n\t        <li  *ngIf=\"user.role.customer.create || user.role.customer.delete || user.role.customer.edit || user.role.customer.view || user.role.staff.create || user.role.staff.edit || user.role.staff.delete || user.role.staff.view\">\n\t            <a [routerLink]=\"['/users']\"><i class=\"fa fa-users\"></i> <span class=\"nav-label\">Users</span></a>                                \n\t        </li>\n\t\t\t<li *ngIf=\"user.role.role.create || user.role.role.edit || user.role.role.delete || user.role.role.view\">\n\t\t\t\t<a [routerLink]=\"['/roles']\"><i class=\"fa fa-edit\"></i> <span class=\"nav-label\">User Roles</span></a>\n\t\t\t</li>\n\t        <li *ngIf=\"user.role.store.create || user.role.store.edit || user.role.store.delete || user.role.store.view\">\n\t            <a [routerLink]=\"['/stores']\"><i class=\"fa fa-building\"></i> <span class=\"nav-label\">Stores</span></a>\n\t        </li>    \n\t\t\t<li *ngIf=\"user.role.company.create || user.role.company.edit || user.role.company.delete || user.role.company.view\">\n\t            <a [routerLink]=\"['/companies']\"><i class=\"fa fa-bank\"></i> <span class=\"nav-label\">Companies</span></a>\n\t        </li>                  \n\t        <li *ngIf=\"user.role.order.create || user.role.order.edit || user.role.order.delete || user.role.order.view\">\n\t            <a [routerLink]=\"['/orders']\"><i class=\"fa fa-shopping-bag\"></i> <span class=\"nav-label\">Orders/Invoices</span></a>\n\t        </li> \n\t\t</ng-container>\t\t\n\t        \n\t\t<ng-container *ngIf=\"user.special_permissions\">\n\t\t\t<li class=\"active\" *ngIf=\"user.special_permissions.display_dashboard\">\n\t            <a routerLink=\"/dashboard\"><i class=\"icon-grid\"></i> <span class=\"nav-label\">Dashboard</span></a>\n\t        </li>\n\t        <li  *ngIf=\"user.special_permissions.customer.create || user.special_permissions.customer.delete || user.special_permissions.customer.edit || user.special_permissions.customer.view || user.special_permissions.staff.create || user.special_permissions.staff.edit || user.special_permissions.staff.delete || user.special_permissions.staff.view\">\n\t            <a [routerLink]=\"['/users']\"><i class=\"fa fa-users\"></i> <span class=\"nav-label\">Users</span></a>                                \n\t        </li>\n\t\t\t<li *ngIf=\"user.special_permissions.role.create || user.special_permissions.role.edit || user.special_permissions.role.delete || user.special_permissions.role.view\">\n\t\t\t\t<a [routerLink]=\"['/roles']\"><i class=\"fa fa-edit\"></i> <span class=\"nav-label\">User Roles</span></a>\n\t\t\t</li>\n\t        <li *ngIf=\"user.special_permissions.store.create || user.special_permissions.store.edit || user.special_permissions.store.delete || user.special_permissions.store.view\">\n\t            <a [routerLink]=\"['/stores']\"><i class=\"fa fa-building\"></i> <span class=\"nav-label\">Stores</span></a>\n\t        </li>    \n\t\t\t<li *ngIf=\"user.special_permissions.company.create || user.special_permissions.company.edit || user.special_permissions.company.delete || user.special_permissions.company.view\">\n\t            <a [routerLink]=\"['/companies']\"><i class=\"fa fa-bank\"></i> <span class=\"nav-label\">Companies</span></a>\n\t        </li>                  \n\t        <li *ngIf=\"user.special_permissions.order.create || user.special_permissions.order.edit || user.special_permissions.order.delete || user.special_permissions.order.view\">\n\t            <a [routerLink]=\"['/orders']\"><i class=\"fa fa-shopping-bag\"></i> <span class=\"nav-label\">Orders/Invoices</span></a>\n\t        </li> \n\t\t</ng-container>\t\n\t    </ul>\t \n\t</nav>\n\t</ng-container>\n\t\n</aside> "

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"page-title\">\n            <div class=\"row\">\n                <h4 class=\"pull-left\">Orders/Invoices Management</h4>\n                <ol class=\"breadcrumb pull-right\">\n\t                <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n\t                <li>Orders/Invoices Management</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</div><!-- end .page title-->\n\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"form-group\">\n            <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary\"><i class=\"fa fa-user\"></i> Create New Order</button>\n            <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-user\"></i> Merge For Single Payment</button>\n        </div>\n    \n    \n    <div class=\"well\">\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <div class=\"form-group\">\n                        <label for=\"\" class=\"control-label\">Filter By</label>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"input-status\">Type</label>\n                        <select name=\"filter_status\" id=\"input-status\" class=\"form-control\">\n                            <option value=\"*\">New York</option>\n                            <option value=\"1\">London</option>\n                            <option value=\"0\">Paris</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"input-status\">Store</label>\n                        <select name=\"filter_status\" id=\"input-status\" class=\"form-control\">\n                            <option value=\"*\">New York</option>\n                            <option value=\"1\">London</option>\n                            <option value=\"0\">Paris</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"input-status\">Village</label>\n                        <select name=\"filter_status\" id=\"input-status\" class=\"form-control\">\n                            <option value=\"*\">New York</option>\n                            <option value=\"1\">London</option>\n                            <option value=\"0\">Paris</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-1\">\n                    <div class=\"form-group\">\n                        <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-search\"></i> Filter</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <form  method=\"post\" enctype=\"multipart/form-data\" id=\"form-product\" class=\"\">\n            <div class=\"table-responsive\">            \n                <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n                    \n                    <thead>\n                        <tr>\n                            <th  scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">#</th>                            \n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Type\n                            </th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Invoice #\n                            </th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Invoiced Date\n                            </th>    \n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Store\n                            </th>  \n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Village\n                            </th>  \n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Balance\n                            </th>   \n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Actions\n                            </th>                                                  \n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let item of rows\">\n                        <tr>\n                            <td class=\"text-center\">                    <input type=\"checkbox\" name=\"selected[]\" value=\"42\">\n                            </td>                            \n                            <td class=\"text-center\"><a [routerLink]=\"['/user', item.id]\">{{ item.type }}</a></td>\n                            <td class=\"text-center\">{{ item.invoice }}</td>\n                            <td class=\"text-center\">{{ item.invoicedDate }}</td>\n                            <td class=\"text-center\">{{ item.store }}</td>\n                            <td class=\"text-center\">{{ item.village }}</td>\n                            <td class=\"text-center\">{{ item.balance }}</td>\n                            <td class=\"text-center\"></td>\n                        </tr>                 \n                        \n                    </tbody>\n                </table>\n            </div>\n        </form>\n        <div class=\"form-group\" *ngIf= \"user.accounttype === 'super' \">\n            <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-delete\"></i> Delete Selected</button>\n        </div>\n\n    </div> \n</div>"

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"page-title\">\n            <div class=\"row\">\n                <h4 class=\"pull-left\">Create User Role</h4>\n                <ol class=\"breadcrumb pull-right\">\n\t                <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n\t                <li>Create User Role</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</div><!-- end .page title-->\n\n<div class=\"row\">\n    <div class=\"col-sm-12 col-md-12\">\n        <div class=\"col-sm-5 col-md-5\">\n            <input type=\"text\" name=\"rolename\" placeholder=\"Enter Rolename\" minlength=\"3\" maxlength=\"24\"  class=\"form-control\"  [(ngModel)]=\"newRole.role_name\"  #rolename=\"ngModel\" required >\n        </div>\n        <ng-container *ngFor=\"let cr of currentRoles \">\n            <div class=\"col-sm-5 col-md-5\" *ngIf=\"cr.role_name === rolename\">\n                <div class=\"alert alert-danger\">{{error}}</div>\n            </div>\n        </ng-container>\n    </div>\n</div>\n    <br>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div  class=\"col-md-12 col-sm-12s\">\n            <div class=\"table-responsive\">            \n                <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n                    \n                    <thead>\n                        <tr>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                               Permitted Action\n                            </th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Create</th>\n                            <th id=\"custom-sort\" scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"2\">Edit</th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Delete</th>                                                    \n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"5\">View Only</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class=\"title\">\n                                Manage Staff Users\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_staff\" [checked]=\"staff.create\" (change)=\"staff.create = !staff.create\" /></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_staff\" [checked]=\"staff.edit\" (change)=\"staff.edit = !staff.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_staff\" [checked]=\"staff.delete\" (change)=\"staff.delete = !staff.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_staff\" [checked]=\"staff.view\" (change)=\"staff.view = !staff.view\"></td>\n                        </tr>  \n                        <tr>\n                            <td class=\"title\">\n                                Manage Customer Users\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_customer\" [checked]=\"customer.create\" (change)=\"customer.create = !customer.create\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_customer\" [checked]=\"customer.edit\" (change)=\"customer.edit = !customer.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_customer\" [checked]=\"customer.delete\" (change)=\"customer.delete = !customer.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_customer\" [checked]=\"customer.view\" (change)=\"customer.view = !customer.view\"></td>\n                        </tr>\n                        <tr>\n                            <td class=\"title\">\n                                Manage Stores\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_store\" [checked]=\"store.create\" (change)=\"store.create = !store.create\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_store\" [checked]=\"store.edit\" (change)=\"store.edit = !store.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_store\" [checked]=\"store.delete\" (change)=\"store.delete = !store.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_store\" [checked]=\"store.view\" (change)=\"store.view = !store.view\"></td>\n                        </tr>\n                        <tr>\n                            <td class=\"title\">\n                                Manage Orders\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_order\" [checked]=\"order.create\" (change)=\"order.create  = !order.create\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_order\" [checked]=\"order.edit\" (change)=\"order.edit = !order.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_order\" [checked]=\"order.delete\" (change)=\"order.delete = !order.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_order\" [checked]=\"order.view\" (change)=\"order.view = !order.view\"></td>\n                        </tr>\n                        <tr>\n                            <td class=\"title\">\n                                Manage User Roles\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_role\" [checked]=\"role.create\" (change)=\"role.create = !role.create\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_role\" [checked]=\"role.edit\" (change)=\"role.edit = !role.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_role\" [checked]=\"role.delete\" (change)=\"role.delete = !role.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_role\" [checked]=\"role.view\" (change)=\"role.view = !role.view\"></td>\n                        </tr>  \n                        <tr>\n                            <td class=\"title\">\n                                Manage Companies \n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_company\" [checked]=\"company.create\" (change)=\"company.create = !company.create\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_company\" [checked]=\"company.edit\" (change)=\"company.edit = !company.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_company\" [checked]=\"company.delete\" (change)=\"company.delete = !company.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_company\" [checked]=\"company.view\" (change)=\"company.view = !company.view\"></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<br>\n<div class=\"row\"> \n    <div class=\"col-md-3 col-sm-12\">\n        <select class=\"form-control m-b\" name=\"home_url\" [(ngModel)]=\"home_url\" required>\n            <option value=\"\" selected>Select the home screen for this role</option>\n            <option value=\"dashboard\">Dashboard</option>\n            <option value=\"users\">Users</option>\n            <option value=\"roles\">User Roles</option>\n            <option value=\"stores\">Stores</option>\n            <option value=\"orders\">Orders</option>\n            <option value=\"companies\">Companies</option>\n        </select>\n    </div>\n    <div class=\"col-md-3 col-sm-12\">\n        <label for=\"\">Display Dashboard</label>\n        <input type=\"checkbox\" name=\"display_dashboard\" [checked]=\"display_dashboard\" (change)=\"display_dashboard = !display_dashboard\">\n    </div>\n    <div class=\"col-md-6 col-sm-12s text-center\">\n      <button class=\"btn btn-info btn-primary\"  (click)=\"cancel()\">\n        Cancel\n      </button>\n      <button class=\"btn btn-info  btn-primary\" (click)=\"save()\">\n        Save\n      </button>\n    </div>\n</div>"

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"page-title\">\n            <div class=\"row\">\n                <h4 class=\"pull-left\">User Role Settings</h4>\n                <ol class=\"breadcrumb pull-right\">\n\t                <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n\t                <li> User Role Settings</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</div><!-- end .page title-->\n\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div  class=\"col-md-12 col-sm-12s\">\n            <div class=\"col-lg-5 col-md-5\">\n                <input type=\"text\" name=\"rolename\" placeholder=\"Enter Rolename\" minlength=\"3\" maxlength=\"24\"  class=\"form-control\"  [(ngModel)]=\"currentRole.role_name\"  #rolename=\"ngModel\" required >\n            </div>\n            <div class=\"table-responsive\">            \n                <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n                    \n                    <thead>\n                        <tr>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                               Permitted Action\n                            </th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Create</th>\n                            <th id=\"custom-sort\" scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"2\">Edit</th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Delete</th>                                                    \n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"5\">View Only</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class=\"title\">\n                                Manage Staff Users\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_staff\" [checked]=\"staff.create\" (change)=\"staff.create = !staff.create\" /></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_staff\" [checked]=\"staff.edit\" (change)=\"staff.edit = !staff.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_staff\" [checked]=\"staff.delete\" (change)=\"staff.delete = !staff.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_staff\" [checked]=\"staff.view\" (change)=\"staff.view = !staff.view\"></td>\n                        </tr>  \n                        <tr>\n                            <td class=\"title\">\n                                Manage Customer Users\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_customer\" [checked]=\"customer.create\" (change)=\"customer.create = !customer.create\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_customer\" [checked]=\"customer.edit\" (change)=\"customer.edit = !customer.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_customer\" [checked]=\"customer.delete\" (change)=\"customer.delete = !customer.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_customer\" [checked]=\"customer.view\" (change)=\"customer.view = !customer.view\"></td>\n                        </tr>\n                        <tr>\n                            <td class=\"title\">\n                                Manage Stores\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_store\" [checked]=\"store.create\" (change)=\"store.create = !store.create\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_store\" [checked]=\"store.edit\" (change)=\"store.edit = !store.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_store\" [checked]=\"store.delete\" (change)=\"store.delete = !store.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_store\" [checked]=\"store.view\" (change)=\"store.view = !store.view\"></td>\n                        </tr>\n                        <tr>\n                            <td class=\"title\">\n                                Manage Orders\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_order\" [checked]=\"order.create\" (change)=\"order.create  = !order.create\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_order\" [checked]=\"order.edit\" (change)=\"order.edit = !order.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_order\" [checked]=\"order.delete\" (change)=\"order.delete = !order.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_order\" [checked]=\"order.view\" (change)=\"order.view = !order.view\"></td>\n                        </tr>\n                        <tr>\n                            <td class=\"title\">\n                                Manage User Roles\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_role\" [checked]=\"role.create\" (change)=\"role.create = !role.create\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_role\" [checked]=\"role.edit\" (change)=\"role.edit = !role.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_role\" [checked]=\"role.delete\" (change)=\"role.delete = !role.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_role\" [checked]=\"role.view\" (change)=\"role.view = !role.view\"></td>\n                        </tr>  \n                        <tr>\n                            <td class=\"title\">\n                                Manage Companies\n                            </td>                            \n                            <td class=\"title\"><input type=\"checkbox\" name=\"create_company\" [checked]=\"company.create\" (change)=\"company.create = !company.create\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"edit_company\" [checked]=\"company.edit\" (change)=\"company.edit = !company.edit\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"delete_company\" [checked]=\"company.delete\" (change)=\"company.delete = !company.delete\"></td>\n                            <td class=\"title\"><input type=\"checkbox\" name=\"view_company\" [checked]=\"company.view\" (change)=\"company.view = !company.view\"></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        \n\n    </div> \n</div>\n<br>\n<div class=\"row\"> \n    <div class=\"col-md-3 col-sm-12\">\n        <select class=\"form-control m-b\" name=\"home_url\" [(ngModel)]=\"currentRole.home_url\" #home_url=\"ngModel\" required>\n            <option value=\"dashboard\">Dashboard</option>\n            <option value=\"users\">Users</option>\n            <option value=\"roles\">User Roles</option>\n            <option value=\"stores\">Stores</option>\n            <option value=\"orders\">Orders</option>\n        </select>\n    </div>\n    <div class=\"col-md-3 col-sm-12\">\n        <label for=\"\">Display Dashboard</label>\n        <input type=\"checkbox\" name=\"display_dashboard\" [checked]=\"display_dashboard\" (change)=\"display_dashboard = !display_dashboard\">\n    </div>\n    <div class=\"col-md-6 col-sm-12 text-center\">\n      <button class=\"btn btn-info btn-primary\"  (click)=\"cancel()\">\n        Cancel\n      </button>\n      <button class=\"btn btn-info  btn-primary\" (click)=\"save()\">\n        Save\n      </button>\n    </div>\n</div>"

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"page-title\">\n      <div class=\"row\">\n        <h4 class=\"pull-left\">User Role</h4>\n        <ol class=\"breadcrumb pull-right\">\n          <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n          <li>User Role</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end .page title-->\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"form-group\" *ngIf=\" user.accounttype === 'super' \">\n      <a [routerLink]=\"['/createrole']\" class=\"btn btn-primary\"><i class=\"fa fa-user\"></i> Create New Role</a>\n    </div>\n    <div class=\"form-group\" *ngIf=\" user.accounttype === 'staff' || user.accounttype === 'customer' \">\n    <ng-container *ngIf=\"user.role\">\n      <a [routerLink]=\"['/createrole']\" class=\"btn btn-primary\" *ngIf=\" user.role.role.create \"><i class=\"fa fa-user\"></i> Create New Role</a>\n    </ng-container>\n    <ng-container *ngIf=\"user.special_permissions\">\n      <a [routerLink]=\"['/createrole']\" class=\"btn btn-primary\" *ngIf=\" user.special_permissions.role.create \"><i class=\"fa fa-user\"></i> Create New Role</a>\n    </ng-container>      \n    </div>\n\n\n    <div class=\"col-md-12 col-sm-12s\">\n      <div class=\"table-responsive\">\n        <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n\n          <thead>\n            <tr>\n              <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                #\n              </th>\n              <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Role Name</th>\n\n              <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Status</th>\n            </tr>\n          </thead>\n          <tbody *ngFor=\"let item of roles\">\n            <tr>\n              <td class=\"title\">\n                <input type=\"checkbox\" name=\"select\" value=\"{{item._id}}\" (change)=\"selectElement($event)\" />\n              </td>\n              <td class=\"title\">\n                <ng-container *ngIf=\"user.accounttype === 'super'\">\n                  <a [routerLink]=\"['/role', item._id]\">{{ item.role_name }}</a>\n                </ng-container>\n                <ng-container *ngIf=\"user.accounttype === 'staff' || user.accounttype === 'customer'\">\n                  <ng-container *ngIf=\"user.role\">\n                    <a [routerLink]=\"['/role', item._id]\" *ngIf=\"user.role.role.edit\">{{ item.role_name }}</a>\n                    <span *ngIf=\"!user.role.role.edit\">{{ item.role_name }}</span>\n                  </ng-container>\n                  <ng-container *ngIf=\"user.special_permissions\">\n                    <a [routerLink]=\"['/role', item._id]\" *ngIf=\"user.special_permissions.role.edit\">{{ item.role_name }}</a>\n                    <span *ngIf=\"!user.special_permissions.role.edit\">{{ item.role_name }}</span>\n                  </ng-container>                  \n                </ng-container>                \n              </td>\n\n              <td class=\"title\">{{ item.status ? 'active' : 'inactive' }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <br>\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"form-group\" *ngIf=\" user.accounttype === 'super'\">\n      <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary pull-right\" (click)=\"deleteRoles()\"><i class=\"fa fa-delete\"></i> Delete Selected</button>\n      <button type=\"button\" *ngIf=\"user.role.role.delete\" id=\"button-filter\" class=\"btn btn-primary pull-right\" (click)=\"deactivateRoles()\"><i class=\"fa fa-delete\"></i> Deactivate Selected</button>\n      <button *ngIf=\"user.special_permissions.role.delete\" type=\"button\" id=\"button-filter\" class=\"btn btn-primary pull-right\" (click)=\"reactivateRoles()\"><i class=\"fa fa-delete\"></i> Reactivate Selected</button>\n    </div>\n    <div class=\"form-group\" *ngIf=\" user.accounttype === 'staff' || user.accounttype === 'customer' \">\n    <ng-container *ngIf=\"user.role\">\n      <button type=\"button\" *ngIf=\"user.role.role.delete\" id=\"button-filter\" class=\"btn btn-primary pull-right\" (click)=\"deactivateRoles()\"><i class=\"fa fa-delete\"></i> Deactivate Selected</button>\n    </ng-container>\n    <ng-container *ngIf=\"user.special_permissions\">\n      <button *ngIf=\"user.special_permissions.role.delete\" type=\"button\" id=\"button-filter\" class=\"btn btn-primary pull-right\" (click)=\"reactivateRoles()\"><i class=\"fa fa-delete\"></i> Reactivate Selected</button>\n    </ng-container>      \n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = "<!-- page title -->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"page-title\">\n            <div class=\"row\">\n                <h4 class=\"pull-left\">Store Details</h4>\n                <ol class=\"breadcrumb pull-right\">\n                    <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n                    <li>Store Details</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- end .page title-->\n<div class=\"hr-line-dashed\"></div>\n<div class=\"row\">\n    <div class=\"col-sm-12 col-md-12\">\n        <div class=\"panel panel-card margin-b-30\">\n            <div class=\"well\">\n                <div class=\"panel-body\">\n                    <form class=\"form-horizontal group-border stripped\" #storeForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': storeForm.submitted && !title.valid }\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Store Title</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"title\" placeholder=\"Enter Store Title\" minlength=\"4\" class=\"form-control\" [(ngModel)]=\"store.store_title\" #title=\"ngModel\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !title.valid\" class=\"help-block\">Title is required</div>\n                            <div *ngIf=\"title.errors && (title.dirty || title.touched) && !title.valid\" class=\"col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                                <div [hidden]=\"!title.errors.required\">\n                                    Title is required\n                                </div>\n                                <div [hidden]=\"!title.errors.minlength\">\n                                    Title must be at least 4 characters long.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Key Contact</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"key_contact\" placeholder=\"Key Contact\" class=\"form-control\" [(ngModel)]=\"store.key_contact\" #key_contact=\"ngModel\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !key_contact.valid\" class=\"help-block\">Key Contact is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Email</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"email\" placeholder=\"Enter email\" class=\"form-control\" [(ngModel)]=\"store_info.email\" #email=\"ngModel\" [email]=\"true\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n                            <div *ngIf=\"email.errors && email.touched\" class=\" col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                                <div [hidden]=\"!email.errors.required\">Email is required</div>\n                            </div>\n                            <div *ngIf=\"email.errors && email.errors.pattern\">\n                                Email is invalid\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Phone</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"phone\" placeholder=\"Phone number\" class=\"form-control\" [(ngModel)]=\"store_info.phone\" #phone=\"ngModel\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !phone.valid\" class=\"help-block\">Phone Number is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Mobile</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"mobile\" placeholder=\"Mobile number\" class=\"form-control\" [(ngModel)]=\"store_info.mobile\" #mobile=\"ngModel\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Fax</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"fax\" placeholder=\"Fax \" class=\"form-control\" [(ngModel)]=\"store_info.fax\" #fax=\"ngModel\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Address</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" placeholder=\"\" class=\"form-control\" name=\"address1\" [(ngModel)]=\"store_info.address.address1\" #address1=\"ngModel\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\"></label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" placeholder=\"\" class=\"form-control\" name=\"address2\" [(ngModel)]=\"store_info.address.address2\" #address2=\"ngModel\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Region</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <select class=\"fancy-select form-control\" name=\"region\" [(ngModel)]=\"store_info.region\" (change)=\"selectRegion($event)\" #region=\"ngModel\" required>\n                                    <option *ngFor=\"let reg of regions\" [value]=\"reg\">{{ reg }}</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !region.valid\" class=\"help-block\">Region is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">City</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <select class=\"fancy-select form-control\" name=\"city\" [(ngModel)]=\"store_info.city\" name=\"city\" #city=\"ngModel\" required>\n                                    <option *ngFor=\"let city of cities\" [value]=\"city\">{{city}}</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !city.valid\" class=\"help-block\">City is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Post Code</label>\n                            <div class=\"col-lg-3 col-md-3\">\n                                <input type=\"text\" placeholder=\"Enter Post Code\" name=\"post_code\" class=\"form-control\" [(ngModel)]=\"store_info.postcode\" #post_code=\"ngModel\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !post_code.valid\" class=\"help-block\">Post Code is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Country</label>\n                            <div class=\"col-lg-3 col-md-3\">\n                                <select class=\"fancy-select form-control\" name=\"country\" [(ngModel)]=\"store_info.country\" required #country=\"ngModel\">\n                                    <option value=\"new zealand\">New Zealand</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !country.valid\" class=\"help-block\">Country is required</div>\n                        </div>\n                        <div class=\"form-group  text-center\">\n                            <div class=\"col-lg-2 col-md-3 control-label\">\n                                <button class=\"btn btn-info btn-primary\" (click)=\"cancel()\">\n                                    Cancel\n                                </button>\n                                <button class=\"btn btn-info  btn-primary\" type=\"submit\">\n                                    Save\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = "<!-- page title -->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"page-title\">\n            <div class=\"row\">\n                <h4 class=\"pull-left\">Store Details</h4>\n                <ol class=\"breadcrumb pull-right\">\n                    <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n                    <li>Store Details</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- end .page title-->\n<div class=\"hr-line-dashed\"></div>\n<div class=\"row\">\n    <div class=\"col-sm-12 col-md-12\">\n        <div class=\"panel panel-card margin-b-30\">\n            <div class=\"well\">\n                <div class=\"panel-body\">\n                    <form class=\"form-horizontal group-border stripped\" #storeForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': storeForm.submitted && !title.valid }\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Store Title</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"title\" placeholder=\"Enter Store Title\" minlength=\"4\" class=\"form-control\" [(ngModel)]=\"store.store_title\" #title=\"ngModel\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !title.valid\" class=\"help-block\">Title is required</div>\n                            <div *ngIf=\"title.errors && (title.dirty || title.touched) && !title.valid\" class=\"col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                                <div [hidden]=\"!title.errors.required\">\n                                    Title is required\n                                </div>\n                                <div [hidden]=\"!title.errors.minlength\">\n                                    Title must be at least 4 characters long.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Key Contact</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"key_contact\" placeholder=\"Key Contact\" class=\"form-control\" [(ngModel)]=\"store.key_contact\" #key_contact=\"ngModel\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !key_contact.valid\" class=\"help-block\">Key Contact is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Email</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"email\" placeholder=\"Enter email\" class=\"form-control\" [(ngModel)]=\"store_info.email\" #email=\"ngModel\" [email]=\"true\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n                            <div *ngIf=\"email.errors && email.touched\" class=\" col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                                <div [hidden]=\"!email.errors.required\">Email is required</div>\n                            </div>\n                            <div *ngIf=\"email.errors && email.errors.pattern\">\n                                Email is invalid\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Phone</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"phone\" placeholder=\"Phone number\" class=\"form-control\" [(ngModel)]=\"store_info.phone\" #phone=\"ngModel\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !phone.valid\" class=\"help-block\">Phone Number is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Mobile</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"mobile\" placeholder=\"Mobile number\" class=\"form-control\" [(ngModel)]=\"store_info.mobile\" #mobile=\"ngModel\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Fax</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" name=\"fax\" placeholder=\"Fax \" class=\"form-control\" [(ngModel)]=\"store_info.fax\" #fax=\"ngModel\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Address</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" placeholder=\"\" class=\"form-control\" name=\"address1\" [(ngModel)]=\"address.address1\" #address1=\"ngModel\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !address1.valid\" class=\"help-block\">Address is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\"></label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <input type=\"text\" placeholder=\"\" class=\"form-control\" name=\"address2\" [(ngModel)]=\"address.address2\" #address2=\"ngModel\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Region</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <select class=\"fancy-select form-control\" name=\"region\" [(ngModel)]=\"store_info.region\" (change)=\"selectRegion($event)\" #region=\"ngModel\" required>\n                                    <option *ngFor=\"let reg of regions\" [value]=\"reg\">{{ reg }}</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !region.valid\" class=\"help-block\">Region is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">City</label>\n                            <div class=\"col-lg-5 col-md-5\">\n                                <select class=\"fancy-select form-control\" name=\"city\" [(ngModel)]=\"store_info.city\" name=\"city\" #city=\"ngModel\" required>\n                                    <option *ngFor=\"let city of cities\" [value]=\"city\">{{city}}</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !city.valid\" class=\"help-block\">City is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Post Code</label>\n                            <div class=\"col-lg-3 col-md-3\">\n                                <input type=\"text\" placeholder=\"Enter Post Code\" name=\"post_code\" class=\"form-control\" [(ngModel)]=\"store_info.postcode\" #post_code=\"ngModel\" required>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !post_code.valid\" class=\"help-block\">Post Code is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 col-md-3 control-label\">Country</label>\n                            <div class=\"col-lg-3 col-md-3\">\n                                <select class=\"fancy-select form-control\" name=\"country\" [(ngModel)]=\"store_info.country\" required #country=\"ngModel\">\n                                    <option value=\"new zealand\">New Zealand</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"storeForm.submitted && !country.valid\" class=\"help-block\">Country is required</div>\n                        </div>\n                        <div class=\"form-group  text-center\">\n                            <div class=\"col-lg-2 col-md-3 control-label\">\n                                <button class=\"btn btn-info btn-primary\" (click)=\"cancel()\">\n                                    Cancel\n                                </button>\n                                <button type=\"submit\" class=\"btn btn-info  btn-primary\">\n                                    Save\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"page-title\">\n      <div class=\"row\">\n        <h4 class=\"pull-left\">Store Management</h4>\n        <ol class=\"breadcrumb pull-right\">\n          <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n          <li>Store Management</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end .page title-->\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"form-group\" *ngIf=\" user.accounttype === 'super'\">\n      <a [routerLink]=\"['/createstore']\" class=\"btn btn-primary\"><i class=\"fa fa-building\"></i> Create New Store</a>\n    </div>\n    <div class=\"form-group\" *ngIf=\" user.accounttype === 'staff' || user.accounttype === 'customer'\">\n      <ng-container *ngIf=\"user.role\">\n        <a [routerLink]=\"['/createstore']\" class=\"btn btn-primary\" *ngIf=\"user.role.store.create\"><i class=\"fa fa-building\"></i> Create New Store</a>\n      </ng-container>\n      <ng-container *ngIf=\"user.special_permissions\">\n        <a [routerLink]=\"['/createstore']\" class=\"btn btn-primary\" *ngIf=\"user.special_permissions.store.create\"><i class=\"fa fa-building\"></i> Create New Store</a>\n      </ng-container>\n    </div>\n    <div class=\"well\">\n      <div class=\"row\">\n        <div class=\"col-sm-2\">\n          <div class=\"form-group\">\n            <label for=\"\" class=\"control-label\">Filter By</label>\n          </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <div class=\"form-group\">\n            <label class=\"col-lg-2 col-md-3 control-label\">Region</label>\n            <div class=\"col-lg-8 col-md-8\">\n              <select class=\"fancy-select form-control\" name=\"region\" [(ngModel)]=\"filterRegion\" (change)=\"selectRegion($event)\" #region=\"ngModel\"\n               >\n                <option value=\"\" selected>All Regions</option>\n                <option *ngFor=\"let reg of regions\" [value]=\"reg\">{{ reg }}</option>\n            </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <div class=\"form-group\">\n            <label class=\"col-lg-2 col-md-3 control-label\">City</label>\n            <div class=\"col-lg-8 col-md-8\">\n              <select class=\"fancy-select form-control\"  [(ngModel)]=\"filterCity\" name=\"city\" #city=\"ngModel\" (change)=\"selectCity($event)\">\n                    <option value=\"\" selected>All Cities</option>\n                    <option *ngFor=\"let city of cities\" [value]=\"city\">{{city}}</option>\n                </select>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-md-12 col-sm-12s\">\n      <div class=\"table-responsive\">\n        <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n          <thead>\n            <tr>\n              <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                #\n              </th>\n              <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Store</th>\n              <th id=\"custom-sort\" scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"2\">Contact</th>\n              <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">City</th>\n            </tr>\n          </thead>\n          <tbody *ngFor=\"let item of filteredStores\">\n            <tr>\n              <ng-container *ngIf=\"user.accounttype === 'super'\">\n                <td class=\"title\">\n                  <input type=\"checkbox\" name=\"select\" value=\"{{item._id}}\" (change)=\"selectElement($event)\">\n                </td>\n                <td class=\"title\"><a [routerLink]=\"['/store', item._id]\">{{ item.store_title }}</a></td>\n                <td class=\"title\">{{ item.key_contact }}</td>\n                <td class=\"title\">{{ item.store_info.city}}</td>\n              </ng-container>\n              <ng-container *ngIf=\"user.accounttype === 'staff' || user.accounttype === 'customer'\">\n                <td class=\"title\">\n                  <input type=\"checkbox\" value=\"{{item._id}}\" (change)=\"selectElement($event)\">\n                </td>\n                <td class=\"title\">\n                  <ng-container *ngIf=\"user.role\">\n                    <ng-container *ngIf=\"user.role.store.edit\">\n                      <a [routerLink]=\"['/store', item._id]\">{{ item.store_title }}</a>\n                    </ng-container>\n                    <ng-container *ngIf=\"!user.role.store.edit\">\n                      {{ item.store_title }}\n                    </ng-container>\n                  </ng-container>\n                  <ng-container *ngIf=\"user.special_permissions\">\n                    <ng-container *ngIf=\"user.special_permissions.store.edit\">\n                      <a [routerLink]=\"['/store', item._id]\">{{ item.store_title }}</a>\n                    </ng-container>\n                    <ng-container *ngIf=\"!user.special_permissions.store.edit\">\n                      {{ item.store_title }}\n                    </ng-container>\n                  </ng-container>\n                </td>\n                <td class=\"title\">{{ item.key_contact }}</td>\n                <td class=\"title\">{{ item.store_info.city}}</td>\n              </ng-container>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <ng-container *ngIf=\"user.accounttype === 'super'\">\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"button-filter\" (click)=\"deleteStores()\" class=\"btn btn-primary \"><i class=\"fa fa-delete\"></i> Delete Selected</button>\n\n        <button type=\"button\" id=\"button-filter\" (click)=\"deactivateStores()\" class=\"btn btn-primary \"><i class=\"fa fa-delete\"></i> Deactivate Selected</button>\n\n        <button type=\"button\" id=\"button-filter\" (click)=\"reactivateStores()\" class=\"btn btn-primary \"><i class=\"fa fa-delete\"></i> Reactivate Selected</button>\n      </div>\n\n    </ng-container>\n    <ng-container *ngIf=\"user.accounttype === 'customer' || user.accounttype === 'staff' \">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"user.role\">\n          <ng-container *ngIf=\"user.role.store.delete\">\n            <button type=\"button\" id=\"button-filter\" (click)=\"deactivateStores()\" class=\"btn btn-primary \"><i class=\"fa fa-delete\"></i> Deactivate Selected</button>\n\n            <button type=\"button\" id=\"button-filter\" (click)=\"reactivateStores()\" class=\"btn btn-primary \"><i class=\"fa fa-delete\"></i> Reactivate Selected</button>\n          </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"user.special_permissions\">\n          <ng-container *ngIf=\"user.special_permissions.store.delete\">\n            <button type=\"button\" id=\"button-filter\" (click)=\"deactivateStores()\" class=\"btn btn-primary \"><i class=\"fa fa-delete\"></i> Deactivate Selected</button>\n\n            <button type=\"button\" id=\"button-filter\" (click)=\"reactivateStores()\" class=\"btn btn-primary \"><i class=\"fa fa-delete\"></i> Reactivate Selected</button>\n          </ng-container>\n        </ng-container>\n      </div>\n\n    </ng-container>\n\n  </div>\n</div>\n"

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = "<!-- page title -->\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"page-title\">\n      <div class=\"row\">\n        <h4 class=\"pull-left\">Create User</h4>\n        <ol class=\"breadcrumb pull-right\">\n          <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n          <li>Create User</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end .page title-->\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"well\">\n      <div class=\"row\">\n        <div class=\"col-sm-2\">\n          <h4>User Type</h4>\n        </div>\n        <ng-container *ngIf=\"user.accounttype==='super'\">\n          <div class=\"col-sm-2 pull-left\">\n            <div>\n              <label>\n                                <input type=\"radio\" id=\"staff\" name=\"usertype\" value=\"staff\" [(ngModel)]=\"usertype\"> Staff\n                            </label>\n            </div>\n          </div>\n          <div class=\"col-sm-2\">\n            <div>\n              <label>\n                                <input type=\"radio\" id=\"customer\" name=\"usertype\" value=\"customer\" [(ngModel)]=\"usertype\"> Customer\n                            </label>\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"user.accounttype==='staff' || user.accounttype==='customer'\">\n          <ng-container *ngIf=\"user.role\">\n            <ng-container *ngIf=\" user.role.staff.create\">\n              <div class=\"col-sm-2 pull-left\">\n                <div>\n                  <label>\n                                <input type=\"radio\" id=\"staff\" name=\"usertype\" value=\"staff\" [(ngModel)]=\"usertype\"> Staff\n                            </label>\n                </div>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\" user.role.customer.create\">\n              <div class=\"col-sm-2 pull-left\">\n                <div>\n                  <label>\n                                <input type=\"radio\" id=\"customer\" name=\"usertype\" value=\"customer\" [(ngModel)]=\"usertype\"> Customer\n                            </label>\n                </div>\n              </div>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"user.special_permissions\">\n            <ng-container *ngIf=\"user.special_permissions.staff.create\">\n              <div class=\"col-sm-2 pull-left\">\n                <div>\n                  <label>\n                                <input type=\"radio\" id=\"staff\" name=\"usertype\" value=\"staff\" [(ngModel)]=\"usertype\"> Staff\n                            </label>\n                </div>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"user.special_permissions.customer.create\">\n              <div class=\"col-sm-2 pull-left\">\n                <div>\n                  <label>\n                                <input type=\"radio\" id=\"customer\" name=\"usertype\" value=\"customer\" [(ngModel)]=\"usertype\"> Customer\n                            </label>\n                </div>\n              </div>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"hr-line-dashed\"></div>\n<div class=\"row\" *ngIf=\"usertype === 'staff'\">\n  <staff-user></staff-user>\n</div>\n<div class=\"row\" *ngIf=\"usertype === 'customer'\">\n  <customer-user></customer-user>\n</div>\n"

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = "<!-- end .page title-->\n<div class=\"row\">\n  <form class=\"form-horizontal group-border stripped\" name=\"form\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <div class=\"col-md-6 margin-b-30\">\n      <div class=\"profile-overview\">\n        <div class=\"avtar text-center\">\n          <img [src]=\"logoUrl\" alt=\"Preview\" class=\"img-thumbnail img-responsive\" style=\"width:30%; height: 30%;\">\n          <h3>{{customer.username}}</h3>\n          <hr>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-2 col-md-3 control-label\">Logo</label>\n          <div class=\"col-lg-3 col-md-3\">\n            <input type=\"file\" (change)=\"readUrl($event)\" placeholder=\"Upload logo...\" />\n          </div>\n        </div>\n        <div class=\"profile-edit\">\n          <h4 class=\"mb-xlg\">Personal Information</h4>\n          <fieldset>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profileName\">Name</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" name=\"username\" id=\"profileName\" placeholder=\"Enter Your UserName\" minlength=\"4\" maxlength=\"24\" class=\"form-control\"\n                  [(ngModel)]=\"customer.username\" #username=\"ngModel\" required>\n              </div>\n              <div *ngIf=\"userForm.submitted && !username.valid\" class=\"help-block\">Name is required</div>\n              <div *ngIf=\"username.errors && (username.dirty || username.touched) && !username.valid\" class=\"col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                <div [hidden]=\"!username.errors.required\">\n                  Name is required\n                </div>\n                <div [hidden]=\"!username.errors.minlength\">\n                  Name must be at least 4 characters long.\n                </div>\n                <div [hidden]=\"!username.errors.maxlength\">\n                  Name cannot be more than 24 characters long.\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profileCompany\">Company</label>\n              <div class=\"col-md-5\">\n                <select class=\"fancy-select form-control\" id=\"profileCompany\" name=\"company\" [(ngModel)]=\"customer.company\" #company=\"ngModel\">\n                      \n                     <option *ngFor=\"let c of currentCompanies\" [value]=\"c.name\">{{c.name}}</option>\n                     </select>\n              </div>\n              <div class=\"col-md-4\" *ngIf=\"user.accounttype==='super'\">\n                <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\"> Add A Company</button>\n              </div>\n              <div class=\"col-md-4\" *ngIf=\"user.accounttype==='staff' || user.accounttype==='customer'\">\n                <ng-container *ngIf=\"user.role\">\n                  <button type=\"button\" *ngIf=\"user.role.company.create\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\"> Add A Company</button>\n                </ng-container>\n                <ng-container *ngIf=\"user.special_permissions\">\n                  <button type=\"button\" *ngIf=\"user.special_permissions.company.create\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\"> Add A Company</button>\n                </ng-container>\n              </div>\n              <div class=\"modal fade\" id=\"companyModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"display: none;\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header text-center\">\n                      <h4 class=\"modal-title\">Add A New Company</h4>\n                      <small>Please enter the content of your company.</small>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"form-group\">\n                        <label class=\"col-lg-2 col-md-3 control-label\">Company</label>\n                        <div class=\"col-lg-5 col-md-5\">\n                          <input type=\"text\" name=\"companyname\" placeholder=\"Enter Company Name\" minlength=\"3\" maxlength=\"24\" class=\"form-control\"\n                            [(ngModel)]=\"newCompany.name\" #companyname=\"ngModel\">\n                        </div>\n                        <div *ngIf=\"companyname.errors && (companyname.dirty || companyname.touched) && !companyname.valid\" class=\"col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                          <div [hidden]=\"!companyname.errors.required\">\n                            Name is required\n                          </div>\n                          <div [hidden]=\"!companyname.errors.minlength\">\n                            Name must be at least 4 characters long.\n                          </div>\n                          <div [hidden]=\"!companyname.errors.maxlength\">\n                            Name cannot be more than 24 characters long.\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                      <button type=\"button\" class=\"btn btn-accent\" data-dismiss=\"modal\" (click)=\"createCompany()\">Save changes</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"userForm.submitted && !company.valid\" class=\"help-block\">Company is required</div>\n              <div *ngIf=\"company.errors && company.touched\" class=\" col-lg-5 col-md-5  col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                <div [hidden]=\"!company.errors.required\">Company is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profileEmail\">Email</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" id=\"profileEmail\" name=\"email\" placeholder=\"Enter email\" class=\"form-control\" [(ngModel)]=\"user_info.email\"\n                  #email=\"ngModel\" [email]=\"true\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n              </div>\n              <div *ngIf=\"userForm.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n              <div *ngIf=\"email.errors && email.touched\" class=\" col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                <div [hidden]=\"!email.errors.required\">Email is required</div>\n              </div>\n              <div *ngIf=\"email.errors && email.errors.pattern\">\n                Email is invalid\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profilePhone\">Phone</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" id=\"profilePhone\" name=\"phone\" placeholder=\"Phone number\" class=\"form-control\" [(ngModel)]=\"user_info.phone\"\n                  #phone=\"ngModel\" required>\n              </div>\n              <div *ngIf=\"userForm.submitted && !phone.valid\" class=\"help-block\">Phone Number is required</div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profileMobile\">Mobile</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" id=\"profileMobile\" name=\"mobile\" placeholder=\"Mobile number\" class=\"form-control\" [(ngModel)]=\"user_info.mobile\"\n                  #mobile=\"ngModel\" required>\n              </div>\n              <div *ngIf=\"userForm.submitted && !mobile.valid\" class=\"help-block\">Mobile is required</div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profilePosition\">Position</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" id=\"profilePosition\" placeholder=\"Enter Position\" class=\"form-control\" name=\"position\" [(ngModel)]=\"customer_info.position\"\n                  #position=\"ngModel\" required>\n              </div>\n              <div *ngIf=\"userForm.submitted && !position.valid\" class=\"help-block\">Position is required</div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profilePreferContactMethod\">Prefered Contact Method</label>\n              <div class=\"col-md-8\">\n                <select class=\"fancy-select form-control\" id=\"profilePreferContactMethod\" name=\"prefered_contact\" [(ngModel)]=\"customer_info.prefered_contact\"\n                  required #prefered_contact=\"ngModel\">\n                     <option value=\"phone\">Phone</option>\n                     <option value=\"mobile\">Mobile</option>\n                     <option value=\"email\">Email</option>\n                     </select>\n              </div>\n              <div *ngIf=\"userForm.submitted && !prefered_contact.valid\" class=\"help-block\">Prefered Contact Method is required</div>\n            </div>\n            <div class=\"avtar text-center\">\n              <img [src]=\"photoUrl\" alt=\"Preview\" class=\"img-thumbnail img-responsive\" style=\"width:30%; height: 30%;\">\n              <hr>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-lg-2 col-md-3 control-label\">Photo</label>\n              <div class=\"col-lg-3 col-md-3\">\n                <input type=\"file\" (change)=\"readPhoto($event)\" placeholder=\"Upload logo...\" />\n              </div>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 margin-b-30\">\n      <div class=\"profile-edit\">\n        <h4 class=\"mb-xlg\">Address Information</h4>\n        <fieldset>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileAddress1\">Address</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" placeholder=\"\" id=\"profileAddress1\" class=\"form-control\" name=\"address1\" [(ngModel)]=\"customer_info.address.address1\"\n                #address1=\"ngModel\" required>\n            </div>\n            <div *ngIf=\"userForm.submitted && !address1.valid\" class=\"help-block\">Address is required</div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileAddress2\"></label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" id=\"profileAddress2\" placeholder=\"\" class=\"form-control\" name=\"address2\" [(ngModel)]=\"customer_info.address.address2\"\n                #address2=\"ngModel\" required>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\" col-md-3 control-label\">Region</label>\n            <div class=\"col-md-8\">\n              <select class=\"fancy-select form-control\" name=\"region\" [(ngModel)]=\"customer_info.region\" (change)=\"selectRegion($event)\"\n                #region=\"ngModel\" required>\n                  <option *ngFor = \"let reg of regions\" [value]=\"reg\">{{ reg }}</option>\n                  </select>\n            </div>\n            <div *ngIf=\"userForm.submitted && !region.valid\" class=\"help-block\">Region is required</div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">City</label>\n            <div class=\"col-md-8\">\n              <select class=\"fancy-select form-control\" name=\"city\" [(ngModel)]=\"customer_info.city\" name=\"city\" #city=\"ngModel\" required>\n                  <option *ngFor = \"let city of cities\" [value]=\"city\">{{city}}</option>   \n                  </select>\n            </div>\n            <div *ngIf=\"userForm.submitted && !city.valid\" class=\"help-block\">City is required</div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Post Code</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" placeholder=\"\" name=\"post_code\" class=\"form-control\" [(ngModel)]=\"customer_info.postcode\" #post_code=\"ngModel\"\n                required>\n            </div>\n            <div *ngIf=\"userForm.submitted && !post_code.valid\" class=\"help-block\">Post Code is required</div>\n          </div>\n        </fieldset>\n        <hr class=\"dotted tall\">\n        <h4 class=\"mb-xlg\">Permission & Access</h4>\n        <fieldset>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileRole\">Role</label>\n            <div class=\"col-md-3\" *ngIf=\"modalValid\">\n              <select class=\"fancy-select form-control\" id=\"profileRole\" name=\"role\" [(ngModel)]=\"customer.role_name\" #role=\"ngModel\">\n                  <option *ngFor=\"let r of roles\" [value]=\"r.role_name\">{{r.role_name}}</option>\n                  </select>\n            </div>\n            <div class=\"col-md-4\">\n              <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#roleModal\"> Manage This User's Permission</button>\n            </div>\n            <div class=\"modal fade\" id=\"roleModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"display: none;\">\n              <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header text-center\">\n                    <h4 class=\"modal-title\">Manage This User's Permission</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-12\">\n                        <div class=\"col-md-12 col-sm-12s\">\n                          <div class=\"table-responsive\">\n                            <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n                              <thead>\n                                <tr>\n                                  <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                                    Permitted Action\n                                  </th>\n                                  <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Create</th>\n                                  <th id=\"custom-sort\" scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"2\">Edit</th>\n                                  <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Delete</th>\n                                  <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"5\">View Only</th>\n                                </tr>\n                              </thead>\n                              <tbody>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage Staff Users\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_staff\" [checked]=\"staffPermission.create\" (change)=\"staffPermission.create = !staffPermission.create\"\n                                    /></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_staff\" [checked]=\"staffPermission.edit\" (change)=\"staffPermission.edit = !staffPermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_staff\" [checked]=\"staffPermission.delete\" (change)=\"staffPermission.delete = !staffPermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_staff\" [checked]=\"staffPermission.view\" (change)=\"staffPermission.view = !staffPermission.view\"></td>\n                                </tr>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage Customer Users\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_customer\" [checked]=\"customerPermission.create\" (change)=\"customerPermission.create = !customerPermission.create\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_customer\" [checked]=\"customerPermission.edit\" (change)=\"customerPermission.edit = !customerPermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_customer\" [checked]=\"customerPermission.delete\" (change)=\"customerPermission.delete = !customerPermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_customer\" [checked]=\"customerPermission.view\" (change)=\"customerPermission.view = !customerPermission.view\"></td>\n                                </tr>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage Stores\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_store\" [checked]=\"storePermission.create\" (change)=\"storePermission.create = !storePermission.create\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_store\" [checked]=\"storePermission.edit\" (change)=\"storePermission.edit = !storePermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_store\" [checked]=\"storePermission.delete\" (change)=\"storePermission.delete = !storePermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_store\" [checked]=\"storePermission.view\" (change)=\"storePermission.view = !storePermission.view\"></td>\n                                </tr>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage Orders\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_order\" [checked]=\"orderPermission.create\" (change)=\"orderPermission.create  = !orderPermission.create\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_order\" [checked]=\"orderPermission.edit\" (change)=\"orderPermission.edit = !orderPermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_order\" [checked]=\"orderPermission.delete\" (change)=\"orderPermission.delete = !orderPermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_order\" [checked]=\"orderPermission.view\" (change)=\"orderPermission.view = !orderPermission.view\"></td>\n                                </tr>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage User Roles\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_role\" [checked]=\"rolePermission.create\" (change)=\"rolePermission.create = !rolePermission.create\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_role\" [checked]=\"rolePermission.edit\" (change)=\"rolePermission.edit = !rolePermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_role\" [checked]=\"rolePermission.delete\" (change)=\"rolePermission.delete = !rolePermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_role\" [checked]=\"rolePermission.view\" (change)=\"rolePermission.view = !rolePermission.view\"></td>\n                                </tr>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage Companies\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_company\" [checked]=\"companyPermission.create\" (change)=\"companyPermission.create = !companyPermission.create\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_company\" [checked]=\"companyPermission.edit\" (change)=\"companyPermission.edit = !companyPermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_company\" [checked]=\"companyPermission.delete\" (change)=\"companyPermission.delete = !companyPermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_company\" [checked]=\"companyPermission.view\" (change)=\"companyPermission.view = !companyPermission.view\"></td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <br>\n                      <div class=\"col-sm-6\">\n                        <label for=\"\" class=\"col-md-5 control-label\">Home Screen</label>\n                        <div class=\"col-md-7\">\n                          <select class=\"form-control m-b\" name=\"home_url\" [(ngModel)]=\"home_url\">\n                                              <option value=\"\"></option>\n                                              <option value=\"dashboard\">Dashboard</option>\n                                              <option value=\"users\">Users</option>\n                                              <option value=\"roles\">User Roles</option>\n                                              <option value=\"stores\">Stores</option>\n                                              <option value=\"orders\">Orders</option>\n                                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <input type=\"checkbox\" name=\"display_dashboard\" [checked]=\"display_dashboard\" (change)=\"display_dashboard = !display_dashboard\">\n                        <label for=\"\">Display Dashboard</label>\n                      </div>\n                    </div>\n                    <br>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-accent\" data-dismiss=\"modal\" (click)=\"savePermissions()\">Save changes</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileParent\">Parent</label>\n            <div class=\"col-md-8\">\n              <select class=\"fancy-select form-control\" id=\"profileParent\" name=\"parent\" [(ngModel)]=\"customer.parent\" #parent=\"ngModel\">\n                  <option value=\"\"></option>\n                  <option *ngFor = \"let p of users\" [value]=\"p\">{{ p }}</option>\n                  </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profilePassword\">Password</label>\n            <div class=\"col-md-8\">\n              <input type=\"password\" id=\"profilePassword\" placeholder=\"\" class=\"form-control\" name=\"password\" [(ngModel)]=\"customer.password\"\n                #password=\"ngModel\" required>\n            </div>\n            <div *ngIf=\"userForm.submitted && !password.valid\" class=\"help-block\">Pasword is required</div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileRepeatPassword\">Confirm Password</label>\n            <div class=\"col-md-8\">\n              <input type=\"password\" id=\"profileRepeatPassword\" placeholder=\"\" class=\"form-control\" name=\"confirmpassword\" [(ngModel)]=\"customer.confirm_password\"\n                #confirmpassword=\"ngModel\" required>\n            </div>\n            <div *ngIf=\"(customer.password !== customer.confirm_password) && (confirmpassword.dirty|| confirmpassword.touched )\" class=\" col-lg-5 col-md-5  col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n              <div>The passwords entered do not match</div>\n            </div>\n          </div>\n        </fieldset>\n        <h4 class=\"mb-xlg\">Additional Information</h4>\n        <fieldset class=\"mb-xl\">\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileCustomerType\">Customer Type</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" id=\"profileCustomerType\" placeholder=\"Input Customer Type\" class=\"form-control\" [(ngModel)]=\"customer_info.customer_type\"\n                name=\"customer_type\" #customer_type=\"ngModel\" required>\n            </div>\n            <div *ngIf=\"userForm.submitted && !customer_type.valid\" class=\"help-block\">Customer Type is required</div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileAccountEmail\">Accounts Email</label>\n            <div class=\"col-md-8\">\n              <input type=\"email\" id=\"profileAccountEmail\" placeholder=\"Enter Account Email\" class=\"form-control\" [(ngModel)]=\"customer.account_email\"\n                name=\"account_email\" [email]=\"true\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" #account_email=\"ngModel\"\n                required>\n            </div>\n            <div *ngIf=\"userForm.submitted && !account_email.valid\" class=\"help-block\">Account Email is required</div>\n            <div *ngIf=\"account_email.errors && account_email.errors.pattern\">\n              Email is invalid\n            </div>\n          </div>\n        </fieldset>\n        <div class=\"panel-footer\">\n          <div class=\"row\">\n            <div class=\"col-md-9 col-md-offset-3\">\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userForm.form.valid\">Submit</button>\n              <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n              <button class=\"btn btn-info btn-primary\" (click)=\"cancel()\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = "<!-- end .page title-->\n<div class=\"row\">\n   <div class=\"col-sm-12 col-md-12\">\n      <div class=\"panel panel-card margin-b-30\">\n         <div class=\"well\">\n            <div class=\"panel-body\">\n               <form class=\"form-horizontal group-border stripped\" name=\"form\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n               <div class=\"form-group\">\n                  <label class=\"col-lg-2 col-md-3 control-label\">Name</label>\n                  <div class=\"col-lg-5 col-md-5\">\n                     <input type=\"text\" name=\"username\" placeholder=\"Enter Your UserName\" minlength=\"4\" maxlength=\"24\" class=\"form-control\" [(ngModel)]=\"staff.username\"\n                     #username=\"ngModel\" required>\n                  </div>\n                  <div *ngIf=\"username.errors && (username.dirty || username.touched) && !username.valid\" class=\"col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                     <div [hidden]=\"!username.errors.required\">\n                        Name is required\n                     </div>\n                     <div [hidden]=\"!username.errors.minlength\">\n                        Name must be at least 4 characters long.\n                     </div>\n                     <div [hidden]=\"!username.errors.maxlength\">\n                        Name cannot be more than 24 characters long.\n                     </div>\n                  </div>\n               </div>\n               \n               <div class=\"form-group\">\n                  <label class=\"col-lg-2 col-md-3 control-label\">Company</label>\n                  <div class=\"col-lg-3 col-md-3\">\n                     <select class=\"fancy-select form-control\" name=\"company\" [(ngModel)]=\"staff.company\" required #company=\"ngModel\">\n                     <option *ngFor=\"let c of currentCompanies\" [value]=\"c.name\">{{c.name}}</option>\n                     </select>\n                  </div>\n                    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\" *ngIf=\"user.accounttype==='super'\"> Add A Company</button>\n                     <ng-container *ngIf=\"user.accounttype==='staff' || user.accounttype==='customer'\">\n                        <ng-container *ngIf=\"user.role\">\n                            <ng-container>\n                                \n                            </ng-container>\n                            <button type=\"button\" *ngIf=\"user.role.company.create\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\"> Add A Company</button>\n                        </ng-container>\n                        <ng-container *ngIf=\"user.special_permissions\">\n                            <button type=\"button\" *ngIf=\"user.special_permissions.company.create\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\"> Add A Company</button>\n                        </ng-container>\n                     </ng-container>\n                  <div class=\"modal fade\" id=\"companyModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"display: none;\">\n                     <div class=\"modal-dialog\">\n                        <div class=\"modal-content\">\n                           <div class=\"modal-header text-center\">\n                              <h4 class=\"modal-title\">Add A New Company</h4>\n                              <small>Please enter the content of your company.</small>\n                           </div>\n                           <div class=\"modal-body\">\n                              <div class=\"form-group\">\n                                 <label class=\"col-lg-2 col-md-3 control-label\">Company</label>\n                                 <div class=\"col-lg-5 col-md-5\">\n                                    <input type=\"text\" name=\"companyname\" placeholder=\"Enter Company Name\" minlength=\"3\" maxlength=\"24\" class=\"form-control\"\n                                    [(ngModel)]=\"newCompany.name\" #companyname=\"ngModel\" >\n                                 </div>\n                                 <div *ngIf=\"companyname.errors && (companyname.dirty || companyname.touched) && !companyname.valid\" class=\"col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                                    <div [hidden]=\"!companyname.errors.required\">\n                                       Name is required\n                                    </div>\n                                    <div [hidden]=\"!companyname.errors.minlength\">\n                                       Name must be at least 4 characters long.\n                                    </div>\n                                    <div [hidden]=\"!companyname.errors.maxlength\">\n                                       Name cannot be more than 24 characters long.\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n                           <div class=\"modal-footer\">\n                              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                              <button type=\"button\" class=\"btn btn-accent\" data-dismiss=\"modal\" (click)=\"createCompany()\">Save changes</button>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n                  <div *ngIf=\"company.errors && company.touched\" class=\" col-lg-5 col-md-5  col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                     <div [hidden]=\"!company.errors.required\">Company is required</div>\n                  </div>\n               </div>\n               <div class=\"form-group\">\n                  <label class=\"col-lg-2 col-md-3 control-label\">Email</label>\n                  <div class=\"col-lg-5 col-md-5\">\n                     <input type=\"email\" name=\"email\" placeholder=\"Enter email\" class=\"form-control\" [(ngModel)]=\"user_info.email\" #email=\"ngModel\"\n                     [email]=\"true\" required>\n                  </div>\n                  <div *ngIf=\"email.errors && email.touched\" class=\" col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                     <div [hidden]=\"!email.errors.required\">Email is required</div>\n                  </div>\n               </div>\n               <div class=\"form-group\">\n                  <label class=\"col-lg-2 col-md-3 control-label\">Phone</label>\n                  <div class=\"col-lg-5 col-md-5\">\n                     <input type=\"text\"  name=\"phone\" placeholder=\"Phone number\" class=\"form-control\"\n                     [(ngModel)]=\"user_info.phone\" #phone=\"ngModel\" required>\n                  </div>\n               </div>\n               <div class=\"form-group\">\n                  <label class=\"col-lg-2 col-md-3 control-label\">Mobile</label>\n                  <div class=\"col-lg-5 col-md-5\">\n                     <input type=\"text\"  name=\"mobile\" placeholder=\"Phone number\" class=\"form-control\"\n                     [(ngModel)]=\"user_info.mobile\" #mobile=\"ngModel\" required>\n                  </div>\n               </div>\n               <div class=\"form-group\">\n                  <label class=\"col-lg-2  col-md-3 control-label\" for=\"profileRole\">Role</label>\n                  <div class=\"col-md-3\" *ngIf=\"modalValid\">\n                     <select class=\"fancy-select form-control\" id=\"profileRole\" name=\"role\" [(ngModel)]=\"staff.role_name\"  #role=\"ngModel\">\n                     <option *ngFor=\"let r of roles\" [value]=\"r.role_name\">{{r.role_name}}</option>\n                     </select>\n                  </div>\n                  <div class=\"col-md-4\">\n                     <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#roleModal\"> Manage This User's Permission</button>\n                  </div>\n                  <div class=\"modal fade\" id=\"roleModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"display: none;\">\n                     <div class=\"modal-dialog\">\n                        <div class=\"modal-content\">\n                           <div class=\"modal-header text-center\">\n                              <h4 class=\"modal-title\">Manage This User's Permission</h4>\n                           </div>\n                           <div class=\"modal-body\">\n                              <div class=\"row\">\n                                 <div class=\"col-sm-12\">\n                                    <div class=\"col-md-12 col-sm-12s\">\n                                       <div class=\"table-responsive\">\n                                          <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n                                             <thead>\n                                                <tr>\n                                                   <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                                                      Permitted Action\n                                                   </th>\n                                                   <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Create</th>\n                                                   <th id=\"custom-sort\" scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"2\">Edit</th>\n                                                   <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Delete</th>\n                                                   <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"5\">View Only</th>\n                                                </tr>\n                                             </thead>\n                                             <tbody>\n                                                <tr>\n                                                   <td class=\"title\">\n                                                      Manage Staff Users\n                                                   </td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"create_staff\" [checked]=\"staffPermission.create\" (change)=\"staffPermission.create = !staffPermission.create\"\n                                                      />\n                                                   </td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"edit_staff\" [checked]=\"staffPermission.edit\" (change)=\"staffPermission.edit = !staffPermission.edit\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"delete_staff\" [checked]=\"staffPermission.delete\" (change)=\"staffPermission.delete = !staffPermission.delete\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"view_staff\" [checked]=\"staffPermission.view\" (change)=\"staffPermission.view = !staffPermission.view\"></td>\n                                                </tr>\n                                                <tr>\n                                                   <td class=\"title\">\n                                                      Manage Customer Users\n                                                   </td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"create_customer\" [checked]=\"customerPermission.create\"\n                                                      (change)=\"customerPermission.create = !customerPermission.create\">\n                                                   </td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"edit_customer\" [checked]=\"customerPermission.edit\" (change)=\"customerPermission.edit = !customerPermission.edit\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"delete_customer\" [checked]=\"customerPermission.delete\"\n                                                      (change)=\"customerPermission.delete = !customerPermission.delete\">\n                                                   </td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"view_customer\" [checked]=\"customerPermission.view\" (change)=\"customerPermission.view = !customerPermission.view\"></td>\n                                                </tr>\n                                                <tr>\n                                                   <td class=\"title\">\n                                                      Manage Stores\n                                                   </td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"create_store\" [checked]=\"storePermission.create\" (change)=\"storePermission.create = !storePermission.create\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"edit_store\" [checked]=\"storePermission.edit\" (change)=\"storePermission.edit = !storePermission.edit\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"delete_store\" [checked]=\"storePermission.delete\" (change)=\"storePermission.delete = !storePermission.delete\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"view_store\" [checked]=\"storePermission.view\" (change)=\"storePermission.view = !storePermission.view\"></td>\n                                                </tr>\n                                                <tr>\n                                                   <td class=\"title\">\n                                                      Manage Orders\n                                                   </td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"create_order\" [checked]=\"orderPermission.create\" (change)=\"orderPermission.create  = !orderPermission.create\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"edit_order\" [checked]=\"orderPermission.edit\" (change)=\"orderPermission.edit = !orderPermission.edit\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"delete_order\" [checked]=\"orderPermission.delete\" (change)=\"orderPermission.delete = !orderPermission.delete\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"view_order\" [checked]=\"orderPermission.view\" (change)=\"orderPermission.view = !orderPermission.view\"></td>\n                                                </tr>\n                                                <tr>\n                                                   <td class=\"title\">\n                                                      Manage User Roles\n                                                   </td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"create_role\" [checked]=\"rolePermission.create\" (change)=\"rolePermission.create = !rolePermission.create\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"edit_role\" [checked]=\"rolePermission.edit\" (change)=\"rolePermission.edit = !rolePermission.edit\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"delete_role\" [checked]=\"rolePermission.delete\" (change)=\"rolePermission.delete = !rolePermission.delete\"></td>\n                                                   <td class=\"title\"><input type=\"checkbox\" name=\"view_role\" [checked]=\"rolePermission.view\" (change)=\"rolePermission.view = !rolePermission.view\"></td>\n                                                </tr>\n                                                <tr>\n                                                    <td class=\"title\">\n                                                        Manage Companies \n                                                    </td>                            \n                                                    <td class=\"title\"><input type=\"checkbox\" name=\"create_company\" [checked]=\"companyPermission.create\" (change)=\"companyPermission.create = !companyPermission.create\"></td>\n                                                    <td class=\"title\"><input type=\"checkbox\" name=\"edit_company\" [checked]=\"companyPermission.edit\" (change)=\"companyPermission.edit = !companyPermission.edit\"></td>\n                                                    <td class=\"title\"><input type=\"checkbox\" name=\"delete_company\" [checked]=\"companyPermission.delete\" (change)=\"companyPermission.delete = !companyPermission.delete\"></td>\n                                                    <td class=\"title\"><input type=\"checkbox\" name=\"view_company\" [checked]=\"companyPermission.view\" (change)=\"companyPermission.view = !companyPermission.view\"></td>\n                                                </tr>\n                                             </tbody>\n                                          </table>\n                                       </div>\n                                    </div>\n                                 </div>\n                              </div>\n                              <div class=\"row\">\n                                 <br>\n                                 <div class=\"col-sm-6\">\n                                     <label for=\"\" class=\"col-md-5 control-label\">Home Screen</label>\n                                     <div class=\"col-md-7\">\n                                          <select class=\"form-control m-b\" name=\"home_url\" [(ngModel)]=\"home_url\">\n                                              <option value=\"\"></option>\n                                              <option value=\"dashboard\">Dashboard</option>\n                                              <option value=\"users\">Users</option>\n                                              <option value=\"roles\">User Roles</option>\n                                              <option value=\"stores\">Stores</option>\n                                              <option value=\"orders\">Orders</option>\n                                          </select>\n                                     </div>\n                                 </div>\n                                 <div class=\"col-sm-6\">\n                                       <input type=\"checkbox\" name=\"display_dashboard\" [checked]=\"display_dashboard\" (change)=\"display_dashboard = !display_dashboard\">\n                                      <label for=\"\">Display Dashboard</label>                                      \n                                  </div>\n                              </div>\n                              <br>\n                           </div>\n                           <div class=\"modal-footer\">\n                              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                              <button type=\"button\" class=\"btn btn-accent\" data-dismiss=\"modal\" (click)=\"savePermissions()\">Save changes</button>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n                  \n               </div>\n               <div class=\"form-group\">\n                <label class=\" col-lg-2 col-md-3 control-label\" for=\"profileParent\">Parent</label>\n                <div class=\"col-md-4\">\n                    <select class=\"fancy-select form-control\" id=\"profileParent\" name=\"parent\" [(ngModel)]=\"staff.parent\"\n                    #parent=\"ngModel\" >\n                    <option value=\"\"></option>\n                    <option *ngFor = \"let p of users\" [value]=\"p\">{{ p }}</option>\n                    </select>\n                </div>\n                </div>\n               <div class=\"form-group\">\n                  <label class=\"col-lg-2 col-md-3 control-label\">Password</label>\n                  <div class=\"col-lg-3 col-md-3\">\n                     <input type=\"Password\" name=\"password\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"staff.password\" #password=\"ngModel\"\n                     required>\n                  </div>\n                  <div *ngIf=\"password.errors && password.touched\" class=\" col-lg-5 col-md-5  col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                     <div>Please enter Password</div>\n                  </div>\n               </div>\n               <div class=\"form-group\">\n                  <label class=\"col-lg-2 col-md-3 control-label\">Confirm Password</label>\n                  <div class=\"col-lg-3 col-md-3\">\n                     <input type=\"Password\" name=\"confirmPassword\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"staff.confirmPassword\" #confirmPassword=\"ngModel\"\n                     required>\n                  </div>\n                  <div *ngIf=\"(staff.password !== staff.confirmPassword) &&(confirmPassword.dirty|| confirmPassword.touched )\" class=\" col-lg-5 col-md-5  col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                     <div>The passwords entered do not match</div>\n                  </div>\n               </div>\n               <div class=\"col-md-5\">\n                  <div class=\"form-group  text-center\">\n                     <button class=\"btn btn-info btn-primary\" (click)=\"cancel()\">\n                     Cancel\n                     </button>\n                     <button type=\"submit\"  [disabled]=\"!userForm.form.valid\" class=\"btn btn-info  btn-primary\">\n                     Save\n                     </button>\n                  </div>\n               </div>\n               </form>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"page-title\">\n      <div class=\"row\">\n        <h4 class=\"pull-left\">User Details</h4>\n        <ol class=\"breadcrumb pull-right\">\n          <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n          <li>User Details</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end .page title-->\n\n<div class=\"row\">\n  <form class=\"form-horizontal group-border stripped\" name=\"form\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <div class=\"col-md-6 margin-b-30\">\n      <div class=\"profile-overview\">\n        <div class=\"avtar text-center\">\n          <img [src]=\"logoUrl\" alt=\"Preview\" class=\"img-thumbnail img-responsive\" style=\"width:30%; height: 30%;\">\n          <h3>{{customer.username}}</h3>\n          <hr>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-2 col-md-3 control-label\">Logo</label>\n          <div class=\"col-lg-3 col-md-3\">\n            <input type=\"file\" (change)=\"readUrl($event)\" placeholder=\"Upload logo...\" required />\n          </div>\n        </div>\n\n        <div class=\"profile-edit\">\n          <h4 class=\"mb-xlg\">Personal Information</h4>\n          <fieldset>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profileName\">Name</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" name=\"username\" id=\"profileName\" placeholder=\"Enter Your UserName\" minlength=\"4\" maxlength=\"24\" class=\"form-control\"\n                  [(ngModel)]=\"customer.username\" #username=\"ngModel\" required>\n              </div>\n              <div *ngIf=\"userForm.submitted && !username.valid\" class=\"help-block\">Name is required</div>\n              <div *ngIf=\"username.errors && (username.dirty || username.touched) && !username.valid\" class=\"col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                <div [hidden]=\"!username.errors.required\">\n                  Name is required\n                </div>\n                <div [hidden]=\"!username.errors.minlength\">\n                  Name must be at least 4 characters long.\n                </div>\n                <div [hidden]=\"!username.errors.maxlength\">\n                  Name cannot be more than 24 characters long.\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profileCompany\">Company</label>\n              <div class=\"col-md-4\">\n                <select class=\"fancy-select form-control\" id=\"profileCompany\" name=\"company\" [(ngModel)]=\"customer.company\" required #company=\"ngModel\">\n                        <option value=\"\"></option>\n                        <option *ngFor=\"let c of currentCompanies\" [value]=\"c.name\">{{c.name}}</option>\n                    </select>\n              </div>\n              <div class=\"col-md-4\" *ngIf=\"currentUser.accounttype==='super'\">\n                <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\"> Add A Company</button>\n              </div>\n              <div class=\"col-md-4\" *ngIf=\"currentUser.accounttype==='staff' || currentUser.accounttype==='customer'\">\n                <ng-container *ngIf=\"currentUser.role\">\n                  <button type=\"button\" *ngIf=\"currentUser.role.company.create\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\"> Add A Company</button>\n                </ng-container>\n                <ng-container *ngIf=\"currentUser.special_permissions\">\n                  <button type=\"button\" *ngIf=\"currentUser.special_permissions.company.create\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\"> Add A Company</button>\n                </ng-container>\n              </div>\n              <div class=\"modal fade\" id=\"companyModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"display: none;\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header text-center\">\n                      <h4 class=\"modal-title\">Add A New Company</h4>\n                      <small>Please enter the content of your company.</small>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"form-group\">\n                        <label class=\"col-lg-2 col-md-3 control-label\">Company</label>\n                        <div class=\"col-lg-5 col-md-5\">\n                          <input type=\"text\" name=\"companyname\" placeholder=\"Enter Company Name\" minlength=\"3\" maxlength=\"24\" class=\"form-control\"\n                            [(ngModel)]=\"newCompany.name\" #companyname=\"ngModel\">\n                        </div>\n                        <div *ngIf=\"companyname.errors && (companyname.dirty || companyname.touched) && !companyname.valid\" class=\"col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                          <div [hidden]=\"!companyname.errors.required\">\n                            Name is required\n                          </div>\n                          <div [hidden]=\"!companyname.errors.minlength\">\n                            Name must be at least 4 characters long.\n                          </div>\n                          <div [hidden]=\"!companyname.errors.maxlength\">\n                            Name cannot be more than 24 characters long.\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                      <button type=\"button\" class=\"btn btn-accent\" data-dismiss=\"modal\" (click)=\"createCompany()\">Save changes</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"userForm.submitted && !company.valid\" class=\"help-block\">Company is required</div>\n              <div *ngIf=\"company.errors && company.touched\" class=\" col-lg-5 col-md-5  col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                <div [hidden]=\"!company.errors.required\">Company is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profileEmail\">Email</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" id=\"profileEmail\" name=\"email\" placeholder=\"Enter email\" class=\"form-control\" [(ngModel)]=\"user_info.email\"\n                  #email=\"ngModel\" [email]=\"true\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n              </div>\n              <div *ngIf=\"userForm.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n              <div *ngIf=\"email.errors && email.touched\" class=\" col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                <div [hidden]=\"!email.errors.required\">Email is required</div>\n              </div>\n              <div *ngIf=\"email.errors && email.errors.pattern\">\n                Email is invalid\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profilePhone\">Phone</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" id=\"profilePhone\" name=\"phone\" placeholder=\"Phone number\" class=\"form-control\" [(ngModel)]=\"user_info.phone\"\n                  #phone=\"ngModel\" required>\n              </div>\n              <div *ngIf=\"userForm.submitted && !phone.valid\" class=\"help-block\">Phone Number is required</div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profileMobile\">Mobile</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" id=\"profileMobile\" name=\"mobile\" placeholder=\"Mobile number\" class=\"form-control\" [(ngModel)]=\"user_info.mobile\"\n                  #mobile=\"ngModel\" required>\n              </div>\n              <div *ngIf=\"userForm.submitted && !mobile.valid\" class=\"help-block\">Mobile is required</div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profilePosition\">Position</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" id=\"profilePosition\" placeholder=\"Enter Position\" class=\"form-control\" name=\"position\" [(ngModel)]=\"customer_info.position\"\n                  #position=\"ngModel\" required>\n              </div>\n              <div *ngIf=\"userForm.submitted && !position.valid\" class=\"help-block\">Position is required</div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\" for=\"profilePreferContactMethod\">Prefered Contact Method</label>\n              <div class=\"col-md-8\">\n                <select class=\"fancy-select form-control\" id=\"profilePreferContactMethod\" name=\"prefered_contact\" [(ngModel)]=\"customer_info.prefered_contact\"\n                  required #prefered_contact=\"ngModel\">\n                        <option value=\"phone\">Phone</option>\n                        <option value=\"mobile\">Mobile</option>\n                        <option value=\"email\">Email</option>\n                    </select>\n              </div>\n              <div *ngIf=\"userForm.submitted && !prefered_contact.valid\" class=\"help-block\">Prefered Contact Method is required</div>\n            </div>\n            <div class=\"avtar text-center\">\n              <img [src]=\"photoUrl\" alt=\"Preview\" class=\"img-thumbnail img-responsive\" style=\"width:30%; height: 30%;\">\n              <hr>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-lg-2 col-md-3 control-label\">Photo</label>\n              <div class=\"col-lg-3 col-md-3\">\n                <input type=\"file\" (change)=\"readPhoto($event)\" placeholder=\"Upload logo...\" />\n              </div>\n            </div>\n          </fieldset>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-md-6 margin-b-30\">\n      <div class=\"profile-edit\">\n        <h4 class=\"mb-xlg\">Address Information</h4>\n        <fieldset>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileAddress1\">Address</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" placeholder=\"\" id=\"profileAddress1\" class=\"form-control\" name=\"address1\" [(ngModel)]=\"customer_info.address.address1\"\n                #address1=\"ngModel\" required>\n            </div>\n            <div *ngIf=\"userForm.submitted && !address1.valid\" class=\"help-block\">Address is required</div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileAddress2\"></label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" id=\"profileAddress2\" placeholder=\"\" class=\"form-control\" name=\"address2\" [(ngModel)]=\"customer_info.address.address2\"\n                #address2=\"ngModel\" required>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\" col-md-3 control-label\">Region</label>\n            <div class=\"col-md-8\">\n              <select class=\"fancy-select form-control\" name=\"region\" [(ngModel)]=\"customer_info.region\" (change)=\"selectRegion($event)\"\n                #region=\"ngModel\" required>\n                    <option *ngFor = \"let reg of regions\" [value]=\"reg\">{{ reg }}</option>\n                </select>\n            </div>\n            <div *ngIf=\"userForm.submitted && !region.valid\" class=\"help-block\">Region is required</div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">City</label>\n            <div class=\"col-md-8\">\n              <select class=\"fancy-select form-control\" name=\"city\" [(ngModel)]=\"customer_info.city\" name=\"city\" #city=\"ngModel\" required>\n                            <option *ngFor = \"let city of cities\" [value]=\"city\">{{city}}</option>   \n                        </select>\n            </div>\n            <div *ngIf=\"userForm.submitted && !city.valid\" class=\"help-block\">City is required</div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Post Code</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" placeholder=\"\" name=\"post_code\" class=\"form-control\" [(ngModel)]=\"customer_info.postcode\" #post_code=\"ngModel\"\n                required>\n            </div>\n            <div *ngIf=\"userForm.submitted && !post_code.valid\" class=\"help-block\">Post Code is required</div>\n          </div>\n\n        </fieldset>\n        <hr class=\"dotted tall\">\n        <h4 class=\"mb-xlg\">Permission & Access</h4>\n        <fieldset>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileRole\">Role</label>\n            <div class=\"col-md-4\">\n              <select class=\"fancy-select form-control\" id=\"profileRole\" name=\"role\" [(ngModel)]=\"customer.role\" #role=\"ngModel\">\n                    <option value=\"\" ></option>\n                    <option *ngFor=\"let r of roles\" [value]=\"r.role_name\">{{r.role_name}}</option>\n                </select>\n            </div>\n            <div class=\"col-md-4\">\n              <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#roleModal\"> Manage This User's Permission</button>\n            </div>\n            <div class=\"modal fade\" id=\"roleModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"display: none;\">\n              <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header text-center\">\n                    <h4 class=\"modal-title\">Manage This User's Permission</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-12\">\n                        <div class=\"col-md-12 col-sm-12s\">\n                          <div class=\"table-responsive\">\n                            <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n                              <thead>\n                                <tr>\n                                  <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                                    Permitted Action\n                                  </th>\n                                  <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Create</th>\n                                  <th id=\"custom-sort\" scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"2\">Edit</th>\n                                  <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Delete</th>\n                                  <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"5\">View Only</th>\n                                </tr>\n                              </thead>\n                              <tbody>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage Staff Users\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_staff\" [checked]=\"staffPermission.create\" (change)=\"staffPermission.create = !staffPermission.create\"\n                                    /></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_staff\" [checked]=\"staffPermission.edit\" (change)=\"staffPermission.edit = !staffPermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_staff\" [checked]=\"staffPermission.delete\" (change)=\"staffPermission.delete = !staffPermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_staff\" [checked]=\"staffPermission.view\" (change)=\"staffPermission.view = !staffPermission.view\"></td>\n                                </tr>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage Customer Users\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_customer\" [checked]=\"customerPermission.create\" (change)=\"customerPermission.create = !customerPermission.create\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_customer\" [checked]=\"customerPermission.edit\" (change)=\"customerPermission.edit = !customerPermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_customer\" [checked]=\"customerPermission.delete\" (change)=\"customerPermission.delete = !customerPermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_customer\" [checked]=\"customerPermission.view\" (change)=\"customerPermission.view = !customerPermission.view\"></td>\n                                </tr>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage Stores\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_store\" [checked]=\"storePermission.create\" (change)=\"storePermission.create = !storePermission.create\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_store\" [checked]=\"storePermission.edit\" (change)=\"storePermission.edit = !storePermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_store\" [checked]=\"storePermission.delete\" (change)=\"storePermission.delete = !storePermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_store\" [checked]=\"storePermission.view\" (change)=\"storePermission.view = !storePermission.view\"></td>\n                                </tr>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage Orders\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_order\" [checked]=\"orderPermission.create\" (change)=\"orderPermission.create  = !orderPermission.create\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_order\" [checked]=\"orderPermission.edit\" (change)=\"orderPermission.edit = !orderPermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_order\" [checked]=\"orderPermission.delete\" (change)=\"orderPermission.delete = !orderPermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_order\" [checked]=\"orderPermission.view\" (change)=\"orderPermission.view = !orderPermission.view\"></td>\n                                </tr>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage User Roles\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_role\" [checked]=\"rolePermission.create\" (change)=\"rolePermission.create = !rolePermission.create\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_role\" [checked]=\"rolePermission.edit\" (change)=\"rolePermission.edit = !rolePermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_role\" [checked]=\"rolePermission.delete\" (change)=\"rolePermission.delete = !rolePermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_role\" [checked]=\"rolePermission.view\" (change)=\"rolePermission.view = !rolePermission.view\"></td>\n                                </tr>\n                                <tr>\n                                  <td class=\"title\">\n                                    Manage User Companies\n                                  </td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"create_company\" [checked]=\"companyPermission.create\" (change)=\"companyPermission.create = !companyPermission.create\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"edit_company\" [checked]=\"companyPermission.edit\" (change)=\"companyPermission.edit = !companyPermission.edit\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"delete_company\" [checked]=\"companyPermission.delete\" (change)=\"companyPermission.delete = !companyPermission.delete\"></td>\n                                  <td class=\"title\"><input type=\"checkbox\" name=\"view_company\" [checked]=\"companyPermission.view\" (change)=\"companyPermission.view = !companyPermission.view\"></td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <br>\n                      <div class=\"col-sm-6\">\n                        <label for=\"\" class=\"col-md-5 control-label\">Home Screen</label>\n                        <div class=\"col-md-7\">\n                          <select class=\"form-control m-b\" name=\"home_url\" [(ngModel)]=\"home_url\">\n                              <option value=\"\"></option>\n                              <option value=\"dashboard\">Dashboard</option>\n                              <option value=\"users\">Users</option>\n                              <option value=\"roles\">User Roles</option>\n                              <option value=\"stores\">Stores</option>\n                              <option value=\"orders\">Orders</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <input type=\"checkbox\" name=\"display_dashboard\" [checked]=\"display_dashboard\" (change)=\"display_dashboard = !display_dashboard\">\n                        <label for=\"\">Display Dashboard</label>\n                      </div>\n                    </div>\n                    <br>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-accent\" data-dismiss=\"modal\" (click)=\"savePermissions()\">Save changes</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileParent\">Parent</label>\n            <div class=\"col-md-8\">\n              <select class=\"fancy-select form-control\" id=\"profileParent\" name=\"parent\" [(ngModel)]=\"customer.parent\" #parent=\"ngModel\">\n                    <option value=\"\" ></option>\n                    <option *ngFor = \"let p of users\" [value]=\"p\">{{ p }}</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profilePassword\">Password</label>\n            <div class=\"col-md-8\">\n              <input type=\"password\" id=\"profilePassword\" placeholder=\"\" class=\"form-control\" name=\"password\" [(ngModel)]=\"customer.password\"\n                #password=\"ngModel\">\n            </div>\n            <div *ngIf=\"userForm.submitted && !password.valid\" class=\"help-block\">Pasword is required</div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileRepeatPassword\">Confirm Password</label>\n            <div class=\"col-md-8\">\n              <input type=\"password\" id=\"profileRepeatPassword\" placeholder=\"\" class=\"form-control\" name=\"confirmpassword\" [(ngModel)]=\"customer.confirm_password\"\n                #confirmpassword=\"ngModel\">\n            </div>\n            <div *ngIf=\"(customer.password !== customer.confirm_password) && (confirmpassword.dirty|| confirmpassword.touched )\" class=\" col-lg-5 col-md-5  col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n              <div>The passwords entered do not match</div>\n            </div>\n          </div>\n\n        </fieldset>\n\n        <h4 class=\"mb-xlg\">Additional Information</h4>\n        <fieldset class=\"mb-xl\">\n\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileCustomerType\">Customer Type</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" id=\"profileCustomerType\" placeholder=\"Input Customer Type\" class=\"form-control\" [(ngModel)]=\"customer_info.customer_type\"\n                name=\"customer_type\" #customer_type=\"ngModel\">\n            </div>\n            <div *ngIf=\"userForm.submitted && !customer_type.valid\" class=\"help-block\">Customer Type is required</div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\" for=\"profileAccountEmail\">Accounts Email</label>\n            <div class=\"col-md-8\">\n              <input type=\"email\" id=\"profileAccountEmail\" placeholder=\"Enter Account Email\" class=\"form-control\" [(ngModel)]=\"customer.account_email\"\n                name=\"account_email\" [email]=\"true\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" #account_email=\"ngModel\"\n                required>\n            </div>\n            <div *ngIf=\"userForm.submitted && !account_email.valid\" class=\"help-block\">Account Email is required</div>\n            <div *ngIf=\"account_email.errors && account_email.errors.pattern\">\n              Email is invalid\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"key_contact\" class=\"col-md-3 control-label\">Key Contact</label>\n            <div class=\"col-md-8\">\n              <select class=\"fancy-select form-control\" id=\"key_contact\" name=\"key_contact\" [(ngModel)]=\"customer_info.key_contact\" #company=\"ngModel\">\n                  <option value=\"\" ></option>\n                  <option *ngFor=\"let c of childs\" [value]=\"c\">{{c}}</option>\n              </select>\n            </div>\n          </div>\n\n        </fieldset>\n        <div class=\"panel-footer\">\n          <div class=\"row\">\n            <div class=\"col-md-9 col-md-offset-3\">\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userForm.form.valid\">Submit</button>\n              <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n              <button class=\"btn btn-info btn-primary\" (click)=\"cancel()\">Cancel</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"page-title\">\n            <div class=\"row\">\n                <h4 class=\"pull-left\">User Details</h4>\n                <ol class=\"breadcrumb pull-right\">\n\t                <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n\t                <li>User Details</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</div><!-- end .page title-->\n\n<!-- end .page title-->\n<div class=\"row\">\n   <div class=\"col-sm-12 col-md-12\">\n      <div class=\"panel panel-card margin-b-30\">\n         <div class=\"well\">\n            <div class=\"panel-body\">\n               <form class=\"form-horizontal group-border stripped\" name=\"form\" #userForm = \"ngForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                     <label class=\"col-lg-2 col-md-3 control-label\" >Name</label>\n                     <div class=\"col-lg-5 col-md-5\">\n                        <input type=\"text\" name=\"username\" placeholder=\"Enter Your UserName\" minlength=\"4\" maxlength=\"24\"  class=\"form-control\"  [(ngModel)]=\"staff.username\"  #username=\"ngModel\" required >\n                     </div>                     \n                     <div *ngIf=\"username.errors && (username.dirty || username.touched) && !username.valid\" class=\"col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                         <div [hidden]=\"!username.errors.required\">\n                           Name is required\n                         </div>\n                         <div [hidden]=\"!username.errors.minlength\">\n                           Name must be at least 4 characters long.\n                         </div>\n                         <div [hidden]=\"!username.errors.maxlength\">\n                           Name cannot be more than 24 characters long.\n                         </div>\n                     </div>\n                  </div>\n                  <div class=\"form-group\">\n                     <label class=\"col-lg-2 col-md-3 control-label\" >Company</label>\n                     <div class=\"col-lg-5 col-md-5\">\n                        <select class=\"fancy-select form-control\" name=\"company\" [(ngModel)]=\"staff.company\" required #company=\"ngModel\">\n                           <option *ngFor=\"let c of currentCompanies\" [value]=\"c.name\">{{c.name}}</option>\n                        </select>\n                     </div>\n                     <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\" *ngIf=\"currentUser.accounttype==='super'\"> Add A Company</button>\n                     <ng-container *ngIf=\"currentUser.accounttype==='staff' || currentUser.accounttype==='customer'\">\n                        <ng-container *ngIf=\"currentUser.role\">\n                            <button type=\"button\" *ngIf=\"currentUser.role.company.create\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\" > Add A Company</button>\n                        </ng-container>\n                        <ng-container *ngIf=\"currentUser.special_permissions\">\n                            <button type=\"button\" *ngIf=\"currentUser.special_permissions.company.create\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#companyModal\" > Add A Company</button>\n                        </ng-container>\n                     </ng-container>\n                    \n                      <div class=\"modal fade\" id=\"companyModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"display: none;\">\n                          <div class=\"modal-dialog\">\n                              <div class=\"modal-content\">\n                                  <div class=\"modal-header text-center\">\n                                      <h4 class=\"modal-title\">Add A New Company</h4>\n                                      <small>Please enter the content of your company.</small>\n                                  </div>\n                                  <div class=\"modal-body\">\n                                      <div class=\"form-group\">\n                                        <label class=\"col-lg-2 col-md-3 control-label\" >Company</label>\n                                        <div class=\"col-lg-5 col-md-5\">\n                                            <input type=\"text\" name=\"companyname\" placeholder=\"Enter Company Name\" minlength=\"3\" maxlength=\"24\"  class=\"form-control\"  [(ngModel)]=\"newCompany.name\"  #companyname=\"ngModel\" required >\n                                        </div>                     \n                                        <div *ngIf=\"companyname.errors && (companyname.dirty || companyname.touched) && !companyname.valid\" class=\"col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                                            <div [hidden]=\"!companyname.errors.required\">\n                                              Name is required\n                                            </div>\n                                            <div [hidden]=\"!companyname.errors.minlength\">\n                                              Name must be at least 4 characters long.\n                                            </div>\n                                            <div [hidden]=\"!companyname.errors.maxlength\">\n                                              Name cannot be more than 24 characters long.\n                                            </div>\n                                        </div>\n                                        \n                                      </div>\n                                  </div>\n                                  <div class=\"modal-footer\">\n                                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                      <button type=\"button\" class=\"btn btn-accent\" data-dismiss=\"modal\" (click)=\"createCompany()\">Save changes</button>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                     <div *ngIf=\"company.errors && company.touched\" class=\" col-lg-5 col-md-5  col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                      <div [hidden]=\"!company.errors.required\">Company is required</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                     <label class=\"col-lg-2 col-md-3 control-label\" >Email</label>\n                     <div class=\"col-lg-5 col-md-5\">\n                        <input type=\"email\"  name=\"email\" placeholder=\"Enter email\" class=\"form-control\"  [(ngModel)]=\"user_info.email\" #email=\"ngModel\" [email]=\"true\" required>\n                     </div>\n                     <div *ngIf=\"email.errors && email.touched\" class=\" col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                      <div [hidden]=\"!email.errors.required\">Email is required</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                     <label class=\"col-lg-2 col-md-3 control-label\" >Phone</label>\n                     <div class=\"col-lg-5 col-md-5\">\n                        <input type=\"text\"  name=\"phone\" placeholder=\"Phone number\" class=\"form-control\" [(ngModel)]=\"user_info.phone\" #phone=\"ngModel\" required>\n                     </div>\n                  </div>\n                  <div class=\"form-group\">\n                     <label class=\"col-lg-2 col-md-3 control-label\" >Mobile</label>\n                     <div class=\"col-lg-5 col-md-5\">\n                        <input type=\"text\"  name=\"mobile\" placeholder=\"Phone number\" class=\"form-control\" [(ngModel)]=\"user_info.mobile\" #mobile=\"ngModel\" required>\n                     </div>\n                  </div>                          \n                  <div class=\"form-group\">\n                     <label class=\"col-lg-2 col-md-3 control-label\" >Role</label>\n                     <div class=\"col-lg-5 col-md-5\" *ngIf=\"modalValid\">\n                        <select class=\"fancy-select form-control\" name=\"role\" [(ngModel)]=\"staff.role\" (change)=\"selectRole($event)\">\n                           <option *ngFor=\"let r of roles\" [value]=\"r.role_name\">{{r.role_name}}</option>\n                        </select>\n                     </div>\n                     <div class=\"col-md-4\">\n                     <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#roleModal\"> Manage This User's Permission</button>\n                    </div>\n                    <div class=\"modal fade\" id=\"roleModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"display: none;\">\n                       <div class=\"modal-dialog\">\n                          <div class=\"modal-content\">\n                             <div class=\"modal-header text-center\">\n                                <h4 class=\"modal-title\">Manage This User's Permission</h4>\n                             </div>\n                             <div class=\"modal-body\">\n                                <div class=\"row\">\n                                   <div class=\"col-sm-12\">\n                                      <div class=\"col-md-12 col-sm-12s\">\n                                         <div class=\"table-responsive\">\n                                            <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n                                               <thead>\n                                                  <tr>\n                                                     <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                                                        Permitted Action\n                                                     </th>\n                                                     <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Create</th>\n                                                     <th id=\"custom-sort\" scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"2\">Edit</th>\n                                                     <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Delete</th>\n                                                     <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"5\">View Only</th>\n                                                  </tr>\n                                               </thead>\n                                               <tbody>\n                                                  <tr>\n                                                     <td class=\"title\">\n                                                        Manage Staff Users\n                                                     </td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"create_staff\" [checked]=\"staffPermission.create\" (change)=\"staffPermission.create = !staffPermission.create\"\n                                                        />\n                                                     </td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"edit_staff\" [checked]=\"staffPermission.edit\" (change)=\"staffPermission.edit = !staffPermission.edit\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"delete_staff\" [checked]=\"staffPermission.delete\" (change)=\"staffPermission.delete = !staffPermission.delete\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"view_staff\" [checked]=\"staffPermission.view\" (change)=\"staffPermission.view = !staffPermission.view\"></td>\n                                                  </tr>\n                                                  <tr>\n                                                     <td class=\"title\">\n                                                        Manage Customer Users\n                                                     </td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"create_customer\" [checked]=\"customerPermission.create\"\n                                                        (change)=\"customerPermission.create = !customerPermission.create\">\n                                                     </td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"edit_customer\" [checked]=\"customerPermission.edit\" (change)=\"customerPermission.edit = !customerPermission.edit\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"delete_customer\" [checked]=\"customerPermission.delete\"\n                                                        (change)=\"customerPermission.delete = !customerPermission.delete\">\n                                                     </td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"view_customer\" [checked]=\"customerPermission.view\" (change)=\"customerPermission.view = !customerPermission.view\"></td>\n                                                  </tr>\n                                                  <tr>\n                                                     <td class=\"title\">\n                                                        Manage Stores\n                                                     </td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"create_store\" [checked]=\"storePermission.create\" (change)=\"storePermission.create = !storePermission.create\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"edit_store\" [checked]=\"storePermission.edit\" (change)=\"storePermission.edit = !storePermission.edit\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"delete_store\" [checked]=\"storePermission.delete\" (change)=\"storePermission.delete = !storePermission.delete\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"view_store\" [checked]=\"storePermission.view\" (change)=\"storePermission.view = !storePermission.view\"></td>\n                                                  </tr>\n                                                  <tr>\n                                                     <td class=\"title\">\n                                                        Manage Orders\n                                                     </td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"create_order\" [checked]=\"orderPermission.create\" (change)=\"orderPermission.create  = !orderPermission.create\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"edit_order\" [checked]=\"orderPermission.edit\" (change)=\"orderPermission.edit = !orderPermission.edit\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"delete_order\" [checked]=\"orderPermission.delete\" (change)=\"orderPermission.delete = !orderPermission.delete\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"view_order\" [checked]=\"orderPermission.view\" (change)=\"orderPermission.view = !orderPermission.view\"></td>\n                                                  </tr>\n                                                  <tr>\n                                                     <td class=\"title\">\n                                                        Manage User Roles\n                                                     </td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"create_role\" [checked]=\"rolePermission.create\" (change)=\"rolePermission.create = !rolePermission.create\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"edit_role\" [checked]=\"rolePermission.edit\" (change)=\"rolePermission.edit = !rolePermission.edit\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"delete_role\" [checked]=\"rolePermission.delete\" (change)=\"rolePermission.delete = !rolePermission.delete\"></td>\n                                                     <td class=\"title\"><input type=\"checkbox\" name=\"view_role\" [checked]=\"rolePermission.view\" (change)=\"rolePermission.view = !rolePermission.view\"></td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td class=\"title\">\n                                                          Manage Companies \n                                                      </td>                            \n                                                      <td class=\"title\"><input type=\"checkbox\" name=\"create_company\" [checked]=\"companyPermission.create\" (change)=\"companyPermission.create = !companyPermission.create\"></td>\n                                                      <td class=\"title\"><input type=\"checkbox\" name=\"edit_company\" [checked]=\"companyPermission.edit\" (change)=\"companyPermission.edit = !companyPermission.edit\"></td>\n                                                      <td class=\"title\"><input type=\"checkbox\" name=\"delete_company\" [checked]=\"companyPermission.delete\" (change)=\"companyPermission.delete = !companyPermission.delete\"></td>\n                                                      <td class=\"title\"><input type=\"checkbox\" name=\"view_company\" [checked]=\"companyPermission.view\" (change)=\"companyPermission.view = !companyPermission.view\"></td>\n                                                  </tr>\n                                               </tbody>\n                                            </table>\n                                         </div>\n                                      </div>\n                                   </div>\n                                </div>\n                                <div class=\"row\">\n                                   <br>\n                                   <div class=\"col-sm-6\">\n                                       <label for=\"\" class=\"col-md-5 control-label\">Home Screen</label>\n                                       <div class=\"col-md-7\">\n                                            <select class=\"form-control m-b\" name=\"home_url\" [(ngModel)]=\"home_url\">\n                                                <option value=\"\"></option>\n                                                <option value=\"dashboard\">Dashboard</option>\n                                                <option value=\"users\">Users</option>\n                                                <option value=\"roles\">User Roles</option>\n                                                <option value=\"stores\">Stores</option>\n                                                <option value=\"orders\">Orders</option>\n                                            </select>\n                                       </div>\n                                   </div>\n                                   <div class=\"col-sm-6\">\n                                         <input type=\"checkbox\" name=\"display_dashboard\" [checked]=\"display_dashboard\" (change)=\"display_dashboard = !display_dashboard\">\n                                        <label for=\"\">Display Dashboard</label>                                      \n                                    </div>\n                                </div>\n                                <br>\n                             </div>\n                             <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                <button type=\"button\" class=\"btn btn-accent\" data-dismiss=\"modal\" (click)=\"savePermissions()\">Save changes</button>\n                             </div>\n                          </div>\n                       </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-lg-2 col-md-3 control-label\" for=\"profileParent\">Parent</label>\n                    <div class=\"col-md-4\">\n                    <select class=\"fancy-select form-control\" id=\"profileParent\" name=\"parent\" [(ngModel)]=\"staff.parent\" #parent=\"ngModel\">\n                            <option value=\"\" ></option>\n                            <option *ngFor = \"let p of users\" [value]=\"p\">{{ p }}</option>\n                        </select>\n                    </div>\n                     </div>\n                  <div class=\"form-group\">\n                     <label class=\"col-lg-2 col-md-3 control-label\" >Password</label>\n                     <div class=\"col-lg-3 col-md-3\">\n                        <input type=\"Password\" name=\"password\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"staff.password\" #password=\"ngModel\">\n                     </div>\n                     <div *ngIf=\"password.errors && password.touched\" class=\" col-lg-5 col-md-5  col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                      <div>Please enter Password</div>\n                    </div>\n                  </div> \n                  <div class=\"form-group\">\n                     <label class=\"col-lg-2 col-md-3 control-label\" >Confirm Password</label>\n                     <div class=\"col-lg-3 col-md-3\">\n                        <input type=\"Password\" name=\"confirmPassword\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"staff.confirmPassword\" #confirmPassword=\"ngModel\" >\n                     </div>\n                     <div *ngIf=\"(staff.password !== staff.confirmPassword) &&(confirmPassword.dirty|| confirmPassword.touched )\" class=\" col-lg-5 col-md-5  col-lg-offset-2 col-md-offset-3 alert alert-danger\">\n                      <div>The passwords entered do not match</div>\n                    </div>\n                  </div> \n                  <div class=\"col-md-5\">\n                    <div class=\"form-group text-center\">\n                      <button class=\"btn btn-info btn-primary\" (click)=\"cancel()\">\n                          Cancel\n                      </button>\n                      <button type=\"submit\" class=\"btn btn-info  btn-primary\">\n                        Save\n                      </button>\n                     \n                    </div>\n                  </div>\n                                     \n               </form>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = "<ng-container  *ngIf=\"accounttype === 'staff'\">\r\n    <edit-staff [user]=\"user\"></edit-staff>\r\n</ng-container>\r\n<ng-container *ngIf=\"accounttype === 'customer'\">\r\n    <edit-customer [user]=\"user\"></edit-customer>\r\n</ng-container>"

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"page-title\">\n            <div class=\"row\">\n                <h4 class=\"pull-left\">User Management</h4>\n                <ol class=\"breadcrumb pull-right\">\n                    <li><a href=\"javascript: void(0);\"><i class=\"fa fa-home\"></i></a></li>\n                    <li>User Management</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- end .page title-->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"form-group\">\n            <ng-container *ngIf=\"user.accounttype==='super'\">\n                <a [routerLink]=\"['/create']\" class=\"btn btn-primary\"><i class=\"fa fa-user\"></i> Create New User</a>\n            </ng-container>\n            <ng-container *ngIf=\"user.accounttype==='staff' || user.accounttype==='customer'\">\n                <ng-container *ngIf=\"user.role\">\n                    <a [routerLink]=\"['/create']\" class=\"btn btn-primary\" *ngIf=\"user.role.staff.create || user.role.customer.create\"><i class=\"fa fa-user\"></i> Create New User</a>\n                </ng-container>\n                <ng-container *ngIf=\"user.special_permissions\">\n                    <a [routerLink]=\"['/create']\" class=\"btn btn-primary\" *ngIf=\"user.special_permissions.staff.create || user.special_permissions.customer.create\"><i class=\"fa fa-user\"></i> Create New User</a>\n                </ng-container>\n            </ng-container>\n        </div>\n        <div class=\"well\" *ngIf=\"user.accounttype==='super'\">\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <div class=\"form-group\">\n                        <label for=\"\" class=\"control-label\">Filter By</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-1\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"input-status\">User Type</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                        <select name=\"filter_status\" [(ngModel)]=\"filterUserType\" id=\"input-status\" class=\"form-control\">\n                            <option value=\"staff\">Staff</option>\n                            <option value=\"customer\">Customer</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-sm-1\">\n                    <div class=\"form-group\">\n                        <button type=\"button\" (click)=\"filter()\" id=\"button-filter\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-search\"></i> Filter</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"well\" *ngIf=\" user.accounttype==='staff' || user.accounttype==='customer' \">\n            <ng-container *ngIf=\" user.role \">\n                <ng-container *ngIf=\" (user.role.staff.create || user.role.staff.edit || user.role.staff.delete || user.role.staff.view) && (user.role.customer.create || user.role.customer.edit || user.role.customer.delete || user.role.customer.view) \">\n                    <div class=\"row\">\n                        <div class=\"col-sm-2\">\n                            <div class=\"form-group\">\n                                <label for=\"\" class=\"control-label\">Filter By</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-1\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"input-status\">User Type</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-3\">\n                            <div class=\"form-group\">\n                                <select name=\"filter_status\" [(ngModel)]=\"filterUserType\" id=\"input-status\" class=\"form-control\">\n                                    <option value=\"staff\">Staff</option>\n                                    <option value=\"customer\">Customer</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-1\">\n                            <div class=\"form-group\">\n                                <button type=\"button\" (click)=\"filter()\" id=\"button-filter\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-search\"></i> Filter</button>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\" user.special_permissions \">\n                <ng-container *ngIf=\" ( user.special_permissions.staff.create || user.special_permissions.staff.edit || user.special_permissions.staff.delete || user.special_permissions.staff.view) && ( user.special_permissions.customer.create || user.special_permissions.customer.edit || user.special_permissions.customer.delete || user.special_permissions.customer.view) \">\n                    <div class=\"row\">\n                        <div class=\"col-sm-2\">\n                            <div class=\"form-group\">\n                                <label for=\"\" class=\"control-label\">Filter By</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-1\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"input-status\">User Type</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-3\">\n                            <div class=\"form-group\">\n                                <select name=\"filter_status\" [(ngModel)]=\"filterUserType\" id=\"input-status\" class=\"form-control\">\n                                    <option value=\"staff\">Staff</option>\n                                    <option value=\"customer\">Customer</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-1\">\n                            <div class=\"form-group\">\n                                <button type=\"button\" (click)=\"filter()\" id=\"button-filter\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-search\"></i> Filter</button>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n            </ng-container>\n        </div>\n        <form method=\"post\" enctype=\"multipart/form-data\" id=\"form-product\" class=\"\">\n            <div class=\"table-responsive\">\n                <table class=\"tablesaw\" data-tablesaw-sortable data-tablesaw-sortable-switch>\n                    <thead *ngIf=\"user.accounttype === 'super'\">\n                        <tr>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                                #\n                            </th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Name</th>\n                            <th id=\"custom-sort\" scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"2\">Company</th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"1\">User Type</th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Status</th>\n                        </tr>\n                    </thead>\n                    <thead *ngIf=\"user.accounttype === 'staff'\">\n                        <tr>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                                #\n                            </th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Name</th>\n                            <th id=\"custom-sort\" scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"2\">Company</th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"1\">User Type</th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Status</th>\n                        </tr>\n                    </thead>\n                    <thead *ngIf=\"user.accounttype === 'customer'\">\n                        <tr>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"persist\">\n                                #\n                            </th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority=\"3\">Name</th>\n                            <th id=\"custom-sort\" scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"2\">Company</th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"1\">\n                                <abbr title=\"Rotten Tomato Rating\">User Type</abbr>\n                            </th>\n                            <th scope=\"col\" data-tablesaw-sortable-col data-tablesaw-priority=\"4\">Status</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"user.accounttype === 'super'\">\n                        <tr *ngFor=\"let item of temp\">\n                            <ng-container *ngIf=\"item.accounttype !== 'super'\">\n                                <td class=\"title\">\n                                    <input type=\"checkbox\" name=\"select\" value=\"{{item._id}}\" (change)=\"selectElement($event)\" />\n                                </td>\n                                <td class=\"title\"><a [routerLink]=\"['/user', item._id]\">{{ item.username }}</a></td>\n                                <td class=\"title\">{{ item.company }}</td>\n                                <td class=\"title\">{{ item.accounttype }}</td>\n                                <td class=\"title\">{{ item.status ? 'active' : 'inactive' }}</td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\"user.accounttype === 'staff'\">\n                        <tr *ngFor=\"let item of temp\">\n                            <ng-container *ngIf=\"user.role\">\n                                <ng-container *ngIf=\"user.role.customer.create || user.role.customer.edit || user.role.customer.delete || user.role.customer.view \">\n                                    <ng-container *ngIf=\" user.role.staff.create || user.role.staff.edit|| user.role.staff.delete || user.role.staff.view \">\n                                        <ng-container *ngIf=\"(item.accounttype !== 'super') && (item.username !== user.username) && (item.username !== user.parent)\">\n                                            <td class=\"title\">\n                                                <input type=\"checkbox\" value=\"{{item._id}}\" (change)=\"selectElement($event)\" />\n                                            </td>\n                                            <td class=\"title\">\n                                                <ng-container *ngIf=\"item.accounttype==='staff'\">\n                                                    <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.role.staff.edit\">{{ item.username }}</a>\n                                                    <ng-container *ngIf=\"!user.role.staff.edit\">\n                                                        {{ item.username }}\n                                                    </ng-container>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"item.accounttype==='customer'\">\n                                                    <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.role.customer.edit\">{{ item.username }}</a>\n                                                    <ng-container *ngIf=\"!user.role.customer.edit\">\n                                                        {{ item.username }}\n                                                    </ng-container>\n                                                </ng-container>\n                                            </td>\n                                            <td class=\"title\">{{ item.company }}</td>\n                                            <td class=\"title\">{{ item.accounttype }}</td>\n                                            <td class=\"title\">{{ item.status ? 'active' : 'inactive' }}</td>\n                                        </ng-container>\n                                    </ng-container>\n                                    <ng-container *ngIf=\" !user.role.staff.create && !user.role.staff.edit&& !user.role.staff.delete && !user.role.staff.view \">\n                                        <ng-container *ngIf=\"(item.accounttype !== 'super') && (item.accounttype !== 'staff') && (item.username !== user.username) && (item.username !== user.parent)\">\n                                            <td class=\"title\">\n                                                <input type=\"checkbox\" value=\"{{item._id}}\" (change)=\"selectElement($event)\" />\n                                            </td>\n                                            <td class=\"title\">\n                                                <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.role.customer.edit\">{{ item.username }}</a>\n                                                <ng-container *ngIf=\"!user.role.customer.edit\">\n                                                    {{ item.username }}\n                                                </ng-container>\n                                            </td>\n                                            <td class=\"title\">{{ item.company }}</td>\n                                            <td class=\"title\">{{ item.accounttype }}</td>\n                                            <td class=\"title\">{{ item.status ? 'active' : 'inactive' }}</td>\n                                        </ng-container>\n                                    </ng-container>\n                                </ng-container>\n                                <ng-container *ngIf=\"!user.role.customer.create && !user.role.customer.edit && !user.role.customer.delete && !user.role.customer.view \">\n                                    <ng-container *ngIf=\"(item.accounttype == 'staff') && (item.username !== user.username) && (item.username !== user.parent)\">\n                                        <td class=\"title\">\n                                            <input type=\"checkbox\" value=\"{{item._id}}\" (change)=\"selectElement($event)\" />\n                                        </td>\n                                        <td class=\"title\">\n                                            <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.role.staff.edit\">{{ item.username }}</a>\n                                            <ng-container *ngIf=\"!user.role.staff.edit\">\n                                                {{ item.username }}\n                                            </ng-container>\n                                        </td>\n                                        <td class=\"title\">{{ item.company }}</td>\n                                        <td class=\"title\">{{ item.accounttype }}</td>\n                                        <td class=\"title\">{{ item.status ? 'active' : 'inactive' }}</td>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-container>\n                            <ng-container *ngIf=\"user.special_permissions\">\n                                <ng-container *ngIf=\"user.special_permissions.customer.create || user.special_permissions.customer.edit || user.special_permissions.customer.delete || user.special_permissions.customer.view \">\n                                    <ng-container *ngIf=\" user.special_permissions.staff.create || user.special_permissions.staff.edit || user.special_permissions.staff.delete || user.special_permissions.staff.view  \">\n                                        <ng-container *ngIf=\"(item.accounttype !== 'super') && (item.username !== user.username) && (item.username !== user.parent)\">\n                                            <td class=\"title\">\n                                                <input type=\"checkbox\" value=\"{{item._id}}\" (change)=\"selectElement($event)\" />\n                                            </td>\n                                            <td class=\"title\">\n                                                <ng-container *ngIf=\"item.accounttype==='staff'\">\n                                                    <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.special_permissions.staff.edit\">{{ item.username }}</a>\n                                                    <ng-container *ngIf=\"!user.special_permissions.staff.edit\">\n                                                        {{ item.username }}\n                                                    </ng-container>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"item.accounttype==='customer'\">\n                                                    <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.special_permissions.customer.edit\">{{ item.username }}</a>\n                                                    <ng-container *ngIf=\"!user.special_permissions.customer.edit\">\n                                                        {{ item.username }}\n                                                    </ng-container>\n                                                </ng-container>\n                                            </td>\n                                            <td class=\"title\">{{ item.company }}</td>\n                                            <td class=\"title\">{{ item.accounttype }}</td>\n                                            <td class=\"title\">{{ item.status ? 'active' : 'inactive' }}</td>\n                                        </ng-container>\n                                    </ng-container>\n                                    <ng-container *ngIf=\" !user.special_permissions.staff.create && !user.special_permissions.staff.edit && !user.special_permissions.staff.delete && !user.special_permissions.staff.view   \">\n                                        <ng-container *ngIf=\"(item.accounttype !=='staff') && (item.accounttype !== 'super') && (item.username !== user.username) && (item.username !== user.parent)\">\n                                            <td class=\"title\">\n                                                <input type=\"checkbox\" value=\"{{item._id}}\" (change)=\"selectElement($event)\" />\n                                            </td>\n                                            <td class=\"title\">\n                                                <ng-container *ngIf=\"item.accounttype==='staff'\">\n                                                    <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.special_permissions.staff.edit\">{{ item.username }}</a>\n                                                    <ng-container *ngIf=\"!user.special_permissions.staff.edit\">\n                                                        {{ item.username }}\n                                                    </ng-container>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"item.accounttype==='customer'\">\n                                                    <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.special_permissions.customer.edit\">{{ item.username }}</a>\n                                                    <ng-container *ngIf=\"!user.special_permissions.customer.edit\">\n                                                        {{ item.username }}\n                                                    </ng-container>\n                                                </ng-container>\n                                            </td>\n                                            <td class=\"title\">{{ item.company }}</td>\n                                            <td class=\"title\">{{ item.accounttype }}</td>\n                                            <td class=\"title\">{{ item.status ? 'active' : 'inactive' }}</td>\n                                        </ng-container>\n                                    </ng-container>\n                                </ng-container>\n                                <ng-container *ngIf=\"!user.special_permissions.customer.create && !user.special_permissions.customer.edit && !user.special_permissions.customer.delete && !user.special_permissions.customer.view \">\n                                    <ng-container *ngIf=\"(item.accounttype == user.accounttype) && (item.username !== user.username) && (item.username !== user.parent) \">\n                                        <td class=\"title\">\n                                            <input type=\"checkbox\" value=\"{{item._id}}\" (change)=\"selectElement($event)\" />\n                                        </td>\n                                        <td class=\"title\">\n                                            <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.special_permissions.staff.edit\">{{ item.username }}</a>\n                                            <ng-container *ngIf=\"!user.special_permissions.staff.edit\">\n                                                {{ item.username }}\n                                            </ng-container>\n                                        </td>\n                                        <td class=\"title\">{{ item.company }}</td>\n                                        <td class=\"title\">{{ item.accounttype }}</td>\n                                        <td class=\"title\">{{ item.status ? 'active' : 'inactive' }}</td>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\" user.accounttype === 'customer'\">\n                        <tr *ngFor=\"let item of childs\">\n                            <ng-container *ngIf=\"(item.accounttype == user.accounttype) && (item.username !== user.username) && (item.username !== user.parent)\">\n                                <td class=\"title\">\n                                    <input type=\"checkbox\" value=\"{{item._id}}\" (change)=\"selectElement($event)\" />\n                                </td>\n                                <td class=\"title\">\n                                    <ng-container *ngIf=\"user.role\">\n                                        <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.role.customer.edit\">{{ item.username }}</a>\n                                        <ng-container *ngIf=\"!user.role.customer.edit\">\n                                            {{ item.username }}\n                                        </ng-container>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"user.special_permissions\">\n                                        <a [routerLink]=\"['/user', item._id]\" *ngIf=\"user.special_permissions.customer.edit\">{{ item.username }}</a>\n                                        <ng-container *ngIf=\"!user.special_permissions.customer.edit\">{{ item.username }}</ng-container>\n                                    </ng-container>\n                                </td>\n                                <td class=\"title\">{{ item.company }}</td>\n                                <td class=\"title\">{{ item.accounttype }}</td>\n                                <td class=\"title\">{{ item.status ? 'active' : 'inactive' }}</td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </form>\n        <br>\n        <div class=\"form-group\">\n            <ng-container *ngIf=\"user.accounttype === 'super'\">\n                <button type=\"button\"  id=\"button-filter\" class=\"btn btn-primary \" (click)=\"deleteUsers()\"><i class=\"fa fa-delete\"></i> Delete Selected</button>\n                <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary\" (click)=\"inActivateUsers()\"><i class=\"fa fa-delete\"></i> Deactivate Selected</button>\n                <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary\" (click)=\"reActivateUsers()\"><i class=\"fa fa-delete\"></i> Reactivate Selected</button>\n            </ng-container>\n            <ng-container *ngIf=\"user.accounttype === 'staff' || user.accounttype === 'customer' \">\n                <ng-container *ngIf=\"user.role\">\n                    <ng-container *ngIf=\"user.role.staff.delete || user.role.customer.delete\">\n                        <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary\" (click)=\"inActivateUsers()\"><i class=\"fa fa-delete\"></i> Deactivate Selected</button>\n                        <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary\" (click)=\"reActivateUsers()\"><i class=\"fa fa-delete\"></i> Reactivate Selected</button>\n                    </ng-container>\n                </ng-container>\n                <ng-container *ngIf=\"user.special_permissions\">\n                    <ng-container *ngIf=\"user.special_permissions.staff.delete || user.special_permissions.customer.delete\">\n                        <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary\" (click)=\"inActivateUsers()\"><i class=\"fa fa-delete\"></i> Deactivate Selected</button>\n                        <button type=\"button\" id=\"button-filter\" class=\"btn btn-primary\" (click)=\"reActivateUsers()\"><i class=\"fa fa-delete\"></i> Reactivate Selected</button>\n                    </ng-container>\n                </ng-container>\n            </ng-container>            \n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ })
],[271]);
//# sourceMappingURL=main.bundle.js.map