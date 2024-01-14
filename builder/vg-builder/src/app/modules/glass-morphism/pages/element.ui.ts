export enum FieldMode {
    BUILDER = 'BUILDER',
    LIVE = 'LIVE',
  }
export enum UiType {
    page = 'page',
    column = 'column',
    container = 'container'
}
export interface IElementUi {
    type: string;
    label: string;
    order:number ;
    classes?: string;
    children?: {[key: string]: IElementUi };
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
    type: UiType = UiType.column;
    label: string = 'row';
    order:number  = -1;
    children?: {[key: string]: IElementUi };
    classes?: string = 'd-flex flex-row ';
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
    classes?: string = 'd-flex flex-column';
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
    classes?: string = 'container';
    children?: { [key: string]: IElementUi };
    constructor(options: {
        label?: string,
        order?:number;
        children: {[key: string]: IElementUi };
    }) {
        Object.assign(this, options);
    }
}
