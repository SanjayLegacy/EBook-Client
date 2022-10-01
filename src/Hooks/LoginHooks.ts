import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidation } from "../Utils/validations";
import { Config } from "../Config/Config";

type LoginForm = {
    username: string;
    password: string;
};

export const useLoginHooks = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({ resolver: yupResolver(loginFormValidation) });

    const onSubmit = handleSubmit(async (values) => {
        const data = { username: values.username, password: values.password };
        await axios
            .post(Config.API_URL + "/auth/login", data)
            .then((res: any) => {
                if (res.data.error) {
                    window.alert(res.data.error);
                } else {
                    sessionStorage.setItem("accessToken", res.data.jwtToken);
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

    return { register, errors, onSubmit, showPassword, setShowPassword, navigate }
}