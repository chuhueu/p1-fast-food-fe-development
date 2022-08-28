import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { InputField } from '../../../shared';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { PrimaryButton } from '../../../shared/index';

const dataInput = [
    {
        label: 'Name',
        id: 'name',
        type: 'text'
    },
    {
        label: 'Description',
        id: 'desc',
        type: 'text'
    },
    {
        label: 'Price',
        id: 'price',
        type: 'text'
    }
];
interface IFormInputs {
    name: string;
    desc: string;
    price: number;
}

const schema = yup.object({
    name: yup.string().required('This field is required'),
    desc: yup.string().required('This field is required'),
    price: yup.number().required('This field is required')
});

const AddNewProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onHandleSubmit: SubmitHandler<IFormInputs> = (data: any) => {};
    return (
        <>
            <Container>
                <Box
                    sx={{
                        width: '50%'
                    }}
                >
                    <Typography variant="h6" component="h2">
                        Add New Product
                    </Typography>

                    <form onSubmit={handleSubmit(onHandleSubmit)} className="flex flex-col">
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

                        <PrimaryButton
                            border="1px solid #111"
                            bgcolor="#fff"
                            color="fff"
                            height="50px"
                            onClick={() => console.log('done')}
                            radius="16px"
                            width="30%"
                        >
                            Save
                        </PrimaryButton>
                    </form>
                </Box>
            </Container>
        </>
    );
};

export default AddNewProduct;
