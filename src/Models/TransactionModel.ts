import { CommonModel } from "./CommonModel";

export interface TransactionModel extends CommonModel {
    userId: string,
    amount: number
}