import { CommonModel } from "./CommonModel";

export interface EBookModel extends CommonModel {
    title: string,
    pageCount: number,
    publishedYear: number,
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    author: string,
    genre: string,
    rent: number,
}