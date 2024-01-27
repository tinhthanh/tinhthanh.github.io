import { IElementUi } from "./element.ui";
export enum DeviceType {
  'MOBILE' = 'MOBILE',
  'DESKTOP' = 'DESKTOP',
}
export enum ThemeType {
  'LIGHT' = 'LIGHT',
  'DARK' = 'DARK',
}
// State for node
export interface GlobalBuilderState {
    parentNode: IElementUi | null;
    currentNodeActive: IElementUi | null;
    deviceMode: DeviceType | null;
    themeMode : ThemeType | null;
}

