import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Config } from "../Config/Config";
import { EBookModel } from "../Models/EBookModel";
import { UserModel } from "../Models/UserModel";
import { bookFormValidation } from "../Utils/validations";

type BookForm = {
    author: string;
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    pageCount: number;
    title: string;
    publishedYear: number,
    rent: number;
    genre: number;
};

export const useEBookHooks = (id?: string | number) => {
    const navigate = useNavigate();
    const [ebooks, setEbooks] = useState<EBookModel[]>();
    const [book, setBook] = useState<EBookModel>();
    const [currentUser, setCurrentUser] = useState<UserModel>();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BookForm>({ resolver: yupResolver(bookFormValidation) });

    useEffect(() => {
        if (!currentUser) {
            axios
                .get(Config.API_URL + "/auth/currentUser", {
                    headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
                })
                .then((res: any) => {
                    if (res.data.error) {
                        console.log("Error getting current user data!");
                    } else {
                        setCurrentUser(res.data);
                    }
                });
        }
    }, [currentUser]);

    useEffect(() => {
        if (id) {
            axios
                .get(Config.API_URL + `/ebook/getBookById/${id}`, {
                    headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
                })
                .then((res: any) => {
                    if (res.data.error) {
                        console.log(res.data.error);
                    } else {
                        setBook(res.data);
                    }
                })
                .catch((error) => {
                    if (error) {
                        console.log("Error => ", error);
                    }
                });
        }
    }, [id]);

    if (!ebooks || !ebooks.length || ebooks.length < 1) {
        axios
            .get(Config.API_URL + "/ebook/getAllEBooks", {
                headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
            })
            .then((res: any) => {
                if (res.data.error) {
                    console.log(res.data.error);
                } else {
                    setEbooks(res.data);
                }
            })
            .catch((error) => {
                if (error) {
                    console.log("Error => ", error);
                }
            });
    }

    const addToCart = (id: string | number) => {
        if (id !== undefined || id !== null) {
            axios
                .post(Config.API_URL + "/cart/addToCart", { id: id }, {
                    headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
                })
                .then((res: any) => {
                    if (res.data.error) {
                        console.log(res.data.error);
                    } else {
                        console.log(res.data);
                    }
                })
                .catch((error) => {
                    if (error) {
                        console.log("Error => ", error);
                    }
                });
        }
    }

    const removeFromCart = (id: string | number) => {
        if (id !== undefined || id !== null) {
            axios
                .delete(Config.API_URL + `/cart/removeCartItem/${id}`, {
                    headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
                })
                .then((res: any) => {
                    if (res.data.error) {
                        console.log(res.data.error);
                    } else {
                        console.log(res.data);
                    }
                })
                .catch((error) => {
                    if (error) {
                        console.log("Error => ", error);
                    }
                });
        }
    }

    const deleteBook = (id: string | number) => {
        if (id !== undefined || id !== null) {
            axios
                .delete(Config.API_URL + `/ebook/deleteBook/${id}`, {
                    headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
                })
                .then((res: any) => {
                    if (res.data.error) {
                        console.log(res.data.error);
                    } else {
                        console.log(res.data);
                        navigate("/home");
                    }
                })
                .catch((error) => {
                    if (error) {
                        console.log("Error => ", error);
                    }
                });
        }
    }

    const onSubmit = handleSubmit(async (values) => {
        const data = { author: values.author, imageLink: values.thumbnailUrl, shortDescription: values.shortDescription, longDescription: values.longDescription, pageCount: values.pageCount, title: values.title, publishedYear: values.publishedYear, rent: values.rent, genre: values.genre };
        await axios
            .post(Config.API_URL + "/ebook/addNewBook", data, {
                headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
            })
            .then((res: any) => {
                if (res.data.error) {
                    window.alert(res.data.error);
                } else {
                    navigate("/home");
                }
            })
            .catch((error) => {
                if (error) {
                    window.alert(error);
                    console.log("Error => ", error);
                }
            });
    });

    return { ebooks, book, addToCart, removeFromCart, deleteBook, currentUser, register, errors, onSubmit }
}