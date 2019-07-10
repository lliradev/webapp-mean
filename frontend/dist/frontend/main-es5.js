(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NAVBAR -->\r\n<div class=\"navbar-fixed\">\r\n  <nav class=\"deep-purple\">\r\n    <div class=\"nav-wrapper container\">\r\n      <a routerLink=\"\" class=\"brand-logo\">Muelle 13</a>\r\n      <a href=\"#\" data-target=\"menu-responsive\" class=\"sidenav-trigger\">\r\n        <i class=\"material-icons\">menu</i>\r\n      </a>\r\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n        <div *ngIf=\"!user.isLoggedIn(); else logout\">\r\n          <li routerLinkActive=\"active current\"><a routerLink=\"/signup\">Sign Up</a></li>\r\n          <li routerLinkActive=\"active current\"><a routerLink=\"/login\">Sign In</a></li>\r\n        </div>\r\n        <ng-template #logout>\r\n          <li routerLinkActive=\"active current\"><a routerLink=\"/photos\">Photos</a></li>\r\n          <li routerLinkActive=\"active current\"><a routerLink=\"/suppliers\">Suppliers</a></li>\r\n          <li routerLinkActive=\"active current\"><a routerLink=\"/internal\">Internal</a></li>\r\n          <li routerLinkActive=\"active current\"><a routerLink=\"/menu\">Menu</a></li>\r\n          <li><a>Logout</a></li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<!-- SIDENAV -->\r\n<ul class=\"sidenav\" id=\"menu-responsive\">\r\n  <div *ngIf=\"!user.isLoggedIn(); else logoutmobile\">\r\n    <li><a class=\"subheader\">Sign Up or Sign In</a></li>\r\n    <li>\r\n      <div class=\"divider\"></div>\r\n    </li>\r\n    <li routerLinkActive=\"active current\">\r\n      <a routerLink=\"/signup\" class=\"sidenav-close\">Sign Up</a>\r\n    </li>\r\n    <li routerLinkActive=\"active current\">\r\n      <a routerLink=\"/login\" class=\"sidenav-close\">Sign In</a>\r\n    </li>\r\n  </div>\r\n\r\n  <ng-template #logoutmobile>\r\n    <li><a class=\"subheader\">Menu</a></li>\r\n    <li>\r\n      <div class=\"divider\"></div>\r\n    </li>\r\n    <li routerLinkActive=\"active current\">\r\n      <a routerLink=\"/photos\" class=\"sidenav-close\">\r\n        <i class=\"material-icons\">photo</i>\r\n        Photos\r\n      </a>\r\n    </li>\r\n    <li routerLinkActive=\"active current\">\r\n      <a routerLink=\"/suppliers\" class=\"sidenav-close\">\r\n        <i class=\"material-icons\">drive_eta</i>\r\n        <span matBadge=\"4\" matBadgeOverlap=\"false\">Suppliers</span>\r\n      </a>\r\n    </li>\r\n    <li routerLinkActive=\"active current\">\r\n      <a routerLink=\"/internal\" class=\"sidenav-close\">\r\n        <i class=\"material-icons\">note</i>\r\n        Internal\r\n      </a>\r\n    </li>\r\n    <li routerLinkActive=\"active current\">\r\n      <a routerLink=\"/menu\" class=\"sidenav-close\">\r\n        <i class=\"material-icons\">restaurant_menu</i>\r\n        Menu\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a>\r\n        <i class=\"material-icons\">keyboard_return</i>\r\n        Logout\r\n      </a>\r\n    </li>\r\n  </ng-template>\r\n</ul>\r\n\r\n<!-- CONTENT -->\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works</p>\n\n<div *ngFor=\"let photo of photoService.photos\">\n    <img class=\"responsive-img materialboxed\" src=\"{{ photo.imageURL }}\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/internal/internal.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/internal/internal.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m12 l4\">\n    <div class=\"card\">\n      <div class=\"card-action\">\n        <div class=\"input-field col s12\">\n          <span class=\"card-title\">Gastos Internos</span>\n        </div>\n      </div>\n\n      <form #internalForm=\"ngForm\" (ngSubmit)=\"addInternal(internalForm)\">\n        <div class=\"card-content\">\n          <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"internalService.selectedInternal._id\">\n          <div class=\"row\">\n            <label>Tipo de gasto</label>\n            <select class=\"browser-default\" name=\"type\" #type=\"ngModel\"\n              [(ngModel)]=\"internalService.selectedInternal.type\">\n              <option value=\"\" disabled selected>Elige una opción</option>\n              <option value=\"Aumento de salario\">Aumento de salario</option>\n              <option value=\"Gas\">Gas</option>\n              <option value=\"Agua\">Agua</option>\n              <option value=\"Internet\">Internet</option>\n            </select>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" name=\"responsible\" #responsible=\"ngModel\"\n                [(ngModel)]=\"internalService.selectedInternal.responsible\" placeholder=\"Ingrese responsable\" required>\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"number\" name=\"amount\" #amount=\"ngModel\" [(ngModel)]=\"internalService.selectedInternal.amount\"\n                placeholder=\"Ingrese monto\" required>\n            </div>\n            <div class=\"input-field col s12\">\n              <textarea name=\"reason\" #reason=\"ngModel\" [(ngModel)]=\"internalService.selectedInternal.reason\" cols=\"30\"\n                rows=\"20\" class=\"materialize-textarea\" placeholder=\"Escriba el motivo\" required></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-action\">\n          <button mat-raised-button color=\"accent\" class=\"btn\">\n            Guardar\n          </button>\n          <button mat-raised-button color=\"warn\" class=\"btn right\" (click)=\"resetForm(internalForm)\">\n            Limpiar\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"col s12 m12 l8\">\n    <table class=\"card responsive-table\">\n      <thead>\n        <tr>\n          <th>Tipo de gasto</th>\n          <th>Responsable</th>\n          <th>Monto</th>\n          <th>Operations</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let internal of internalService.allInternal\">\n          <td>{{ internal.type }}</td>\n          <td>{{ internal.responsible }}</td>\n          <td>{{ internal.amount | currency}}</td>\n          <td>\n            <a (click)=\"editInternal(internal)\">\n              <i class=\"material-icons\">edit</i>\n            </a>\n            <a (click)=\"deleteInternal(internal._id)\">\n              <i class=\"material-icons\">delete</i>\n            </a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m12 l4\">\n    <div class=\"card\">\n      <form #menuForm=\"ngForm\" (ngSubmit)=\"addMenu(menuForm)\">\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <label>Tipo de alimento/bebida</label>\n            <select class=\"browser-default\" name=\"type\" #type=\"ngModel\" [(ngModel)]=\"menuService.selectedMenu.type\">\n              <option value=\"\" disabled selected>Elige una opción</option>\n              <option value=\"Bebida\">Bebida</option>\n              <option value=\"Comida fria\">Comida fria</option>\n              <option value=\"Comida caliente\">Comida caliente</option>\n            </select>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"menuService.selectedMenu.name\"\n                placeholder=\"Ingrese nombre\">\n            </div>\n            <div class=\"input-field col s12\">\n              <textarea name=\"description\" #description=\"ngModel\" [(ngModel)]=\"menuService.selectedMenu.description\"\n                class=\"materialize-textarea\" placeholder=\"Escriba una descripcion\"></textarea>\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"number\" name=\"price\" #price=\"ngModel\" [(ngModel)]=\"menuService.selectedMenu.price\"\n                placeholder=\"Ingrese precio\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" name=\"image\" #image=\"ngModel\" [(ngModel)]=\"menuService.selectedMenu.image\"\n                placeholder=\"Imagen\">\n            </div>\n          </div>\n          <!-- SHOW IMAGE -->\n          <img class=\"responsive-img materialboxed\" id=\"img-selected\">\n        </div>\n        <div class=\"card-action\">\n          <button mat-raised-button color=\"accent\" class=\"btn\">\n            Save\n          </button>\n          <button mat-raised-button color=\"warn\" class=\"btn right\" (click)=\"resetForm(menuForm)\">\n            Clear\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"col s12 m12 l8\">\n    <div class=\"row\">\n      <div *ngFor=\"let menu of menuService.menus\">\n        <div class=\"col s12 m12 l6\">\n          <div class=\"card\">\n            <div class=\"card-image\">\n              <img src=\"{{ menu.image }}\" class=\"materialboxed\">\n              <h1 class=\"card-title\"><b>{{ menu.name }}</b></h1>\n            </div>\n            <div class=\"card-content\">\n              <p>{{ menu.description }}</p>\n            </div>\n            <div class=\"card-action\">\n              <a (click)=\"editMenu(menu)\">\n                <i class=\"material-icons\">edit</i>\n              </a>\n              <a (click)=\"deleteMenu(menu._id)\">\n                <i class=\"material-icons\">delete</i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/photos/photos.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/photos/photos.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s12 m12 l4\">\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>Photo</mat-card-title>\r\n      </mat-card-header>\r\n      <form #photoForm=\"ngForm\" (ngSubmit)=\"addPhoto(photoForm)\">\r\n        <mat-card-content>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n              <input type=\"text\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"photoService.selectedPhoto.title\"\r\n                placeholder=\"Title\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <textarea name=\"description\" #description=\"ngModel\" [(ngModel)]=\"photoService.selectedPhoto.description\"\r\n                class=\"materialize-textarea\" placeholder=\"Description\"></textarea>\r\n            </div>\r\n            <div class=\"file-field input-field col 12\">\r\n              <div class=\"btn\">\r\n                <span>File</span>\r\n                <input type=\"file\" id=\"file\" name=\"imageURL\" #imageURL=\"ngModel\"\r\n                  [(ngModel)]=\"photoService.selectedPhoto.imageURL\" onchange=\"show()\" accept=\"image/*\">\r\n              </div>\r\n              <div class=\"file-path-wrapper\">\r\n                <input class=\"file-path validate\" type=\"text\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- SHOW IMAGE -->\r\n          <img class=\"responsive-img materialboxed\" id=\"img-selected\">\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"accent\" class=\"btn\">\r\n            Save\r\n          </button>\r\n          <button mat-raised-button color=\"warn\" class=\"btn right\" (click)=\"resetForm(photoForm)\">\r\n            Clear\r\n          </button>\r\n        </mat-card-actions>\r\n      </form>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"col s12 m12 l8\">\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let photo of photoService.photos\">\r\n        <div class=\"col s12 m12 l6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-image\">\r\n              <img src=\"{{ photo.imageURL }}\" class=\"materialboxed\">\r\n              <h1 class=\"card-title\"><b>{{ photo.title }}</b></h1>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <p>{{ photo.description }}</p>\r\n            </div>\r\n            <div class=\"card-action\">\r\n              <a href=\"{{ photo.imageURL }}\" target=\"_blanck\">\r\n                <i class=\"material-icons\">pageview</i>\r\n              </a>\r\n              <a><i class=\"material-icons\">edit</i></a>\r\n              <a><i class=\"material-icons\">delete</i></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/suppliers/suppliers.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/suppliers/suppliers.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m12 l4\">\n    <div class=\"card\">\n      <div class=\"card-action\">\n        <div class=\"input-field col s12\">\n          <span class=\"card-title\">Suppliers</span>\n        </div>\n      </div>\n\n      <form #supplierForm=\"ngForm\" (ngSubmit)=\"addSupplier(supplierForm)\">\n        <div class=\"card-content\">\n          <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"supplierService.selectedSupplier._id\">\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" name=\"companyName\" #companyName=\"ngModel\"\n                [(ngModel)]=\"supplierService.selectedSupplier.companyName\" placeholder=\"Enter company name\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" name=\"contactName\" #contactName=\"ngModel\"\n                [(ngModel)]=\"supplierService.selectedSupplier.contactName\" placeholder=\"Enter contact name\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" name=\"address\" #address=\"ngModel\"\n                [(ngModel)]=\"supplierService.selectedSupplier.address\" placeholder=\"Enter address\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"supplierService.selectedSupplier.city\"\n                placeholder=\"Enter city\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"number\" name=\"postalCode\" #postalCode=\"ngModel\"\n                [(ngModel)]=\"supplierService.selectedSupplier.postalCode\" placeholder=\"Enter postal code\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" name=\"country\" #country=\"ngModel\"\n                [(ngModel)]=\"supplierService.selectedSupplier.country\" placeholder=\"Enter country\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"number\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"supplierService.selectedSupplier.phone\"\n                placeholder=\"Enter phone\">\n            </div>\n          </div>\n        </div>\n        <div class=\"card-action\">\n          <button mat-raised-button color=\"accent\" class=\"btn\">\n            Save\n          </button>\n          <button mat-raised-button color=\"warn\" class=\"btn right\" (click)=\"resetForm(supplierForm)\">\n            Clear\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"col s12 m12 l8\">\n    <table class=\"card responsive-table highlight\">\n      <thead>\n        <th>Company</th>\n        <th>Contact</th>\n        <th>Phone</th>\n        <th>Operations</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let supplier of supplierService.suppliers\">\n          <td>{{ supplier.companyName }}</td>\n          <td>{{ supplier.contactName }}</td>\n          <td>{{ supplier.phone }}</td>\n          <td>\n            <a (click)=\"editSupplier(supplier)\">\n              <i class=\"material-icons\">edit</i>\n            </a>\n            <a (click)=\"deleteSupplier(supplier._id)\">\n              <i class=\"material-icons\">delete</i>\n            </a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-profile/user-profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-profile/user-profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" *ngIf=\"userDetails\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>{{ userDetails.fullname }}</mat-card-title>\n    <mat-card-subtitle>{{userDetails.email}}</mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content></mat-card-content>\n  \n  <mat-card-actions>\n    <button mat-raised-button type=\"button\" (click)=\"onLogout()\">Logout</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/sign-in/sign-in.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/sign-in/sign-in.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row valign-wrapper\">\n  <div class=\"col s12 m12 l6 offset-l3 valign\">\n    <div class=\"card\">\n      <div class=\"card-action white-text\" id=\"card-title\">\n        <span class=\"card-title\">Sign In</span>\n      </div>\n      <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n        <div class=\"card-content\">\n          <input type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" required\n            [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\">\n          <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n            <label class=\"validation-message\">Invalid email address.</label>\n          </div>\n\n          <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\"\n            required minlength=\"4\" [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !password.valid }\">\n          <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n            <label class=\"validation-message\">Minimum 4 characters.</label>\n          </div>\n        </div>\n        <div class=\"card-action\">\n          <button mat-raised-button color=\"primary\" type=\"submit\">Sign In</button>\n        </div>\n      </form>\n    </div>\n\n    <!-- Error message -->\n    <div class=\"alert\" *ngIf=\"serverErrorMessages\">\n      {{serverErrorMessages}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/sign-up/sign-up.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/sign-up/sign-up.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row valign-wrapper\">\n  <div class=\"col s12 m12 l6 offset-l3 valign\">\n    <div class=\"card\">\n      <div class=\"card-action white-text\" id=\"card-title\">\n        <span class=\"card-title\">Sign Up</span>\n      </div>\n      <form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n        <div class=\"card-content\">\n          <input type=\"text\" #fullname=\"ngModel\" [(ngModel)]=\"userService.selectedUser.fullname\" name=\"fullname\"\n            placeholder=\"Full Name\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !fullname.valid }\">\n          <div *ngIf=\"signUpForm.submitted && !fullname.valid\">\n            <label class=\"validation-message\">This field is required.</label>\n          </div>\n\n          <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" name=\"email\"\n            placeholder=\"Email\" required [pattern]=\"emailRegex\"\n            [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\n          <div *ngIf=\"signUpForm.submitted && email.errors\">\n            <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n            <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n          </div>\n\n          <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\"\n            placeholder=\"Password\" minlength=\"4\" required\n            [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n          <div *ngIf=\"signUpForm.submitted && password.errors\">\n            <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n            <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n          </div>\n        </div>\n\n        <div class=\"card-action\">\n          <button mat-raised-button color=\"primary\" type=\"submit\">Sign Up</button>\n        </div>\n      </form>\n\n      <!-- Success message -->\n      <div class=\"success\" *ngIf=\"showSucessMessage\">\n        Saved successfully\n      </div>\n\n      <!-- Error message -->\n      <div class=\"alert\" *ngIf=\"serverErrorMessages\">\n        {{serverErrorMessages}}\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/user.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/photos/photos.component */ "./src/app/components/photos/photos.component.ts");
/* harmony import */ var _components_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/suppliers/suppliers.component */ "./src/app/components/suppliers/suppliers.component.ts");
/* harmony import */ var _components_internal_internal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/internal/internal.component */ "./src/app/components/internal/internal.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/sign-up/sign-up.component */ "./src/app/components/user/sign-up/sign-up.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/sign-in/sign-in.component */ "./src/app/components/user/sign-in/sign-in.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");

