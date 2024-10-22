import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormPost } from '../models/IFormPost';
import {addPost} from "../service/api.service";

type FormPostProps = IFormPost;
const FormComponent = () => {
    const {handleSubmit, register} = useForm<FormPostProps>();

    const postHandler = (formInputData:FormPostProps) => {
       addPost(formInputData);
    }

    return (
        <div>

            <form onSubmit={handleSubmit(postHandler)}>
                <input type="text" placeholder={'Title'} {...register('title')}/>
                <input type="text" placeholder={'Body'} {...register('body')}/>
                <input type="number" placeholder={'UserId'} {...register('userId')}/>
                <button>Submit</button>
            </form>

        </div>
    );
};

export default FormComponent;