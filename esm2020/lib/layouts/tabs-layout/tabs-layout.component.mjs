import { Component, ContentChild, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
export class TabsLayoutComponent {
    constructor() { }
    isTable(tab) {
        return Object.keys(tab).includes('dataSource');
    }
    isForm(tab) {
        return Object.keys(tab).includes('fields');
    }
    ngOnInit() { }
}
TabsLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TabsLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabsLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TabsLayoutComponent, selector: "igy-tabs-layout", inputs: { data_tabs: "data_tabs" }, queries: [{ propertyName: "titleTemplateRef", first: true, predicate: ["title"], descendants: true }, { propertyName: "descriptionTemplateRef", first: true, predicate: ["description"], descendants: true }, { propertyName: "contentTemplateRef", first: true, predicate: ["content"], descendants: true }], ngImport: i0, template: "\r\n<mat-tab-group mat-align-tabs=\"start\">\r\n  <mat-tab *ngFor=\"let tab of data_tabs\" label=\"{{tab.label}}\">\r\n    <ng-container *ngIf=\"contentTemplateRef\" [ngTemplateOutlet]=\"contentTemplateRef\" [ngTemplateOutletContext]=\"{$implicit:tab}\"></ng-container>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@100;200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons.woff2) format(\"woff2\"),url(./material-icons.woff) format(\"woff\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-outlined.woff2) format(\"woff2\"),url(./material-icons-outlined.woff) format(\"woff\")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-round.woff2) format(\"woff2\"),url(./material-icons-round.woff) format(\"woff\")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-sharp.woff2) format(\"woff2\"),url(./material-icons-sharp.woff) format(\"woff\")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-two-tone.woff2) format(\"woff2\"),url(./material-icons-two-tone.woff) format(\"woff\")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.fx-align-center{width:inherit;display:flex;justify-content:center}.fx-align-left{width:inherit;display:flex;justify-content:flex-start}.fx-align-right{width:inherit;display:flex;justify-content:flex-end}.bg-card-green{background:rgba(227,247,225,.2);box-shadow:0 4px 4px #00000040}.bg-card-orange{background:#FF6633;box-shadow:0 4px 4px #00000040}.bg-card-gray{background:#f4f4f4;box-shadow:0 4px 4px #00000040}.bg-card-gray-2{background:#f8f8f8;box-shadow:0 4px 4px #00000040}.bg-card-yellow{background:#fff5de;box-shadow:0 4px 4px #00000040}.scroller{scrollbar-width:thin;scrollbar-color:#93989d;cursor:pointer}.scroller::-webkit-scrollbar{width:8px;height:8px;cursor:pointer}.scroller::-webkit-scrollbar-track{background-color:transparent;border-radius:10px;cursor:pointer}.scroller::-webkit-scrollbar-thumb{background-color:#93989d;box-shadow:inset 0 0 8px #0000004d;border-radius:10px;cursor:pointer}h1{font-family:Montserrat,sans-serif;font-weight:700;font-size:24px;line-height:20px;font-style:normal;display:flex;align-items:center;letter-spacing:.25px;color:#000;padding-bottom:15px;margin-bottom:10px;border-bottom:1px solid #E4E4E4}h1>.icons{font-size:24px;margin-right:15px;color:inherit}h2{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px}h3{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:20px}h4{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:20px}h5{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:20px}P,div{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px}span{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px}a{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px;text-decoration:none;cursor:pointer}label{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:20px}button{outline:none}button:hover{outline:none;background:transparent;box-shadow:none}.cnt-form-action{display:flex;justify-content:flex-end}.cnt-form-action>igy-button{margin-left:15px}.igy-card{background:#ffffff;border-radius:10px;box-shadow:0 16px 24px #0000000f,0 2px 6px #0000000a,0 0 1px #0000000a}.primary-btn{background-color:#0cb465;border-color:#0cb465;color:#fff;box-shadow:none;border:none;height:35px;width:inherit}:host ::ng-deep .mat-tab-label-content{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:14px}:host ::ng-deep .mat-tab-body-wrapper{border-top-left-radius:0;border-top-right-radius:0}:host ::ng-deep .mat-tab-body-wrapper .mat-tab-body{padding:30px 15px}:host ::ng-deep .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{overflow:visible}:host ::ng-deep .mat-tab-group.mat-primary .mat-ink-bar,:host ::ng-deep .mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#50bd61}:host ::ng-deep .mat-tab-labels{justify-content:center}:host ::ng-deep .mat-tab-labels .mat-tab-label .mat-tab-label-content{letter-spacing:.25px;font-style:normal;font-weight:700;font-size:14px;line-height:20px;color:#000}:host ::ng-deep .mat-tab-label-active{color:purple}:host ::ng-deep .mat-tab-label-active .mat-tab-label-content{color:purple!important}\n"], components: [{ type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple"], exportAs: ["matTabGroup"] }, { type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TabsLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'igy-tabs-layout', template: "\r\n<mat-tab-group mat-align-tabs=\"start\">\r\n  <mat-tab *ngFor=\"let tab of data_tabs\" label=\"{{tab.label}}\">\r\n    <ng-container *ngIf=\"contentTemplateRef\" [ngTemplateOutlet]=\"contentTemplateRef\" [ngTemplateOutletContext]=\"{$implicit:tab}\"></ng-container>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@100;200;300;400;500;600;700&family=Permanent+Marker&family=Poppins:wght@100;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap\";@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons.woff2) format(\"woff2\"),url(./material-icons.woff) format(\"woff\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-outlined.woff2) format(\"woff2\"),url(./material-icons-outlined.woff) format(\"woff\")}.material-icons-outlined{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-round.woff2) format(\"woff2\"),url(./material-icons-round.woff) format(\"woff\")}.material-icons-round{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-sharp.woff2) format(\"woff2\"),url(./material-icons-sharp.woff) format(\"woff\")}.material-icons-sharp{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(./material-icons-two-tone.woff2) format(\"woff2\"),url(./material-icons-two-tone.woff) format(\"woff\")}.material-icons-two-tone{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.fx-align-center{width:inherit;display:flex;justify-content:center}.fx-align-left{width:inherit;display:flex;justify-content:flex-start}.fx-align-right{width:inherit;display:flex;justify-content:flex-end}.bg-card-green{background:rgba(227,247,225,.2);box-shadow:0 4px 4px #00000040}.bg-card-orange{background:#FF6633;box-shadow:0 4px 4px #00000040}.bg-card-gray{background:#f4f4f4;box-shadow:0 4px 4px #00000040}.bg-card-gray-2{background:#f8f8f8;box-shadow:0 4px 4px #00000040}.bg-card-yellow{background:#fff5de;box-shadow:0 4px 4px #00000040}.scroller{scrollbar-width:thin;scrollbar-color:#93989d;cursor:pointer}.scroller::-webkit-scrollbar{width:8px;height:8px;cursor:pointer}.scroller::-webkit-scrollbar-track{background-color:transparent;border-radius:10px;cursor:pointer}.scroller::-webkit-scrollbar-thumb{background-color:#93989d;box-shadow:inset 0 0 8px #0000004d;border-radius:10px;cursor:pointer}h1{font-family:Montserrat,sans-serif;font-weight:700;font-size:24px;line-height:20px;font-style:normal;display:flex;align-items:center;letter-spacing:.25px;color:#000;padding-bottom:15px;margin-bottom:10px;border-bottom:1px solid #E4E4E4}h1>.icons{font-size:24px;margin-right:15px;color:inherit}h2{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:20px}h3{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:20px}h4{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:20px}h5{font-family:Montserrat,sans-serif;font-style:normal;font-weight:700;font-size:14px;line-height:20px}P,div{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px}span{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px}a{font-family:Montserrat,sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:20px;text-decoration:none;cursor:pointer}label{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:12px;line-height:20px}button{outline:none}button:hover{outline:none;background:transparent;box-shadow:none}.cnt-form-action{display:flex;justify-content:flex-end}.cnt-form-action>igy-button{margin-left:15px}.igy-card{background:#ffffff;border-radius:10px;box-shadow:0 16px 24px #0000000f,0 2px 6px #0000000a,0 0 1px #0000000a}.primary-btn{background-color:#0cb465;border-color:#0cb465;color:#fff;box-shadow:none;border:none;height:35px;width:inherit}:host ::ng-deep .mat-tab-label-content{font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:14px}:host ::ng-deep .mat-tab-body-wrapper{border-top-left-radius:0;border-top-right-radius:0}:host ::ng-deep .mat-tab-body-wrapper .mat-tab-body{padding:30px 15px}:host ::ng-deep .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{overflow:visible}:host ::ng-deep .mat-tab-group.mat-primary .mat-ink-bar,:host ::ng-deep .mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#50bd61}:host ::ng-deep .mat-tab-labels{justify-content:center}:host ::ng-deep .mat-tab-labels .mat-tab-label .mat-tab-label-content{letter-spacing:.25px;font-style:normal;font-weight:700;font-size:14px;line-height:20px;color:#000}:host ::ng-deep .mat-tab-label-active{color:purple}:host ::ng-deep .mat-tab-label-active .mat-tab-label-content{color:purple!important}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { data_tabs: [{
                type: Input
            }], titleTemplateRef: [{
                type: ContentChild,
                args: ['title', { static: false }]
            }], descriptionTemplateRef: [{
                type: ContentChild,
                args: ['description', { static: false }]
            }], contentTemplateRef: [{
                type: ContentChild,
                args: ['content', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaWd5LXRlbXBsYXRlcy1tb2R1bGVzL3NyYy9saWIvbGF5b3V0cy90YWJzLWxheW91dC90YWJzLWxheW91dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9sYXlvdXRzL3RhYnMtbGF5b3V0L3RhYnMtbGF5b3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7Ozs7QUFhbkYsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QixnQkFBZSxDQUFDO0lBTWhCLE9BQU8sQ0FBQyxHQUFRO1FBQ2QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVE7UUFDYixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxRQUFRLEtBQVUsQ0FBQzs7aUhBaEJSLG1CQUFtQjtxR0FBbkIsbUJBQW1CLDBZQ2JoQyx1VEFNQTs0RkRPYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsaUJBQWlCOzBFQUtsQixTQUFTO3NCQUFqQixLQUFLO2dCQUVtQyxnQkFBZ0I7c0JBQXRELFlBQVk7dUJBQUMsT0FBTyxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFDUSxzQkFBc0I7c0JBQWxFLFlBQVk7dUJBQUMsYUFBYSxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFDRixrQkFBa0I7c0JBQTFELFlBQVk7dUJBQUMsU0FBUyxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxDb250ZW50Q2hpbGQsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4YW1wbGVUYWIge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lneS10YWJzLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJzLWxheW91dC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic0xheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF0YV90YWJzIDphbnk7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gICAgQENvbnRlbnRDaGlsZCgndGl0bGUnLHtzdGF0aWM6IGZhbHNlfSkgdGl0bGVUZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuICAgIEBDb250ZW50Q2hpbGQoJ2Rlc2NyaXB0aW9uJyx7c3RhdGljOiBmYWxzZX0pIGRlc2NyaXB0aW9uVGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcbiAgICBAQ29udGVudENoaWxkKCdjb250ZW50Jyx7c3RhdGljOiBmYWxzZX0pIGNvbnRlbnRUZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG4gIGlzVGFibGUodGFiOiBhbnkpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0YWIpLmluY2x1ZGVzKCdkYXRhU291cmNlJyk7XHJcbiAgfVxyXG5cclxuICBpc0Zvcm0odGFiOiBhbnkpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0YWIpLmluY2x1ZGVzKCdmaWVsZHMnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxufVxyXG4iLCJcclxuPG1hdC10YWItZ3JvdXAgbWF0LWFsaWduLXRhYnM9XCJzdGFydFwiPlxyXG4gIDxtYXQtdGFiICpuZ0Zvcj1cImxldCB0YWIgb2YgZGF0YV90YWJzXCIgbGFiZWw9XCJ7e3RhYi5sYWJlbH19XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudFRlbXBsYXRlUmVmXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlUmVmXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6dGFifVwiPjwvbmctY29udGFpbmVyPlxyXG4gIDwvbWF0LXRhYj5cclxuPC9tYXQtdGFiLWdyb3VwPlxyXG4iXX0=