// modules


// components









var routes = [
    {
        path: 'signup', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
        children: [{ path: '', component: _components_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
        children: [{ path: '', component: _components_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"] }]
    },
    {
        path: 'profile', component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    { path: 'photos', component: _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_3__["PhotosComponent"] },
    { path: 'suppliers', component: _components_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_4__["SuppliersComponent"] },
    { path: 'internal', component: _components_internal_internal_component__WEBPACK_IMPORTED_MODULE_5__["InternalComponent"] },
    { path: 'menu', component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(user) {
        this.user = user;
        this.title = 'frontend';
    }
    AppComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/photos/photos.component */ "./src/app/components/photos/photos.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/suppliers/suppliers.component */ "./src/app/components/suppliers/suppliers.component.ts");
/* harmony import */ var _components_internal_internal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/internal/internal.component */ "./src/app/components/internal/internal.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/sign-up/sign-up.component */ "./src/app/components/user/sign-up/sign-up.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user/sign-in/sign-in.component */ "./src/app/components/user/sign-in/sign-in.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");

// built-in





// components















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_8__["PhotosComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_11__["SuppliersComponent"],
                _components_internal_internal_component__WEBPACK_IMPORTED_MODULE_12__["InternalComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
                _components_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__["SignUpComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"],
                _components_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__["AuthInterceptor"],
                    multi: true
                }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], _services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.userService.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/login');
                }
            }));
        }
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(photoService) {
        this.photoService = photoService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPhotos();
    };
    HomeComponent.prototype.getPhotos = function () {
        var _this = this;
        this.photoService.getPhotos()
            .subscribe(function (res) {
            _this.photoService.photos = res;
            console.log(res);
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/internal/internal.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/internal/internal.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n    display: block;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\ntable th {\r\n    background-color: #673ab7;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRlcm5hbC9pbnRlcm5hbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludGVybmFsL2ludGVybmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnRhYmxlIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnRhYmxlIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/internal/internal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/internal/internal.component.ts ***!
  \***********************************************************/
/*! exports provided: InternalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalComponent", function() { return InternalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_internal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/internal.service */ "./src/app/services/internal.service.ts");
/* harmony import */ var src_app_models_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/internal */ "./src/app/models/internal.ts");




var InternalComponent = /** @class */ (function () {
    function InternalComponent(internalService) {
        this.internalService = internalService;
    }
    InternalComponent.prototype.ngOnInit = function () {
        this.findAll();
    };
    InternalComponent.prototype.addInternal = function (form) {
        var _this = this;
        if (form.value._id) {
            this.internalService.putInternal(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Update successfully!', classes: 'rounded' });
                _this.findAll();
            });
        }
        else {
            this.internalService.postInternal(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Saved successfully!', classes: 'rounded' });
                _this.findAll();
            });
        }
    };
    InternalComponent.prototype.findAll = function () {
        var _this = this;
        this.internalService.findAll()
            .subscribe(function (res) {
            _this.internalService.allInternal = res;
            console.log(res);
        });
    };
    InternalComponent.prototype.editInternal = function (internal) {
        this.internalService.selectedInternal = internal;
    };
    InternalComponent.prototype.deleteInternal = function (_id) {
        var _this = this;
        if (confirm('Are you sure want to delete it?')) {
            this.internalService.deleteInternal(_id)
                .subscribe(function (res) {
                _this.findAll();
                M.toast({ html: 'Deleted successfully!', classes: 'rounded' });
            });
        }
    };
    InternalComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.internalService.selectedInternal = new src_app_models_internal__WEBPACK_IMPORTED_MODULE_3__["Internal"]();
        }
    };
    InternalComponent.ctorParameters = function () { return [
        { type: src_app_services_internal_service__WEBPACK_IMPORTED_MODULE_2__["InternalService"] }
    ]; };
    InternalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-internal',
            template: __webpack_require__(/*! raw-loader!./internal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/internal/internal.component.html"),
            styles: [__webpack_require__(/*! ./internal.component.css */ "./src/app/components/internal/internal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_internal_service__WEBPACK_IMPORTED_MODULE_2__["InternalService"]])
    ], InternalComponent);
    return InternalComponent;
}()); //End class



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var src_app_models_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/menu */ "./src/app/models/menu.ts");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuService) {
        this.menuService = menuService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.findAll();
    };
    MenuComponent.prototype.addMenu = function (form) {
        var _this = this;
        if (form.value._id) {
            this.menuService.putMenu(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Update successfully!', classes: 'rounded' });
                _this.findAll();
            });
        }
        else {
            this.menuService.postMenu(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Saved successfully!', classes: 'rounded' });
                _this.findAll();
            });
        }
    };
    MenuComponent.prototype.findAll = function () {
        var _this = this;
        this.menuService.findAll()
            .subscribe(function (res) {
            _this.menuService.menus = res;
            console.log(res);
        });
    };
    MenuComponent.prototype.editMenu = function (menu) {
        this.menuService.selectedMenu = menu;
    };
    MenuComponent.prototype.deleteMenu = function (_id) {
        var _this = this;
        if (confirm('Are you sure want to delete it?')) {
            this.menuService.deleteMenu(_id)
                .subscribe(function (res) {
                _this.findAll();
                M.toast({ html: 'Deleted successfully!', classes: 'rounded' });
            });
        }
    };
    MenuComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.menuService.selectedMenu = new src_app_models_menu__WEBPACK_IMPORTED_MODULE_3__["Menu"]();
        }
    };
    MenuComponent.ctorParameters = function () { return [
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
    ]; };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], MenuComponent);
    return MenuComponent;
}()); //End class



