import React, {useEffect, useState} from 'react';
import FormForLogin from "../components/form/FormForLogin";
import {login} from "../services/api.service";
import {IFormLogin} from "../models/IFormLogin";
import {IUserWithToken} from "../models/IUserWithToken";
import {useNavigate, useOutletContext} from "react-router-dom";
import {IUserInfo} from "../models/IUserInfo";


const LoginPage = () => {
    const [dataForLogin, setDataForLogin] = useState<IFormLogin | null>(null)
    const loginData = (formInputData:IFormLogin) => {
        setDataForLogin(formInputData)
    }

    const userIdentification = useOutletContext<(userLoginInfo:IUserInfo) => void>()

    // const [authUser, setAuthUser] = useState<IUserWithToken | null>(null)
    const navigate = useNavigate();

    useEffect(()=>{
        if (dataForLogin) {
            login(dataForLogin).then(response => {
                userIdentification({ firstName: response.firstName, lastName: response.lastName });
                navigate('/')})
                .catch(error => {
                console.error("Ошибка авторизации:", error);
            });
        }

    }, [dataForLogin]);

    return (
        <div>
            <FormForLogin loginData = {loginData}/>
            <hr/>
            {/*<div>{userLoginInfo.firstName}</div>*/}
        </div>
    );
};

export default LoginPage;