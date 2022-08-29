import { Avatar, Box, FormControl, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/userActions';
import { userState } from '../../../redux/reducers/userReducer';
import { RootState } from '../../../redux/store';
import { InputField, PrimaryButton } from '../../../shared';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

interface IFormInputs {
    address: string;
    phone: string;
}

const schema = yup.object({
    address: yup.string().required('This field is required'),
    phone: yup
        .string()
        .required('A phone number is required')
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Phone number is not valid')
});

const CheckoutInformation = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector<RootState, userState>((state) => state.userLogin);

    const { userInfo } = userData;

    const onHandleSubmit: SubmitHandler<IFormInputs> = () => {
        reset({
            address: '',
            phone: ''
        });
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <Box
                sx={{
                    flex: '1'
                }}
            >
                <Box
                    sx={{
                        marginBottom: '50px'
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h4"
                        sx={{
                            fontWeight: '600',
                            marginBottom: '16px'
                        }}
                    >
                        Contact information
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar src={userInfo?.avatar} />

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: '10px',
                                gap: '6px'
                            }}
                        >
                            <Typography
                                variant="body2"
                                component="span"
                                sx={{
                                    fontWeight: '600'
                                }}
                            >
                                {userInfo?.username}
                            </Typography>

                            <Typography
                                variant="body2"
                                component="span"
                                sx={{
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                                className="text-yellow-light"
                                onClick={() => handleLogout()}
                            >
                                Log out
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* FORM */}
                <Box>
                    <Typography
                        variant="h5"
                        component="h4"
                        sx={{
                            fontWeight: '600',
                            marginBottom: '16px'
                        }}
                    >
                        Shipping address
                    </Typography>

                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <InputField
                                register={register}
                                id="address"
                                name="address"
                                label="Address"
                                errors={errors}
                                key="address"
                                type="text"
                            />
                            <InputField register={register} id="phone" name="phone" label="Phone" errors={errors} key="phone" type="text" />
                        </Box>

                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: '20px',
                                paddingLeft: '12px',
                                paddingRight: '12px'
                            }}
                        >
                            <Typography
                                component="span"
                                variant="caption"
                                sx={{
                                    cursor: 'pointer'
                                }}
                                onClick={() => navigate('/delivery')}
                                className="text-yellow-light"
                            >
                                <ArrowBackIcon
                                    sx={{
                                        fontSize: '20px'
                                    }}
                                />
                                {''}Back to Delivery
                            </Typography>

                            <PrimaryButton
                                border={'none'}
                                bgcolor={'#FFCE00'}
                                height={'40px'}
                                onClick={() => console.log('submit')}
                                radius={'12px'}
                                width={'30%'}
                                color={'#FFF'}
                            >
                                Checkout
                            </PrimaryButton>
                        </Box>
                    </form>
                </Box>
            </Box>
        </>
    );
};

export default CheckoutInformation;