/***/ }),

/***/ "./src/app/components/photos/photos.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/photos/photos.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/photos/photos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/photos/photos.component.ts ***!
  \*******************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_models_photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/photo */ "./src/app/models/photo.ts");




var PhotosComponent = /** @class */ (function () {
    function PhotosComponent(photoService) {
        this.photoService = photoService;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.getPhotos();
    };
    PhotosComponent.prototype.addPhoto = function (form) {
        var _this = this;
        if (form.value._id) {
            this.photoService.putPhoto(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Updated successfully!', classes: 'rounded' });
                _this.getPhotos();
            });
        }
        else {
            this.photoService.postPhoto(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Saved successfully!', classes: 'rounded' });
                _this.getPhotos();
            });
        }
    };
    PhotosComponent.prototype.getPhotos = function () {
        var _this = this;
        this.photoService.getPhotos()
            .subscribe(function (res) {
            _this.photoService.photos = res;
            console.log(res);
        });
    };
    PhotosComponent.prototype.editPhotos = function (photo) {
        this.photoService.selectedPhoto = photo;
    };
    PhotosComponent.prototype.deletePhoto = function (_id) {
        var _this = this;
        if (confirm('Are you sure want to delete it?')) {
            this.photoService.deletePhoto(_id)
                .subscribe(function (res) {
                _this.getPhotos();
                M.toast({ html: 'Deleted successfully!', classes: 'rounded' });
            });
        }
    };
    PhotosComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.photoService.selectedPhoto = new src_app_models_photo__WEBPACK_IMPORTED_MODULE_3__["Photo"]();
        }
    };
    PhotosComponent.ctorParameters = function () { return [
        { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] }
    ]; };
    PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! raw-loader!./photos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/photos/photos.component.html"),
            providers: [src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]],
            styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/components/photos/photos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])
    ], PhotosComponent);
    return PhotosComponent;
}()); //End class



