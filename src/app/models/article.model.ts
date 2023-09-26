// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { ImageData } from "./image.model";

export interface Article {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    titulo:       string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    ImagenBanner: ImageData;
    Articulo:     Articulo;
    categories:   Categories;
    autores:      Autores;
}

export interface Articulo {
    id:           number;
    fecha:        string;
    textoUno:     string;
    textoDos:     string;
    tituloTres:   string;
    textoTres:    string;
    tituloCuatro: string;
    textoCuatro:  string;
    imagenUno:    ImageData;
    imagenTres:   ImageData;
}

export interface Autores {
    data: AutoresData[];
}

export interface AutoresData {
    id:         number;
    attributes: TentacledAttributes;
}

export interface TentacledAttributes {
    Autor:       string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    avatar:      ImageData;
    articles:    Articles;
}

export interface Articles {
    data: ArticlesData[];
}

export interface ArticlesData {
    id:         number;
    attributes: StickyAttributes;
}

export interface StickyAttributes {
    titulo:      string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}

export interface Categories {
    data: CategoriesData[];
}

export interface CategoriesData {
    id:         number;
    attributes: IndigoAttributes;
}

export interface IndigoAttributes {
    Name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    articles:    Articles;
}
