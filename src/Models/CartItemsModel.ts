import { CommonModel } from "./CommonModel";

export interface CartItemsModel extends CommonModel {
    itemId: string,
    noOfDays: number,
    cartId: string,
}