/***/ }),

/***/ "./src/app/components/suppliers/suppliers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/suppliers/suppliers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\ntable th {\r\n    background-color: #673ab7;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\ntable td {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwbGllcnMvc3VwcGxpZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdXBwbGllcnMvc3VwcGxpZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50YWJsZSB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50YWJsZSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/suppliers/suppliers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/suppliers/suppliers.component.ts ***!
  \*************************************************************/
/*! exports provided: SuppliersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersComponent", function() { return SuppliersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var src_app_models_supplier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/supplier */ "./src/app/models/supplier.ts");




var SuppliersComponent = /** @class */ (function () {
    function SuppliersComponent(supplierService) {
        this.supplierService = supplierService;
        this.displayedColumns = ['company', 'contact', 'phone', 'operations'];
        this.dataSource = this.supplierService.suppliers;
    }
    SuppliersComponent.prototype.ngOnInit = function () {
        this.getSuppliers();
    };
    SuppliersComponent.prototype.addSupplier = function (form) {
        var _this = this;
        if (form.value._id) {
            this.supplierService.putSupplier(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Updated successfully!', classes: 'rounded' });
                _this.getSuppliers();
            });
        }
        else {
            this.supplierService.postSupplier(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                M.toast({ html: 'Saved successfully!', classes: 'rounded' });
                _this.getSuppliers();
            });
        }
    };
    SuppliersComponent.prototype.getSuppliers = function () {
        var _this = this;
        this.supplierService.getSuppliers()
            .subscribe(function (res) {
            _this.supplierService.suppliers = res;
            console.log(res);
        });
    };
    SuppliersComponent.prototype.editSupplier = function (supplier) {
        this.supplierService.selectedSupplier = supplier;
    };
    SuppliersComponent.prototype.deleteSupplier = function (_id) {
        var _this = this;
        if (confirm('Are you sure you want to delete it?')) {
            this.supplierService.deleteSupplier(_id)
                .subscribe(function (res) {
                _this.getSuppliers();
                M.toast({ html: 'Deleted successfully!', classes: 'rounded' });
            });
        }
    };
    SuppliersComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.supplierService.selectedSupplier = new src_app_models_supplier__WEBPACK_IMPORTED_MODULE_3__["Supplier"]();
        }
    };
    SuppliersComponent.ctorParameters = function () { return [
        { type: src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"] }
    ]; };
    SuppliersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suppliers',
            template: __webpack_require__(/*! raw-loader!./suppliers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/suppliers/suppliers.component.html"),
            providers: [src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"]],
            styles: [__webpack_require__(/*! ./suppliers.component.css */ "./src/app/components/suppliers/suppliers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"]])
    ], SuppliersComponent);
    return SuppliersComponent;
}()); //End class



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserProfile()
            .subscribe(function (res) {
            _this.userDetails = res['user'];
        }, function (err) { });
    };
    UserProfileComponent.prototype.onLogout = function () {
        this.userService.deleteToken();
        this.router.navigate(['/login']);
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}()); //End class



