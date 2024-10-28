import React, {FC} from 'react';
import { useForm } from 'react-hook-form';
import {IFormLogin} from "../../models/IFormLogin";
import {login} from "../../services/api.service";

type FormLoginProps = {loginData:(formInputData:IFormLogin) => void};
const FormForLogin:FC<FormLoginProps> = ({loginData}) => {
    const {handleSubmit, register} = useForm<IFormLogin>();

  const loginHandler = (formInputData:IFormLogin) => {
        loginData(formInputData);
        // console.log(formInputData)
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