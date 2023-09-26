import { ImageData } from "./image.model";

export interface NavBar {
    data: Data;
}

export interface Data {
    attributes: Attributes;
}

export interface Attributes{
    logo: ImageData;
    menu: Menu[];
}

export interface Menu {
    id:   number;
    name: string;
    url:  string;
}