/***/ }),

/***/ "./src/app/components/user/sign-in/sign-in.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/sign-in/sign-in.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#card-title {\r\n    background: #9b59b6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmQtdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogIzliNTliNjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/sign-in/sign-in.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/sign-in/sign-in.component.ts ***!
  \**************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = {
            email: '',
            password: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignInComponent.prototype.ngOnInit = function () {
        if (this.userService.isLoggedIn())
            this.router.navigateByUrl('/profile');
    };
    SignInComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.login(form.value)
            .subscribe(function (res) {
            _this.userService.setToken(res['token']);
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    SignInComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/user/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}()); //End class



/***/ }),

/***/ "./src/app/components/user/sign-up/sign-up.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/sign-up/sign-up.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#card-title {\r\n    background: #8e44ad;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmQtdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogIzhlNDRhZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/sign-up/sign-up.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/sign-up/sign-up.component.ts ***!
  \**************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService) {
        this.userService = userService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.postUser(form.value)
            .subscribe(function (res) {
            _this.showSucessMessage = true;
            setTimeout(function () { return _this.showSucessMessage = false; }, 4000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong. Please contact admin.';
        });
    };
    SignUpComponent.prototype.resetForm = function (form) {
        this.userService.selectedUser = {
            fullname: '',
            email: '',
            password: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    };
    SignUpComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/user/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SignUpComponent);
    return SignUpComponent;
}()); //End class



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


