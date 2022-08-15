import React, { FC } from 'react';
import { TextField, Typography, styled } from '@mui/material';

interface IProp {
    id: string;
    label: string;
    name: string;
    register: any;
    errors: any;
    type: string;
}

const InputTextField = styled(TextField)`
    & label.Mui-focused {
        color: rgba(0, 0, 0, 0.87);
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: rgba(0, 0, 0, 0.87);
            border-width: 1px;
        }
    }
`;

const InputField: FC<IProp> = ({ id, label, type, name, register, errors }) => {
    return (
        <>
            <InputTextField
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
