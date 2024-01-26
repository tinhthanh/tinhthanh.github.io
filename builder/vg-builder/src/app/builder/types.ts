import { BuilderType } from "../modules/form-field/form.builder";
import { IElementUi } from "./element.ui";

// State for node
export type GlobalBuilderState = {
    currentNodeActive: IElementUi | null;
}
export const GlobalBuilderFields: { [K in keyof GlobalBuilderState]: BuilderType<GlobalBuilderState> } = {
    currentNodeActive: 'currentNodeActive'
}