// material angular

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/internal.ts":
/*!************************************!*\
  !*** ./src/app/models/internal.ts ***!
  \************************************/
/*! exports provided: Internal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Internal", function() { return Internal; });
var Internal = /** @class */ (function () {
    function Internal(_id, type, responsible, amount, reason) {
        if (_id === void 0) { _id = ''; }
        if (type === void 0) { type = ''; }
        if (responsible === void 0) { responsible = ''; }
        if (amount === void 0) { amount = 0; }
        if (reason === void 0) { reason = ''; }
        this._id = _id;
        this.type = type;
        this.responsible = responsible;
        this.amount = amount;
        this.reason = reason;
    }
    Internal.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null
    ]; };
    return Internal;
}());



/***/ }),

/***/ "./src/app/models/menu.ts":
/*!********************************!*\
  !*** ./src/app/models/menu.ts ***!
  \********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu(_id, type, name, description, price, image) {
        if (_id === void 0) { _id = ''; }
        if (type === void 0) { type = ''; }
        if (name === void 0) { name = ''; }
        if (description === void 0) { description = ''; }
        if (price === void 0) { price = 0; }
        if (image === void 0) { image = ''; }
        this._id = _id;
        this.type = type;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
    Menu.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null,
        null
    ]; };
    return Menu;
}());



/***/ }),

