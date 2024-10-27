import React, {useEffect} from 'react';
import FormForLogin from "../components/form/FormForLogin";
import {login} from "../services/api.service";

const LoginPage = () => {

    // useEffect(()=>{
    //     login(FormForLogin.loginHandler).then (response => console.log(response))
    // }, []);

    return (
        <div>
            This is must be form for login

            <FormForLogin/>
        </div>
    );
};

export default LoginPage;