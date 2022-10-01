import { UserModel } from './../Models/UserModel';
import { useEffect, useState } from "react"
import axios from 'axios';
import { Config } from '../Config/Config';

export const useUsersHooks = (id?: string | number) => {
    const [users, setUsers] = useState<UserModel[]>();
    const [user, setUser] = useState<UserModel>();

    useEffect(() => {
        if (id) {
            axios
                .get(Config.API_URL + `/auth/getUserById/${id}`, {
                    headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
                })
                .then((res: any) => {
                    if (res.data.error) {
                        console.log(res.data.error);
                    } else {
                        setUser(res.data);
                    }
                })
                .catch((error) => {
                    if (error) {
                        console.log("Error => ", error);
                    }
                });
        }
    }, [id]);

    if (!users || !users.length || users.length < 1) {
        axios
            .get(Config.API_URL + "/auth/getAllUsers", {
                headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
            })
            .then((res: any) => {
                if (res.data.error) {
                    console.log(res.data.error);
                } else {
                    setUsers(res.data);
                }
            })
            .catch((error) => {
                if (error) {
                    console.log("Error => ", error);
                }
            });
    }

    const deleteUser = (userId: string | number) => {
        if (userId !== undefined || userId !== null) {
            axios.delete(Config.API_URL + `/auth/delete/${userId}`, {
                headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
            });
        }
    }

    return { users, user, deleteUser }
}