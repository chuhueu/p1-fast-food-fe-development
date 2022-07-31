import { Button, styled } from '@mui/material';
import { FC } from 'react';
//import { useHistory } from 'react-router-dom';

interface IProps {
    //page: string;
    children: any;
}

const Primary = styled(Button)({
    backgroundColor: 'inherit',
    color: '#FFFFFF',
    padding: '10px 20px ',
    textTransform: 'capitalize',
    border: '1px solid #FFFFFF',
    maxWidth: '180px'
}) as typeof Button;

const PrimaryButton: FC<IProps> = ({ children }) => {
    return (
        <>
            <Primary className="!text-xl !font-semibold" size="large">
                {children}
            </Primary>
        </>
    );
};

export default PrimaryButton;
