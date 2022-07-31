import React from 'react';
import { InputField } from '../../../../shared';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AuthButton } from '../../../../shared';
// yup
import * as yup from 'yup';

import { Box } from '@mui/material';

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
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const schema = yup.object({
    username: yup.string().required('This field is required'),
    email: yup
        .string()
        .required('This field is required')
        .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'This is not valid email format'),
    password: yup
        .string()
        .required('This field is required')
        .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 'Password should be 8 chars minimum and at least 1 number'),
    confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords must match')
});

const SignInForm = () => {
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
        //     username: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // });

        console.log(data);

        alert('done');
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
                    <AuthButton page="submit">Log In</AuthButton>
                </Box>
            </form>
        </>
    );
};

export default SignInForm;
