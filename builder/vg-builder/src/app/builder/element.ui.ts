import { Type } from "@angular/core";
import { ElBase } from "./el-base";
import { UiPagePage } from "./page-elements/ui-page.page";
import { UiImagePage } from "./base-elements/ui-image/ui-image.page";
import { UiIframePage } from "./base-elements/ui-iframe/ui-iframe.page";
import { UiFormPage } from "./form-elements/ui-form/ui-form.page";
import { IField } from "../modules/form-field/form.field";

export enum FieldMode {
    BUILDER = 'BUILDER',
    LIVE = 'LIVE',
  }
export enum UiType {
    page = 'page',
    column = 'column',
    row = 'row',
    container = 'container',
    image = 'image',
    iframe = 'iframe',
    form = 'form'
}
export interface IElementUi {
    type: UiType;
    label: string;
    order:number ;
    classes?: string;
    children?: {[key: string]: IElementUi };
    width?: string;
    height?: string;
}
export class PageUi implements IElementUi { // for root page
    type: UiType = UiType.page;
    label: string = 'Page';
    order:number  = -1;
    children?: {[key: string]: IElementUi };
    classes?: string = 'w-100';
    constructor(options: {
        label?: string,
        order?:number;
        children: {[key: string]: IElementUi };
    }) {
        Object.assign(this, options);
    }
}
export class Row implements IElementUi {
    type: UiType = UiType.row;
    label: string = 'row ';
    order:number  = -1;
    children?: {[key: string]: IElementUi };
    classes?: string = 'row min-h-25';
    constructor(options: {
        label?: string,
        order?:number;
        children: {[key: string]: IElementUi };
    }) {
        Object.assign(this, options);
    }
}
// element tu trên xuống
export class Column implements IElementUi {
    type: UiType = UiType.column;
    label: string = 'Column';
    order:number  = -1;
    children?: {[key: string]: IElementUi };
    classes?: string = 'col min-h-25';
    constructor(options: {
        label?: string,
        order?:number;
        children: {[key: string]: IElementUi };
    }) {
        Object.assign(this, options);
    }
}

export class Container implements IElementUi {
    type: UiType = UiType.container;
    label: string = 'Container';
    order:number  = -1;
    classes?: string = 'container min-h-25';
    children?: { [key: string]: IElementUi };
    constructor(options: {
        label?: string,
        order?:number;
        children: {[key: string]: IElementUi };
    }) {
        Object.assign(this, options);
    }
}
export class UiImage implements IElementUi {
    type: UiType = UiType.image;
    label: string = 'image';
    order:number  = -1;
    src?: string;
    children?: {[key: string]: IElementUi };
    classes?: string = '';
    constructor(options: {
        label?: string,
        order?:number;
        src: string
    }) {
        Object.assign(this, options);
    }
}
export class UiIframe implements IElementUi {
    type: UiType = UiType.iframe;
    label: string = 'iframe';
    order:number  = -1;
    src?: string;
    children?: {[key: string]: IElementUi };
    classes?: string = '';
    width: string = '100%';
    height: string = '100%';
    constructor(options: {
        label?: string,
        order?:number;
        src: string;
        width?: string;
        height?: string;
    }) {
        Object.assign(this, options);
    }
}

export class UiForm<T> implements IElementUi {
    type: UiType = UiType.form;
    label: string = 'form';
    order:number  = -1;
    classes?: string = '';
    config?:  { [K in keyof T]: IField }
    patchValue?: T
    constructor(options: {
        label?: string,
        order?:number;
        classes?: string;
        config:  { [K in keyof T]: IField },
        patchValue: T
    }) {
        Object.assign(this, options);
    }
}

export const elRegister: Record<UiType,Type<ElBase<IElementUi>> | null>  = {
    [UiType.page] : UiPagePage,
    [UiType.column] :null,
    [UiType.container] : null,
    [UiType.row]: null,
    [UiType.image]: UiImagePage,
    [UiType.iframe]: UiIframePage,
    [UiType.form]: UiFormPage
}
