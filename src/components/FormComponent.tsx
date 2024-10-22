import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormPost } from '../models/IFormPost';

type FormPostProps = IFormPost;
const FormComponent = () => {
    const {handleSubmit, register} = useForm<FormPostProps>();

    const postHeandler = (formInputData:FormPostProps) => {
        console.log(formInputData)
    }
    return (
        <div>

            <form onSubmit={handleSubmit(postHeandler)}>
                <input type="text" placeholder={'Titel'} {...register('title')}/>
                <input type="text" placeholder={'Body'} {...register('body')}/>
                <input type="number" placeholder={'UserId'} {...register('userId')}/>
                <button>Submit</button>
            </form>

        </div>
    );
};

export default FormComponent;