/***/ "./src/app/models/photo.ts":
/*!*********************************!*\
  !*** ./src/app/models/photo.ts ***!
  \*********************************/
/*! exports provided: Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
var Photo = /** @class */ (function () {
    function Photo(_id, title, description, imageURL, public_id) {
        if (_id === void 0) { _id = ''; }
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        if (imageURL === void 0) { imageURL = ''; }
        if (public_id === void 0) { public_id = ''; }
        this._id = _id;
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
        this.public_id = public_id;
    }
    Photo.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null
    ]; };
    return Photo;
}());



/***/ }),

/***/ "./src/app/models/supplier.ts":
/*!************************************!*\
  !*** ./src/app/models/supplier.ts ***!
  \************************************/
/*! exports provided: Supplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
var Supplier = /** @class */ (function () {
    function Supplier(_id, companyName, contactName, address, city, postalCode, country, phone) {
        if (_id === void 0) { _id = ''; }
        if (companyName === void 0) { companyName = ''; }
        if (contactName === void 0) { contactName = ''; }
        if (address === void 0) { address = ''; }
        if (city === void 0) { city = ''; }
        if (postalCode === void 0) { postalCode = 0; }
        if (country === void 0) { country = ''; }
        if (phone === void 0) { phone = 0; }
        this._id = _id;
        this.companyName = companyName;
        this.contactName = contactName;
        this.address = address;
        this.city = city;
        this.postalCode = postalCode;
        this.country = country;
        this.phone = phone;
    }
    Supplier.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]; };
    return Supplier;
}());



