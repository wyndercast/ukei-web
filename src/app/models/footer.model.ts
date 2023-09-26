import { ImageData } from "./image.model";

export interface Footer {
    data:   Data;
}

export interface Data{
    id:         number; 
    attributes: Attributes;
}

export interface Attributes {
    contenido:   string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    logo:        ImageData;
    menu:        Menu[];
    social:      Social[];
    copy:        string;
}

export interface Menu {
    id:   number;
    name: string;
    url:  string;
}

export interface Social {
    id:    number;
    url:   string;
    icono: ImageData;
}