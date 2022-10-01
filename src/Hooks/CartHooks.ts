import axios from "axios";
import { useState } from "react";
import { Config } from "../Config/Config";
import { CartItemsModel } from './../Models/CartItemsModel';

export const useCartHooks = () => {
    const [cart, setCart] = useState<any>(undefined);

    if (!cart) {
        axios.get(Config.API_URL + "/cart/getAllCartItems", {
            headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
        }).then((res: any) => {
            if (res.data.error) {
                console.log(res.data.error);
            } else {
                setCart(res.data);
            }
        }).catch((error) => {
            if (error) {
                console.log("Error => ", error);
            }
        });
    }

    const updateCartItem = async (bookId: string, noOfDays: number) => {
        await axios.put(Config.API_URL + `/cart/updateCartItem/${bookId}`, { noOfDays: noOfDays }, {
            headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
        });
    }

    const confirmOrder = async () => {
        await cart?.items?.map(async (item: CartItemsModel) => {
            await axios.post(Config.API_URL + "/userBook/create", { bookId: item.itemId, noOfDays: item.noOfDays }, {
                headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
            }).then((res: any) => {
                if (res.data.error) {
                    console.log(res.data.error);
                } else {
                    axios.delete(Config.API_URL + "/cart/clearCart", {
                        headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
                    });
                }
            });
        })
    }

    return { cart, updateCartItem, confirmOrder }
}