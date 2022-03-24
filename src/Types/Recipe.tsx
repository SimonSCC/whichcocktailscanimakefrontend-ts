import { Ingredient } from "./Ingredient";

export type Recipe = {
    title: string;
    videoInfo: VideoInfo;
    measurementOfIngredients: MeasurementOfIngredient[];
}

export type VideoInfo = {
    thumbnail: Thumbnail;
    link: string;
}

export type Thumbnail = {
    url: string;
}

export type MeasurementOfIngredient = {
    measurement: Measurement;
    ingredient: Ingredient;
}

export type Measurement = {
    amount: number;
    measurementType: TypeOfMeasurement;
}

export enum TypeOfMeasurement {
    oz,
    note,
    dash
}


