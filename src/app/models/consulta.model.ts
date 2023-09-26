// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { ImageData } from "./image.model";

export interface Consulta {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    textoBanner:  string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    imagenBanner: ImageData;
    item:         any[];
}