import { Config } from './../Config/Config';
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormValidation } from "../Utils/validations";

type RegisterForm = {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
};

export const useRegisterHooks = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>({ resolver: yupResolver(registerFormValidation) });

    const onSubmit = handleSubmit((values) => {
        const data = { username: values.username, password: values.confirmPassword, firstName: values.firstName, lastName: values.lastName };
        if (values.confirmPassword.toLowerCase() === values.password.toLowerCase()) {
            axios
                .post(Config.API_URL + "/auth/register", data)
                .then((res: any) => {
                    if (res.data.error) {
                        window.alert(res.data.error);
                    } else {
                        navigate("/");
                    }
                })
                .catch((error: any) => {
                    if (error) {
                        console.log("Error => ", error);
                    }
                });
        } else {
            window.alert("Password does not match!!!");
        }
    });

    return {
        showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword,
        navigate, register, errors, onSubmit
    }
}