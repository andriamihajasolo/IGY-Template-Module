import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/common";
export class AdminLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AdminLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AdminLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: AdminLayoutComponent, selector: "igy-admin-layout", ngImport: i0, template: "\r\n<mat-drawer-container class=\"admin-container\" autosize>\r\n  <mat-drawer #drawer class=\"admin-sidenav\" mode=\"side\">\r\n    <button class=\"btn-aside\" type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n      <span class=\"material-icons\">menu</span>\r\n    </button>\r\n    <ng-content select=\"[sidenav]\"></ng-content>\r\n    <div class=\"dgi-logo\">\r\n      <img src=\"./../../../../assets/images/logo_mfbdgi.svg\" alt=\"Logo\">\r\n    </div>\r\n  </mat-drawer>\r\n  <div class=\"admin-sidenav-content\">\r\n    <button *ngIf=\"!drawer.opened\" type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n      <span class=\"material-icons\">menu</span>\r\n    </button>\r\n    <ng-content select=\"[header]\"></ng-content>\r\n    <div class=\"container-fluid mt-4\">\r\n      <ng-content select=\"[routerOutlet]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</mat-drawer-container>\r\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@100;200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons.woff2) format(\"woff2\"),url(./material-icons.woff) format(\"woff\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-outlined.woff2) format(\"woff2\"),url(./material-icons-outlined.woff) format(\"woff\")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-round.woff2) format(\"woff2\"),url(./material-icons-round.woff) format(\"woff\")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-sharp.woff2) format(\"woff2\"),url(./material-icons-sharp.woff) format(\"woff\")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-two-tone.woff2) format(\"woff2\"),url(./material-icons-two-tone.woff) format(\"woff\")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.fx-align-center{width:inherit;display:flex;justify-content:center}.fx-align-left{width:inherit;display:flex;justify-content:flex-start}.fx-align-right{width:inherit;display:flex;justify-content:flex-end}.bg-card-green{background:rgba(227,247,225,.2);box-shadow:0 4px 4px #00000040}.bg-card-orange{background:#FF6633;box-shadow:0 4px 4px #00000040}.bg-card-gray{background:#f4f4f4;box-shadow:0 4px 4px #00000040}.bg-card-gray-2{background:#f8f8f8;box-shadow:0 4px 4px #00000040}.bg-card-yellow{background:#fff5de;box-shadow:0 4px 4px #00000040}h1{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:24px;line-height:20px;background:linear-gradient(90deg,#800080 27.6%,#FF6633 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding-bottom:20px}h2{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px}h3{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:20px}h4{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:20px}h5{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:20px}P,div{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px}span{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px}a{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px;text-decoration:none;cursor:pointer}label{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:20px}button{outline:none}button:hover{outline:none;background:transparent;box-shadow:none}.cnt-form-action{display:flex;justify-content:flex-end}.cnt-form-action>igy-button{margin-left:15px}.igy-card{background:#ffffff;border-radius:10px;box-shadow:0 16px 24px #0000000f,0 2px 6px #0000000a,0 0 1px #0000000a}.primary-btn{background-color:#0cb465;border-color:#0cb465;color:#fff;box-shadow:none;border:none;height:35px;width:inherit}.item-input-container{margin-bottom:20px}.item-input-container .mat-form-field-wrapper{margin-bottom:-1.25em}.item-input-container input.mat-input-element,.item-input-container span.mat-select-min-line{color:#333;font-family:Montserrat,sans-serif;font-style:normal;font-weight:500;font-size:13px;line-height:12px}.item-input-container .mat-form-field-infix{border:1px solid #8e8ea1!important;box-sizing:border-box;height:35px!important;border-radius:0;font-style:normal;font-weight:400!important;font-size:14px!important;line-height:21px!important;color:#afb2b8!important;padding-left:10px;padding-right:10px;width:100%}.item-input-container .mat-form-field-underline{display:none}.item-input-container .mat-form-field-label-wrapper{padding-top:0;top:-.8em;overflow:visible}.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.4815em) scale(.85) perspective(100px) translateZ(-.6em);font-size:15px}.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label span,.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label mat-label.select-label{background-color:#fff;padding:5px 10px;top:2px;left:10px;position:relative;color:#333;font-weight:600}.item-input-container .mat-form-field-appearance-legacy:not(.mat-form-field-can-float.mat-form-field-should-float) .mat-form-field-label{padding-left:10px}.item-input-container .item-validation-container span{font-size:11px;color:#f96969;font-weight:600}.admin-container{width:100%;min-height:100vh;background:#ffffff}.admin-container .admin-sidenav{background:#ffffff;box-shadow:0 0 15px #0000001a;border:none;width:15%}.admin-container .admin-sidenav .btn-aside{position:absolute;top:25px;left:0;color:#0c4c28;z-index:10}.admin-container .admin-sidenav .dgi-logo{width:100px;height:50px;overflow:hidden;position:absolute;bottom:30px;left:calc(50% - 50px)}.admin-container .admin-sidenav .dgi-logo>img{width:100%;height:auto;object-fit:cover}.admin-container .admin-sidenav-content button{position:absolute;top:20px;left:0;color:#fff;z-index:10}\n"], components: [{ type: i1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { type: i1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AdminLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'igy-admin-layout', template: "\r\n<mat-drawer-container class=\"admin-container\" autosize>\r\n  <mat-drawer #drawer class=\"admin-sidenav\" mode=\"side\">\r\n    <button class=\"btn-aside\" type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n      <span class=\"material-icons\">menu</span>\r\n    </button>\r\n    <ng-content select=\"[sidenav]\"></ng-content>\r\n    <div class=\"dgi-logo\">\r\n      <img src=\"./../../../../assets/images/logo_mfbdgi.svg\" alt=\"Logo\">\r\n    </div>\r\n  </mat-drawer>\r\n  <div class=\"admin-sidenav-content\">\r\n    <button *ngIf=\"!drawer.opened\" type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n      <span class=\"material-icons\">menu</span>\r\n    </button>\r\n    <ng-content select=\"[header]\"></ng-content>\r\n    <div class=\"container-fluid mt-4\">\r\n      <ng-content select=\"[routerOutlet]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</mat-drawer-container>\r\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@100;200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons.woff2) format(\"woff2\"),url(./material-icons.woff) format(\"woff\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-outlined.woff2) format(\"woff2\"),url(./material-icons-outlined.woff) format(\"woff\")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-round.woff2) format(\"woff2\"),url(./material-icons-round.woff) format(\"woff\")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-sharp.woff2) format(\"woff2\"),url(./material-icons-sharp.woff) format(\"woff\")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-two-tone.woff2) format(\"woff2\"),url(./material-icons-two-tone.woff) format(\"woff\")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.fx-align-center{width:inherit;display:flex;justify-content:center}.fx-align-left{width:inherit;display:flex;justify-content:flex-start}.fx-align-right{width:inherit;display:flex;justify-content:flex-end}.bg-card-green{background:rgba(227,247,225,.2);box-shadow:0 4px 4px #00000040}.bg-card-orange{background:#FF6633;box-shadow:0 4px 4px #00000040}.bg-card-gray{background:#f4f4f4;box-shadow:0 4px 4px #00000040}.bg-card-gray-2{background:#f8f8f8;box-shadow:0 4px 4px #00000040}.bg-card-yellow{background:#fff5de;box-shadow:0 4px 4px #00000040}h1{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:24px;line-height:20px;background:linear-gradient(90deg,#800080 27.6%,#FF6633 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding-bottom:20px}h2{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px}h3{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:20px}h4{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:20px}h5{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:20px}P,div{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px}span{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px}a{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px;text-decoration:none;cursor:pointer}label{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:20px}button{outline:none}button:hover{outline:none;background:transparent;box-shadow:none}.cnt-form-action{display:flex;justify-content:flex-end}.cnt-form-action>igy-button{margin-left:15px}.igy-card{background:#ffffff;border-radius:10px;box-shadow:0 16px 24px #0000000f,0 2px 6px #0000000a,0 0 1px #0000000a}.primary-btn{background-color:#0cb465;border-color:#0cb465;color:#fff;box-shadow:none;border:none;height:35px;width:inherit}.item-input-container{margin-bottom:20px}.item-input-container .mat-form-field-wrapper{margin-bottom:-1.25em}.item-input-container input.mat-input-element,.item-input-container span.mat-select-min-line{color:#333;font-family:Montserrat,sans-serif;font-style:normal;font-weight:500;font-size:13px;line-height:12px}.item-input-container .mat-form-field-infix{border:1px solid #8e8ea1!important;box-sizing:border-box;height:35px!important;border-radius:0;font-style:normal;font-weight:400!important;font-size:14px!important;line-height:21px!important;color:#afb2b8!important;padding-left:10px;padding-right:10px;width:100%}.item-input-container .mat-form-field-underline{display:none}.item-input-container .mat-form-field-label-wrapper{padding-top:0;top:-.8em;overflow:visible}.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.4815em) scale(.85) perspective(100px) translateZ(-.6em);font-size:15px}.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label span,.item-input-container .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label mat-label.select-label{background-color:#fff;padding:5px 10px;top:2px;left:10px;position:relative;color:#333;font-weight:600}.item-input-container .mat-form-field-appearance-legacy:not(.mat-form-field-can-float.mat-form-field-should-float) .mat-form-field-label{padding-left:10px}.item-input-container .item-validation-container span{font-size:11px;color:#f96969;font-weight:600}.admin-container{width:100%;min-height:100vh;background:#ffffff}.admin-container .admin-sidenav{background:#ffffff;box-shadow:0 0 15px #0000001a;border:none;width:15%}.admin-container .admin-sidenav .btn-aside{position:absolute;top:25px;left:0;color:#0c4c28;z-index:10}.admin-container .admin-sidenav .dgi-logo{width:100px;height:50px;overflow:hidden;position:absolute;bottom:30px;left:calc(50% - 50px)}.admin-container .admin-sidenav .dgi-logo>img{width:100%;height:auto;object-fit:cover}.admin-container .admin-sidenav-content button{position:absolute;top:20px;left:0;color:#fff;z-index:10}\n"] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lneS10ZW1wbGF0ZXMtbW9kdWxlcy9zcmMvbGliL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9sYXlvdXRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPbEQsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7a0hBTFUsb0JBQW9CO3NHQUFwQixvQkFBb0Isd0RDUGpDLDY0QkFxQkE7NEZEZGEsb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNFLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lneS1hZG1pbi1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZG1pbi1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZG1pbkxheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcbjxtYXQtZHJhd2VyLWNvbnRhaW5lciBjbGFzcz1cImFkbWluLWNvbnRhaW5lclwiIGF1dG9zaXplPlxyXG4gIDxtYXQtZHJhd2VyICNkcmF3ZXIgY2xhc3M9XCJhZG1pbi1zaWRlbmF2XCIgbW9kZT1cInNpZGVcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tYXNpZGVcIiB0eXBlPVwiYnV0dG9uXCIgbWF0LWJ1dHRvbiAoY2xpY2spPVwiZHJhd2VyLnRvZ2dsZSgpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2lkZW5hdl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGdpLWxvZ29cIj5cclxuICAgICAgPGltZyBzcmM9XCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb19tZmJkZ2kuc3ZnXCIgYWx0PVwiTG9nb1wiPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYXQtZHJhd2VyPlxyXG4gIDxkaXYgY2xhc3M9XCJhZG1pbi1zaWRlbmF2LWNvbnRlbnRcIj5cclxuICAgIDxidXR0b24gKm5nSWY9XCIhZHJhd2VyLm9wZW5lZFwiIHR5cGU9XCJidXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJkcmF3ZXIudG9nZ2xlKClcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPm1lbnU8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltoZWFkZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBtdC00XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltyb3V0ZXJPdXRsZXRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWRyYXdlci1jb250YWluZXI+XHJcbiJdfQ==