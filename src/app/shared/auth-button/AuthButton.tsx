import { Button, styled } from '@mui/material';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {
    page: string;
    children: any;
}

const SignInButton = styled(Button)({
    backgroundColor: '#111111',
    color: '#FFFFFF',
    padding: '10px 26px ',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: '#FFFFFF',
        color: '#111111',
        border: '1px solid #111111'
    }
}) as typeof Button;

const SignUpButton = styled(Button)({
    backgroundColor: '#FFFFFF',
    color: '#111111',
    padding: '10px 20px ',
    textTransform: 'capitalize',
    border: '1px solid #111111'
}) as typeof Button;

const SubmitButton = styled(Button)({
    backgroundColor: '#FFFFFF',
    color: '#111111',
    padding: '10px 20px ',
    textTransform: 'capitalize',
    border: '1px solid #111111',
    marginTop: '10px'
}) as typeof Button;

const AuthButton: FC<IProps> = ({ page, children }) => {
    const history = useHistory();
    const handleMovePage = () => {
        switch (page) {
            case 'sign-in':
                history.push('/sign-in');
                break;
            case 'sign-up':
                history.push('/sign-up');
                break;
            case 'submit':
                break;
            default:
                break;
        }
    };

    return (
        <>
            {page === 'sign-in' ? (
                <SignInButton onClick={handleMovePage} className="!text-xl !font-semibold" size="large">
                    {children}
                </SignInButton>
            ) : page === 'sign-up' ? (
                <SignUpButton onClick={handleMovePage} className="!text-xl !font-semibold" size="large">
                    {children}
                </SignUpButton>
            ) : (
                <SubmitButton type="submit" className="!text-xl !font-semibold" size="large">
                    {children}
                </SubmitButton>
            )}
        </>
    );
};

export default AuthButton;
