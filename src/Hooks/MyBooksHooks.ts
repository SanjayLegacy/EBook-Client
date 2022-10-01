import axios from "axios";
import { useState } from "react";
import { Config } from "../Config/Config";
import { UserBookModel } from "../Models/UserBookModel";

export const useMyBooksHooks = () => {
    const [myBooks, setMyBooks] = useState<UserBookModel[]>();

    if (!myBooks || !myBooks.length || myBooks.length < 1) {
        axios
            .get(Config.API_URL + "/userBook/getAll", {
                headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
            })
            .then((res: any) => {
                if (res.data.error) {
                    console.log(res.data.error);
                } else {
                    setMyBooks(res.data);
                }
            })
            .catch((error) => {
                if (error) {
                    console.log("Error => ", error);
                }
            });
    }

    const deleteBook = (bookId: string | number) => {
        if (bookId !== undefined || bookId !== null) {
            axios.delete(Config.API_URL + `/userBook/${bookId}`, {
                headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
            });
        }
    }

    return { myBooks, deleteBook }
}