// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { ImageData } from "./image.model";

export interface SobreNosotros {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    tituloUno:   string;
    textoUno:    string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    bannerDos:   BannerDOS;
    cards:       Card[];
    cloud:       Cloud;
}

export interface BannerDOS {
    id:            number;
    textBannerUno: string;
    textImage:     string;
    textBannerDos: string;
    imageBanner:   ImageData;
}

export interface Card {
    id:        number;
    textoBase: string;
    icono:     ImageData;
}

export interface Cloud {
    id:        number;
    contenido: string;
    image:     ImageData;
}
