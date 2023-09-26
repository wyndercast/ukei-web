import { ImageData } from "./image.model";

export interface Articles {
    data: Data[];
    meta: Meta;
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
    Articulo:     Articulo | null;
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
}

export interface Autores {
    data: AutoresData[];
}

export interface AutoresData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    Autor?:      string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    Name?:       string;
}

export interface Categories {
    data: CategoriesData[];
}

export interface CategoriesData {
    id:         number;
    attributes: FluffyCategoryAttributes;
}

export interface FluffyCategoryAttributes {
    Autor?:      string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    Name?:       string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
