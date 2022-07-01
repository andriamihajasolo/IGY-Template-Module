import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/menu";
import * as i4 from "@angular/common";
export class DropdownComponent {
    constructor() {
        /**label menu */
        this.title = '';
        /** class du boutton */
        this.class = 'pr-dropdown';
        /** Déclaration evenement sur clique */
        this.e_click = new EventEmitter();
    }
    /**
     * Evenement sur clique
     */
    on_click() {
        this.e_click.emit();
    }
}
DropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DropdownComponent, selector: "igy-dropdown", inputs: { title: "title", class: "class", listmenu: "listmenu", xPosition: "xPosition", yPosition: "yPosition" }, outputs: { e_click: "e_click" }, ngImport: i0, template: "<div class=\"class\">\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"principale dropdown\">\r\n    <mat-icon>more_vert</mat-icon>\r\n    {{ title }}\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\" yPosition=\"above\">\r\n    <button\r\n      [disabled]=\"item.disabled\"\r\n      mat-menu-item\r\n      (click)=\"on_click()\"\r\n      *ngFor=\"let item of listmenu\"\r\n    >\r\n      <mat-icon>{{ item.iconName }}</mat-icon>\r\n      <span>{{ item.labelItem }}</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>\r\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@100;200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons.woff2) format(\"woff2\"),url(./material-icons.woff) format(\"woff\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-outlined.woff2) format(\"woff2\"),url(./material-icons-outlined.woff) format(\"woff\")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-round.woff2) format(\"woff2\"),url(./material-icons-round.woff) format(\"woff\")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-sharp.woff2) format(\"woff2\"),url(./material-icons-sharp.woff) format(\"woff\")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-two-tone.woff2) format(\"woff2\"),url(./material-icons-two-tone.woff) format(\"woff\")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.fx-align-center{width:inherit;display:flex;justify-content:center}.fx-align-left{width:inherit;display:flex;justify-content:flex-start}.fx-align-right{width:inherit;display:flex;justify-content:flex-end}.bg-card-green{background:rgba(227,247,225,.2);box-shadow:0 4px 4px #00000040}.bg-card-orange{background:#FF6633;box-shadow:0 4px 4px #00000040}.bg-card-gray{background:#f4f4f4;box-shadow:0 4px 4px #00000040}.bg-card-gray-2{background:#f8f8f8;box-shadow:0 4px 4px #00000040}.bg-card-yellow{background:#fff5de;box-shadow:0 4px 4px #00000040}.scroller{scrollbar-width:thin;scrollbar-color:#93989d;cursor:pointer}.scroller::-webkit-scrollbar{width:8px;height:8px;cursor:pointer}.scroller::-webkit-scrollbar-track{background-color:transparent;border-radius:10px;cursor:pointer}.scroller::-webkit-scrollbar-thumb{background-color:#93989d;box-shadow:inset 0 0 8px #0000004d;border-radius:10px;cursor:pointer}h1{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:24px;line-height:20px;background:linear-gradient(90deg,#800080 27.6%,#FF6633 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding-bottom:20px}h2{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px}h3{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:20px}h4{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:20px}h5{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:20px}P,div{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px}span{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px}a{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px;text-decoration:none;cursor:pointer}label{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:20px}button{outline:none}button:hover{outline:none;background:transparent;box-shadow:none}.cnt-form-action{display:flex;justify-content:flex-end}.cnt-form-action>igy-button{margin-left:15px}.igy-card{background:#ffffff;border-radius:10px;box-shadow:0 16px 24px #0000000f,0 2px 6px #0000000a,0 0 1px #0000000a}.primary-btn,:host ::ng-deep .pr-dropdown .mat-menu-trigger{background-color:#0cb465;border-color:#0cb465;color:#fff;box-shadow:none;border:none;height:35px;width:inherit}:host ::ng-deep{width:inherit}:host ::ng-deep .pr-dropdown{width:inherit}:host ::ng-deep .pr-dropdown .mat-menu-trigger{font-family:Montserrat,sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:22px}\n"], components: [{ type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i3.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i3.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }], directives: [{ type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'igy-dropdown', template: "<div class=\"class\">\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"principale dropdown\">\r\n    <mat-icon>more_vert</mat-icon>\r\n    {{ title }}\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\" yPosition=\"above\">\r\n    <button\r\n      [disabled]=\"item.disabled\"\r\n      mat-menu-item\r\n      (click)=\"on_click()\"\r\n      *ngFor=\"let item of listmenu\"\r\n    >\r\n      <mat-icon>{{ item.iconName }}</mat-icon>\r\n      <span>{{ item.labelItem }}</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>\r\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@100;200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons.woff2) format(\"woff2\"),url(./material-icons.woff) format(\"woff\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-outlined.woff2) format(\"woff2\"),url(./material-icons-outlined.woff) format(\"woff\")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-round.woff2) format(\"woff2\"),url(./material-icons-round.woff) format(\"woff\")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-sharp.woff2) format(\"woff2\"),url(./material-icons-sharp.woff) format(\"woff\")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-two-tone.woff2) format(\"woff2\"),url(./material-icons-two-tone.woff) format(\"woff\")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.fx-align-center{width:inherit;display:flex;justify-content:center}.fx-align-left{width:inherit;display:flex;justify-content:flex-start}.fx-align-right{width:inherit;display:flex;justify-content:flex-end}.bg-card-green{background:rgba(227,247,225,.2);box-shadow:0 4px 4px #00000040}.bg-card-orange{background:#FF6633;box-shadow:0 4px 4px #00000040}.bg-card-gray{background:#f4f4f4;box-shadow:0 4px 4px #00000040}.bg-card-gray-2{background:#f8f8f8;box-shadow:0 4px 4px #00000040}.bg-card-yellow{background:#fff5de;box-shadow:0 4px 4px #00000040}.scroller{scrollbar-width:thin;scrollbar-color:#93989d;cursor:pointer}.scroller::-webkit-scrollbar{width:8px;height:8px;cursor:pointer}.scroller::-webkit-scrollbar-track{background-color:transparent;border-radius:10px;cursor:pointer}.scroller::-webkit-scrollbar-thumb{background-color:#93989d;box-shadow:inset 0 0 8px #0000004d;border-radius:10px;cursor:pointer}h1{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:24px;line-height:20px;background:linear-gradient(90deg,#800080 27.6%,#FF6633 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding-bottom:20px}h2{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px}h3{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:20px}h4{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:20px}h5{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:20px}P,div{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px}span{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px}a{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px;text-decoration:none;cursor:pointer}label{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:20px}button{outline:none}button:hover{outline:none;background:transparent;box-shadow:none}.cnt-form-action{display:flex;justify-content:flex-end}.cnt-form-action>igy-button{margin-left:15px}.igy-card{background:#ffffff;border-radius:10px;box-shadow:0 16px 24px #0000000f,0 2px 6px #0000000a,0 0 1px #0000000a}.primary-btn,:host ::ng-deep .pr-dropdown .mat-menu-trigger{background-color:#0cb465;border-color:#0cb465;color:#fff;box-shadow:none;border:none;height:35px;width:inherit}:host ::ng-deep{width:inherit}:host ::ng-deep .pr-dropdown{width:inherit}:host ::ng-deep .pr-dropdown .mat-menu-trigger{font-family:Montserrat,sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:22px}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], class: [{
                type: Input
            }], listmenu: [{
                type: Input
            }], xPosition: [{
                type: Input
            }], yPosition: [{
                type: Input
            }], e_click: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaWd5LXRlbXBsYXRlcy1tb2R1bGVzL3NyYy9saWIvY29tcG9zYW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9jb21wb3NhbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVF2RSxNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBTUUsZ0JBQWdCO1FBQ1AsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUU1Qix1QkFBdUI7UUFDZCxVQUFLLEdBQVcsYUFBYSxDQUFDO1FBWXZDLHVDQUF1QztRQUM3QixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7S0FRM0Q7SUFOQzs7T0FFRztJQUNJLFFBQVE7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OytHQXpCVSxpQkFBaUI7bUdBQWpCLGlCQUFpQix1TUNSOUIsOGhCQWlCQTs0RkRUYSxpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UsY0FBYzs4QkFNZixLQUFLO3NCQUFiLEtBQUs7Z0JBR0csS0FBSztzQkFBYixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFLTixTQUFTO3NCQURSLEtBQUs7Z0JBR04sU0FBUztzQkFEUixLQUFLO2dCQUlJLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRNZW51UGFuZWwsIE1lbnVQb3NpdGlvblgsIE1lbnVQb3NpdGlvblkgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaWd5LWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCB7XHJcbiAgLyoqbGFiZWwgbWVudSAqL1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLyoqIGNsYXNzIGR1IGJvdXR0b24gKi9cclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJ3ByLWRyb3Bkb3duJztcclxuXHJcbiAgLyoqIGl0ZW1zIGxpc3RlICovXHJcbiAgQElucHV0KClcclxuICBsaXN0bWVudSE6IHsgaWNvbk5hbWU6IHN0cmluZzsgbGFiZWxJdGVtOiBzdHJpbmc7IGRpc2FibGVkOiBib29sZWFuIH1bXTtcclxuXHJcbiAgLyoqIHBvc2l0aW9uIGQnb3V2ZXJ0dXJlIGR1IG1lbnUgKi9cclxuICBASW5wdXQoKVxyXG4gIHhQb3NpdGlvbiE6IE1lbnVQb3NpdGlvblg7IC8vIGJlZm9yZSB8IGFmdGVyXHJcbiAgQElucHV0KClcclxuICB5UG9zaXRpb24hOiBNZW51UG9zaXRpb25ZOyAvLyBhYm92ZSB8IGJlbG93XHJcblxyXG4gIC8qKiBEw6ljbGFyYXRpb24gZXZlbmVtZW50IHN1ciBjbGlxdWUgKi9cclxuICBAT3V0cHV0KCkgZV9jbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW5lbWVudCBzdXIgY2xpcXVlXHJcbiAgICovXHJcbiAgcHVibGljIG9uX2NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lX2NsaWNrLmVtaXQoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNsYXNzXCI+XHJcbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBhcmlhLWxhYmVsPVwicHJpbmNpcGFsZSBkcm9wZG93blwiPlxyXG4gICAgPG1hdC1pY29uPm1vcmVfdmVydDwvbWF0LWljb24+XHJcbiAgICB7eyB0aXRsZSB9fVxyXG4gIDwvYnV0dG9uPlxyXG4gIDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIiB5UG9zaXRpb249XCJhYm92ZVwiPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBbZGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZFwiXHJcbiAgICAgIG1hdC1tZW51LWl0ZW1cclxuICAgICAgKGNsaWNrKT1cIm9uX2NsaWNrKClcIlxyXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaXN0bWVudVwiXHJcbiAgICA+XHJcbiAgICAgIDxtYXQtaWNvbj57eyBpdGVtLmljb25OYW1lIH19PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+e3sgaXRlbS5sYWJlbEl0ZW0gfX08L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L21hdC1tZW51PlxyXG48L2Rpdj5cclxuIl19