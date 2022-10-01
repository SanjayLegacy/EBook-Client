import { CommonModel } from "./CommonModel";

export interface UserBookModel extends CommonModel {
    startDate: string,
    endDate: string,
    userId: string,
    bookId: string
}