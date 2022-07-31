import React, { FC } from 'react';
import { TextField, Typography } from '@mui/material';

interface IProp {
    id: string;
    label: string;
    name: string;
    register: any;
    errors: any;
    type: string;
}

const InputField: FC<IProp> = ({ id, label, type, name, register, errors }) => {
    return (
        <>
            <TextField
                id={id}
                label={label}
                type={type}
                name={name}
                {...register(name)}
                sx={{
                    marginBottom: '8px'
                }}
            />
            <Typography
                sx={{
                    color: 'red',
                    marginBottom: '8px'
                }}
                variant="caption"
                component="span"
            >
                {errors[name]?.message}
            </Typography>
        </>
    );
};

export default InputField;
