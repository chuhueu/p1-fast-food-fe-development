import React from 'react';
import { InputField } from '../../../../shared';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AuthButton } from '../../../../shared';
// yup
import * as yup from 'yup';

import { Box } from '@mui/material';

import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { useHistory } from 'react-router-dom';

const dataInput = [
    {
        label: 'Email Address',
        id: 'email',
        type: 'text'
    },
    {
        label: 'Password',
        id: 'password',
        type: 'password'
    }
];

interface IFormInputs {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup
        .string()
        .required('This field is required')
        .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'This is not valid email format'),
    password: yup
        .string()
        .required('This field is required')
        .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 'Password should be 8 chars minimum and at least 1 number')
});

const SignInForm = () => {
    const { setUser } = useContext(AuthContext);
    const history = useHistory();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onHandleSubmit = (data: object) => {
        // reset: ({
        //     email: '',
        //     password: '',
        // });
        setUser(data);
        history.push('/delivery');
    };

    return (
        <>
            <form onSubmit={handleSubmit(onHandleSubmit)} className="flex flex-col mt-4">
                {dataInput.map((item) => (
                    <InputField
                        register={register}
                        id={item.id}
                        name={item.id}
                        label={item.label}
                        errors={errors}
                        key={item.id}
                        type={item.type}
                    />
                ))}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <AuthButton page="submit-signUp">Log In</AuthButton>
                </Box>
            </form>
        </>
    );
};

export default SignInForm;