/***/ }),

/***/ "./src/app/services/internal.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/internal.service.ts ***!
  \**********************************************/
/*! exports provided: InternalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalService", function() { return InternalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/internal */ "./src/app/models/internal.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var InternalService = /** @class */ (function () {
    function InternalService(http) {
        this.http = http;
        this.allInternal = [];
        this.API = '/internal';
        this.selectedInternal = new _models_internal__WEBPACK_IMPORTED_MODULE_3__["Internal"];
    }
    InternalService.prototype.findAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API);
    };
    InternalService.prototype.postInternal = function (Internal) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API, Internal);
    };
    InternalService.prototype.putInternal = function (internal) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API + ("/" + internal._id), internal);
    };
    InternalService.prototype.deleteInternal = function (_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API + ("/" + _id));
    };
    InternalService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InternalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InternalService);
    return InternalService;
}()); //End class



/***/ }),

/***/ "./src/app/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/menu */ "./src/app/models/menu.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var MenuService = /** @class */ (function () {
    function MenuService(http) {
        this.http = http;
        this.API = '/menus';
        this.selectedMenu = new _models_menu__WEBPACK_IMPORTED_MODULE_3__["Menu"];
    }
    MenuService.prototype.findAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API);
    };
    MenuService.prototype.postMenu = function (Menu) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API, Menu);
    };
    MenuService.prototype.putMenu = function (menu) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API + ("/" + menu._id), menu);
    };
    MenuService.prototype.deleteMenu = function (_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API + ("/" + _id));
    };
    MenuService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MenuService);
    return MenuService;
}()); //End class



/***/ }),

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/photo */ "./src/app/models/photo.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
        this.API = '/photos';
        this.selectedPhoto = new _models_photo__WEBPACK_IMPORTED_MODULE_3__["Photo"];
    }
    PhotoService.prototype.getPhotos = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API);
    };
    PhotoService.prototype.postPhoto = function (Photo) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API, Photo);
    };
    PhotoService.prototype.putPhoto = function (photo) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API + ("/" + photo._id), photo);
    };
    PhotoService.prototype.deletePhoto = function (_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API + ("/" + _id));
    };
    PhotoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PhotoService);
    return PhotoService;
}()); //End class



/***/ }),

/***/ "./src/app/services/supplier.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/supplier.service.ts ***!
  \**********************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_supplier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/supplier */ "./src/app/models/supplier.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var SupplierService = /** @class */ (function () {
    function SupplierService(http) {
        this.http = http;
        this.API = '/suppliers';
        this.selectedSupplier = new _models_supplier__WEBPACK_IMPORTED_MODULE_2__["Supplier"]();
    }
    SupplierService.prototype.getSuppliers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API);
    };
    SupplierService.prototype.postSupplier = function (Supplier) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API, Supplier);
    };
    SupplierService.prototype.putSupplier = function (supplier) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API + ("/" + supplier._id), supplier);
    };
    SupplierService.prototype.deleteSupplier = function (_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_API + this.API + ("/" + _id));
    };
    SupplierService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SupplierService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SupplierService);
    return SupplierService;
}()); //End class



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.selectedUser = {
            fullname: '',
            email: '',
            password: ''
        };
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    //HttpMethods
    UserService.prototype.postUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL_API + '/register', user, this.noAuthHeader);
    };
    UserService.prototype.login = function (authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL_API + '/authenticate', authCredentials, this.noAuthHeader);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL_API + '/profile');
    };
    //Helper Methods
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else {
            return null;
        }
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload) {
            return userPayload.exp > Date.now() / 1000;
        }
        else {
            return null;
        }
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}()); //End class



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    URL_API: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LLira\Desktop\dev-workspace\webapp-mean\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map