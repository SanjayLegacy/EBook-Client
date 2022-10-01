import axios from 'axios';
import { useEffect, useState } from 'react';
import { Config } from '../Config/Config';
import { TransactionModel } from '../Models/TransactionModel';
import { Role, UserModel } from '../Models/UserModel';

export const useTransactionHooks = () => {
    const [transactions, setTransactions] = useState<TransactionModel[]>();
    const [userTransactions, setUserTransactions] = useState<TransactionModel[]>();
    const [currentUser, setCurrentUser] = useState<UserModel>();

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

    if (currentUser?.role === Role.Admin) {
        if (!transactions || !transactions.length || transactions.length < 1) {
            axios
                .get(Config.API_URL + "/ledger/getAllTransactions", {
                    headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
                })
                .then((res: any) => {
                    if (res.data.error) {
                        console.log(res.data.error);
                    } else {
                        setTransactions(res.data);
                    }
                })
                .catch((error) => {
                    if (error) {
                        console.log("Error => ", error);
                    }
                });
        }
    }

    if (currentUser?.role === Role.User) {
        if (!userTransactions || !userTransactions.length || userTransactions.length < 1) {
            axios
                .get(Config.API_URL + "/ledger/getAllTransactionsByUser", {
                    headers: { accessToken: sessionStorage.getItem("accessToken") ?? "" },
                })
                .then((res: any) => {
                    if (res.data.error) {
                        console.log(res.data.error);
                    } else {
                        setUserTransactions(res.data);
                    }
                })
                .catch((error) => {
                    if (error) {
                        console.log("Error => ", error);
                    }
                });
        }
    }

    return { transactions, userTransactions, currentUser }
}