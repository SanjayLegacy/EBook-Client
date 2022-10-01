import { CommonModel } from "./CommonModel";

export enum Role {
    Admin = 'Admin',
    User = 'User'
}

export interface UserModel extends CommonModel {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: Role;
    walletBalance: number;
}