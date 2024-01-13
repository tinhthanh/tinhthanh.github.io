export enum FieldMode {
    BUILDER = 'BUILDER',
    LIVE = 'LIVE',
  }
export enum UiType {
    page = 'page'
}
export interface IElementUi {
    type: string;
    label: string;
    children?: {[key: string]: IElementUi };
}
export class PageUi implements IElementUi {
    type: UiType = UiType.page;
    label: string = '';
    children?: {[key: string]: IElementUi };
    constructor(options: {
        label: string,
        children: {[key: string]: IElementUi };
    }) {
        Object.assign(this, options);
    }
}