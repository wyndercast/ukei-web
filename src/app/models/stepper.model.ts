import { ImageData } from "./image.model";

export interface Stepper {

    id:           number;
    title:        string;
    titleItem:    null | string;
    description:  null | string;
    titleIcono:   ImageData;
    item:         Item[];
    iconostepper: ImageData;
    subTitle?: string;
    textSubtitle?: string;
}

export interface Item {
    id:       number;
    itemname: string;
    icono:    ImageData;
}