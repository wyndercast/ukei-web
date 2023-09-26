// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Blog {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    titulo:      string;
    descripcion: string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}
