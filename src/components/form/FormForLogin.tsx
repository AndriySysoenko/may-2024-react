import React from 'react';
import { useForm } from 'react-hook-form';
import {IFormLogin} from "../../models/IFormLogin";
import {login} from "../../services/api.service";

type FormLoginProps = IFormLogin;
const FormForLogin = () => {
    const {handleSubmit, register} = useForm<FormLoginProps>();

  const loginHandler = (formInputData:FormLoginProps) => {
        login(formInputData);
        console.log(formInputData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(loginHandler)}>
                <input type="text" placeholder={'Username'} {...register('username')}/>
                <input type="text" placeholder={'Password'} {...register('password')}/>
                <button>Submit</button>
            </form>

        </div>
    );
};

export default FormForLogin;