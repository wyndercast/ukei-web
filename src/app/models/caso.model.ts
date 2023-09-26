// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { ImageData } from "./image.model";

export interface Caso {
    data: WelcomeData;
}

export interface WelcomeData {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    textoBanner: string;
    titulo:      string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    form:        Form;
    cards:       Card[];
}

export interface Card {
    id:        number;
    textoBase: string;
    icono:     ImageData;
}


export interface Form {
    id:                     number;
    nombreLabel:            string;
    emailLabel:             string;
    descripcionLabel:       string;
    placeHolderName:        string;
    placeHolderEmail:       string;
    placeHolderDescripcion: string;
    tipotramiteLabel:       null;
    icono:                  ImageData;
}
