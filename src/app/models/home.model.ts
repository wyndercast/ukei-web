import { ImageData } from "./image.model";
import { Stepper } from "./stepper.model";

export interface Home {
    data: Data;
}

export interface Data{
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    titulo:           null;
    subtitulo:        null;
    tituloContent:    null;
    parrafo:          null;
    subtituloDos:     null;
    titluloSegundo:   null;
    segundoContenido: null;
    tituloTres:       null;
    contenidoTres:    null;
    textoDesc:        null;
    createdAt:        Date;
    updatedAt:        Date;
    publishedAt:      Date;
    bannerHome:       BannerHome;
    tarjeta:          any[];
    tarjetaSection:   any[];
    section:          Section;
    tarjetasTres:     any[];
    sectionCuatro:    Section;
    carrusel:         null;
    stepper:          Stepper[];
    titleStepper:     string;
}

export interface BannerHome {
    id:         number;
    title:      null;
    content:    string;
    fondo:      ImageData;
    imageFondo: ImageData;
}

export interface Section{
    contenido: string;
    image: ImageData;
}