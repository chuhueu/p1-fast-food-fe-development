import React, { useEffect } from 'react';
import { InputField } from '../../../../shared';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AuthButton } from '../../../../shared';
// yup
import * as yup from 'yup';

import { Box, CircularProgress, Typography } from '@mui/material';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { userState } from '../../../../redux/reducers/userReducer';
import { registerUser } from '../../../../redux/actions/userActions';
import { useHistory } from 'react-router-dom';

const dataInput = [
    {
        label: 'Name',
        id: 'username',
        type: 'text'
    },
    {
        label: 'Email Address',
        id: 'email',
        type: 'text'
    },
    {
        label: 'Password',
        id: 'password',
        type: 'password'
    },
    {
        label: 'Confirm Password',
        id: 'confirmPassword',
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

const SignUpForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userRegister = useSelector<RootState, userState>((state) => state.userRegister);
    const { userInfo, isFetching, error } = userRegister;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onHandleSubmit: SubmitHandler<IFormInputs> = (data: any) => {
        const { username, email, password } = data;
        dispatch(registerUser(username, email, password));

        reset({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    useEffect(() => {
        if (userInfo) {
            history.push('/sign-in');
        }
    }, [userInfo, history]);

    return (
        <>
            {isFetching ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
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
                    {error && (
                        <Typography
                            sx={{
                                color: 'red',
                                marginBottom: '8px'
                            }}
                            variant="caption"
                            component="span"
                        >
                            Username or Email already exists! Please try again
                        </Typography>
                    )}

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <AuthButton page="submit-signUp">Sign Up</AuthButton>
                    </Box>
                </form>
            )}
        </>
    );
};

export default SignUpForm;
