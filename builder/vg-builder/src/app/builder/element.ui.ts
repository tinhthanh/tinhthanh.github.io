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
export enum GroupType {
    layout = 'layout',
    base = 'base',
    page = 'page',
    form = 'form',

}
export interface IElementUi {
    id?: string;
    type: UiType;
    label: string;
    order:number ;
    groupType: GroupType;
    parent?: IElementUi;
    classes?: string;
    children?: {[key: string]: IElementUi };
    width?: string;
    height?: string;
    htmlAttributes?: {
        [key: string]: any;
    };
}
export class PageUi implements IElementUi { // for root page
    id?:string;
    type: UiType = UiType.page;
    label: string = 'Page';
    groupType = GroupType.page;
    order:number  = -1;
    children?: {[key: string]: IElementUi };
    classes?: string = 'w-100';
    htmlAttributes?: {
        [key: string]: any;
    }
    constructor(options: {
        id?:string;
        label?: string,
        order?:number;
        children: {[key: string]: IElementUi };
        htmlAttributes?: {
            [key: string]: any;
        }
    }) {
        Object.assign(this, options);
    }
}
export class Row implements IElementUi {
    id?:string;
    type: UiType = UiType.row;
    label: string = 'row';
    groupType = GroupType.layout;
    order:number  = -1;
    children?: {[key: string]: IElementUi };
    classes?: string = 'row min-h-25';
    htmlAttributes?: {
        [key: string]: any;
    }
    constructor(options: {
        id?:string;
        label?: string,
        order?:number;
        children: {[key: string]: IElementUi };
        htmlAttributes?: {
            [key: string]: any;
        }
    }) {
        Object.assign(this, options);
    }
}
// element tu trên xuống
export class Column implements IElementUi {
    id?:string;
    type: UiType = UiType.column;
    label: string = 'Column';
    groupType = GroupType.layout;
    order:number  = -1;
    children?: {[key: string]: IElementUi };
    classes?: string = 'col min-h-25';
    htmlAttributes?: {
        [key: string]: any;
    }
    constructor(options: {
        id?:string;
        label?: string,
        order?:number;
        children: {[key: string]: IElementUi };
        htmlAttributes?: {
            [key: string]: any;
        }
    }) {
        Object.assign(this, options);
    }
}

export class Container implements IElementUi {
    id?:string;
    type: UiType = UiType.container;
    label: string = 'Container';
    groupType = GroupType.layout;
    order:number  = -1;
    classes?: string = 'container min-h-25';
    children?: { [key: string]: IElementUi };
    htmlAttributes?: {
        [key: string]: any;
    }
    constructor(options: {
        id?:string;
        label?: string,
        order?:number;
        children: {[key: string]: IElementUi };
        htmlAttributes?: {
            [key: string]: any;
        }
    }) {
        Object.assign(this, options);
    }
}
export class UiImage implements IElementUi {
    id?:string;
    type: UiType = UiType.image;
    label: string = 'image';
    groupType = GroupType.base;
    order:number  = -1;
    src?: string;
    classes?: string = '';
    htmlAttributes?: {
        [key: string]: any;
    }
    constructor(options: {
        id?:string;
        label?: string,
        order?:number;
        src: string;
        htmlAttributes?: {
            [key: string]: any;
        }
    }) {
        Object.assign(this, options);
    }
}
export class UiIframe implements IElementUi {
    id?:string;
    type: UiType = UiType.iframe;
    label: string = 'iframe';
    groupType = GroupType.base;
    order:number  = -1;
    src?: string;
    children?: {[key: string]: IElementUi };
    classes?: string = '';
    width: string = '100%';
    height: string = '100%';
    htmlAttributes?: {
        [key: string]: any;
    }
    constructor(options: {
        id?:string;
        label?: string,
        order?:number;
        src: string;
        width?: string;
        height?: string;
        htmlAttributes?: {
            [key: string]: any;
        }
    }) {
        Object.assign(this, options);
    }
}

export class UiForm<T> implements IElementUi {
    id?:string;
    type: UiType = UiType.form;
    label: string = 'form';
    groupType = GroupType.form;
    order:number  = -1;
    classes?: string = '';
    config?:  { [K in keyof T]: IField }
    patchValue?: T;
    htmlAttributes?: {
        [key: string]: any;
    }
    constructor(options: {
        id?:string;
        label?: string,
        order?:number;
        classes?: string;
        config:  { [K in keyof T]: IField },
        patchValue: T;
        htmlAttributes?: {
            [key: string]: any;
        }
    }) {
        Object.assign(this, options);
    }
}

export const elRegister: Record<UiType,Type<ElBase<IElementUi>> | null>  = {
    [UiType.page] : null,
    [UiType.column] :null,
    [UiType.container] : null,
    [UiType.row]: null,
    [UiType.image]: UiImagePage,
    [UiType.iframe]: UiIframePage,
    [UiType.form]: UiFormPage
}
export const registerBuilder: Record<UiType, IElementUi | null > = {
    [UiType.page] : null,
    [UiType.column] :new Column( {children: {}}),
    [UiType.container] : new Container({ children: {} }),
    [UiType.row]: new Row({children: {} }),
    [UiType.image]: new UiImage({src : "https://storage.test.finos.asia/hdi-public-test-bucket-static-resource/2023/01/Group-1238-1.png"}),
    [UiType.iframe]: new UiIframe({src : "https://assets.vetgo.vn/iframe/baner/kippo-hover/"}),
    [UiType.form]: null
}
