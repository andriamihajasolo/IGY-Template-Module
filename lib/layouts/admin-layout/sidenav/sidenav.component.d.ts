import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface itemMenus {
    router: string;
    icone: string;
    name: string;
    asSubnav: SubNavMenus[];
    isModal: boolean;
}
export interface SubNavMenus {
    router: string;
    icone: string;
    name: string;
}
export declare class SidenavComponent implements OnInit {
    logo: string;
    GetItemMenus: itemMenus[];
    isModal: boolean;
    click_menu: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    prop_menu(event: boolean, router: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavComponent, "igy-sidenav", never, { "logo": "logo"; "GetItemMenus": "GetItemMenus"; "isModal": "isModal"; }, { "click_menu": "click_menu"; }, never, never>;
}
