// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { ImageData } from "./image.model";

export interface Consumidor {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    createdAt:            Date;
    updatedAt:            Date;
    publishedAt:          Date;
    tituloUno:            string;
    tituloDos:            string;
    textoDos:             string;
    tituloTres:           string;
    textoTres:            string;
    tituloCuatro:         string;
    textoAccordionBottom: string;
    banner:               Banner;
    tarjetas:             Tarjeta[];
    cloud:                Cloud[];
    stepper:              Stepper[];
    form:                 Form;
    cloudDos:             Cloud;
    accordion:            Accordion[];
    iconStepperOnly:      ImageData;
}

export interface Accordion {
    id:              number;
    tituloAccordion: string;
    textoAccordion:  null | string;
}

export interface Banner {
    id:         number;
    title:      string;
    content:    string;
    fondo:      ImageData;
    imageFondo: ImageData;
}

export interface Tarjeta {
    id:        number;
    textoBase: string;
    icono:     ImageData;
}

export interface Cloud {
    id:        number;
    contenido: string;
    image:     ImageData;
}

export interface Form {
    id:                     number;
    nombreLabel:            string;
    emailLabel:             string;
    descripcionLabel:       string;
    placeHolderName:        string;
    placeHolderEmail:       string;
    placeHolderDescripcion: string;
    tipotramiteLabel:       string;
    icono:                  ImageData;
}

export interface Stepper {
    id:           number;
    title:        null;
    titleItem:    null;
    description:  string;
    titleIcono:   ImageData;
    item:         any[];
    iconostepper: ImageData;
}
