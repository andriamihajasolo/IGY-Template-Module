import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
export class InputComponent {
    // options: any;
    constructor(fb) {
        this.fb = fb;
        /** type du composant */
        this.type = 'text';
        /** placeholder du composant */
        this.placeholder = 'Input';
        /** autocomplete du composant */
        this.autocomplete = 'OFF';
        /** class du composant */
        /**  => customClass = 'no-animate-label' si pas d'annimation */
        this.customClass = 'no-animate-label';
    }
}
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: InputComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: InputComponent, selector: "igy-input", inputs: { type: "type", placeholder: "placeholder", autocomplete: "autocomplete", customClass: "customClass", inputName: "inputName", form: "form" }, ngImport: i0, template: "<div class=\"item-input-container\" [class]=\"customClass\" [formGroup]=\"form\">\r\n  <label>{{placeholder}}</label>\r\n  <mat-form-field>\r\n    <input [type]=\"type\" matInput [placeholder]=\"placeholder\" [autocomplete]=\"autocomplete\"\r\n      formControlName=\"{{ inputName }}\" />\r\n  </mat-form-field>\r\n\r\n  <div class=\"item-validation-container\">\r\n    <span class=\"field-has-error\">\r\n      <!-- Veuillez saisir votre mot de passe -->\r\n    </span>\r\n  </div>\r\n</div>\r\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@100;200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons.woff2) format(\"woff2\"),url(./material-icons.woff) format(\"woff\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-outlined.woff2) format(\"woff2\"),url(./material-icons-outlined.woff) format(\"woff\")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-round.woff2) format(\"woff2\"),url(./material-icons-round.woff) format(\"woff\")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-sharp.woff2) format(\"woff2\"),url(./material-icons-sharp.woff) format(\"woff\")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-two-tone.woff2) format(\"woff2\"),url(./material-icons-two-tone.woff) format(\"woff\")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.fx-align-center{width:inherit;display:flex;justify-content:center}.fx-align-left{width:inherit;display:flex;justify-content:flex-start}.fx-align-right{width:inherit;display:flex;justify-content:flex-end}.bg-card-green{background:rgba(227,247,225,.2);box-shadow:0 4px 4px #00000040}.bg-card-orange{background:#FF6633;box-shadow:0 4px 4px #00000040}.bg-card-gray{background:#f4f4f4;box-shadow:0 4px 4px #00000040}.bg-card-gray-2{background:#f8f8f8;box-shadow:0 4px 4px #00000040}.bg-card-yellow{background:#fff5de;box-shadow:0 4px 4px #00000040}.scroller{scrollbar-width:thin;scrollbar-color:#93989d;cursor:pointer}.scroller::-webkit-scrollbar{width:8px;height:8px;cursor:pointer}.scroller::-webkit-scrollbar-track{background-color:transparent;border-radius:10px;cursor:pointer}.scroller::-webkit-scrollbar-thumb{background-color:#93989d;box-shadow:inset 0 0 8px #0000004d;border-radius:10px;cursor:pointer}h1{font-family:Montserrat,sans-serif;font-weight:700;font-size:24px;line-height:20px;font-style:normal;display:flex;align-items:center;letter-spacing:.25px;color:#000;padding-bottom:15px;margin-bottom:10px;border-bottom:1px solid #E4E4E4}h1>.icons{font-size:24px;margin-right:15px;color:inherit}h2{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px}h3{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:20px}h4{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:20px}h5{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:20px}P,div{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px}span{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px}a{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px;text-decoration:none;cursor:pointer}label{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:20px}button{outline:none}button:hover{outline:none;background:transparent;box-shadow:none}.cnt-form-action{display:flex;justify-content:flex-end}.cnt-form-action>igy-button{margin-left:15px}.igy-card{background:#ffffff;border-radius:10px;box-shadow:0 16px 24px #0000000f,0 2px 6px #0000000a,0 0 1px #0000000a}.primary-btn{background-color:#0cb465;border-color:#0cb465;color:#fff;box-shadow:none;border:none;height:35px;width:inherit}.item-input-container,.item-input-container .mat-form-field{width:100%}:host ::ng-deep .no-animate-label>label{display:block!important}:host ::ng-deep .no-animate-label .mat-focused .mat-form-field-label,:host ::ng-deep .no-animate-label .mat-form-field-should-float .mat-form-field-label{display:none!important}.item-input-container>label{display:none}\n"], components: [{ type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }], directives: [{ type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'igy-input', template: "<div class=\"item-input-container\" [class]=\"customClass\" [formGroup]=\"form\">\r\n  <label>{{placeholder}}</label>\r\n  <mat-form-field>\r\n    <input [type]=\"type\" matInput [placeholder]=\"placeholder\" [autocomplete]=\"autocomplete\"\r\n      formControlName=\"{{ inputName }}\" />\r\n  </mat-form-field>\r\n\r\n  <div class=\"item-validation-container\">\r\n    <span class=\"field-has-error\">\r\n      <!-- Veuillez saisir votre mot de passe -->\r\n    </span>\r\n  </div>\r\n</div>\r\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@100;200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons.woff2) format(\"woff2\"),url(./material-icons.woff) format(\"woff\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-outlined.woff2) format(\"woff2\"),url(./material-icons-outlined.woff) format(\"woff\")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-round.woff2) format(\"woff2\"),url(./material-icons-round.woff) format(\"woff\")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-sharp.woff2) format(\"woff2\"),url(./material-icons-sharp.woff) format(\"woff\")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-two-tone.woff2) format(\"woff2\"),url(./material-icons-two-tone.woff) format(\"woff\")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.fx-align-center{width:inherit;display:flex;justify-content:center}.fx-align-left{width:inherit;display:flex;justify-content:flex-start}.fx-align-right{width:inherit;display:flex;justify-content:flex-end}.bg-card-green{background:rgba(227,247,225,.2);box-shadow:0 4px 4px #00000040}.bg-card-orange{background:#FF6633;box-shadow:0 4px 4px #00000040}.bg-card-gray{background:#f4f4f4;box-shadow:0 4px 4px #00000040}.bg-card-gray-2{background:#f8f8f8;box-shadow:0 4px 4px #00000040}.bg-card-yellow{background:#fff5de;box-shadow:0 4px 4px #00000040}.scroller{scrollbar-width:thin;scrollbar-color:#93989d;cursor:pointer}.scroller::-webkit-scrollbar{width:8px;height:8px;cursor:pointer}.scroller::-webkit-scrollbar-track{background-color:transparent;border-radius:10px;cursor:pointer}.scroller::-webkit-scrollbar-thumb{background-color:#93989d;box-shadow:inset 0 0 8px #0000004d;border-radius:10px;cursor:pointer}h1{font-family:Montserrat,sans-serif;font-weight:700;font-size:24px;line-height:20px;font-style:normal;display:flex;align-items:center;letter-spacing:.25px;color:#000;padding-bottom:15px;margin-bottom:10px;border-bottom:1px solid #E4E4E4}h1>.icons{font-size:24px;margin-right:15px;color:inherit}h2{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px}h3{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:20px}h4{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:20px}h5{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:20px}P,div{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px}span{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px}a{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px;text-decoration:none;cursor:pointer}label{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:20px}button{outline:none}button:hover{outline:none;background:transparent;box-shadow:none}.cnt-form-action{display:flex;justify-content:flex-end}.cnt-form-action>igy-button{margin-left:15px}.igy-card{background:#ffffff;border-radius:10px;box-shadow:0 16px 24px #0000000f,0 2px 6px #0000000a,0 0 1px #0000000a}.primary-btn{background-color:#0cb465;border-color:#0cb465;color:#fff;box-shadow:none;border:none;height:35px;width:inherit}.item-input-container,.item-input-container .mat-form-field{width:100%}:host ::ng-deep .no-animate-label>label{display:block!important}:host ::ng-deep .no-animate-label .mat-focused .mat-form-field-label,:host ::ng-deep .no-animate-label .mat-form-field-should-float .mat-form-field-label{display:none!important}.item-input-container>label{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { type: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }], customClass: [{
                type: Input
            }], inputName: [{
                type: Input
            }], form: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaWd5LXRlbXBsYXRlcy1tb2R1bGVzL3NyYy9saWIvY29tcG9zYW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9jb21wb3NhbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFnQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRL0UsTUFBTSxPQUFPLGNBQWM7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBRW5DLHdCQUF3QjtRQUNmLFNBQUksR0FBVyxNQUFNLENBQUM7UUFFL0IsK0JBQStCO1FBQ3RCLGdCQUFXLEdBQVcsT0FBTyxDQUFDO1FBRXZDLGdDQUFnQztRQUN2QixpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUV0Qyx5QkFBeUI7UUFDekIsK0RBQStEO1FBQ3RELGdCQUFXLEdBQVcsa0JBQWtCLENBQUM7SUFiWixDQUFDOzs0R0FGNUIsY0FBYztnR0FBZCxjQUFjLHVNQ1IzQixrZkFhQTs0RkRMYSxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVc7a0dBU1osSUFBSTtzQkFBWixLQUFLO2dCQUdHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBR0csWUFBWTtzQkFBcEIsS0FBSztnQkFJRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBTU4sSUFBSTtzQkFESCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpZ3ktaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcclxuICAvLyBvcHRpb25zOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XHJcblxyXG4gIC8qKiB0eXBlIGR1IGNvbXBvc2FudCAqL1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICd0ZXh0JztcclxuXHJcbiAgLyoqIHBsYWNlaG9sZGVyIGR1IGNvbXBvc2FudCAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnSW5wdXQnO1xyXG5cclxuICAvKiogYXV0b2NvbXBsZXRlIGR1IGNvbXBvc2FudCAqL1xyXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nID0gJ09GRic7XHJcblxyXG4gIC8qKiBjbGFzcyBkdSBjb21wb3NhbnQgKi9cclxuICAvKiogID0+IGN1c3RvbUNsYXNzID0gJ25vLWFuaW1hdGUtbGFiZWwnIHNpIHBhcyBkJ2FubmltYXRpb24gKi9cclxuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nID0gJ25vLWFuaW1hdGUtbGFiZWwnO1xyXG5cclxuICBASW5wdXQoKSBpbnB1dE5hbWUhOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBub20gZHUgY29tcG9zYW50ICovXHJcbiAgLy8gQElucHV0KCkgbmFtZTogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpIGFzIGFueTtcclxuXHJcbiAgQElucHV0KClcclxuICBmb3JtITogRm9ybUdyb3VwO1xyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJpdGVtLWlucHV0LWNvbnRhaW5lclwiIFtjbGFzc109XCJjdXN0b21DbGFzc1wiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gIDxsYWJlbD57e3BsYWNlaG9sZGVyfX08L2xhYmVsPlxyXG4gIDxtYXQtZm9ybS1maWVsZD5cclxuICAgIDxpbnB1dCBbdHlwZV09XCJ0eXBlXCIgbWF0SW5wdXQgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW2F1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIlxyXG4gICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7eyBpbnB1dE5hbWUgfX1cIiAvPlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJpdGVtLXZhbGlkYXRpb24tY29udGFpbmVyXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImZpZWxkLWhhcy1lcnJvclwiPlxyXG4gICAgICA8IS0tIFZldWlsbGV6IHNhaXNpciB2b3RyZSBtb3QgZGUgcGFzc2UgLS0+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=