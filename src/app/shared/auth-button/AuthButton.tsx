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
  padding: '10px 20px ',
  textTransform: 'capitalize'
}) as typeof Button;

const SignUpButton = styled(Button)({
  backgroundColor: '#FFFFFF',
  color: '#111111',
  padding: '10px 20px ',
  textTransform: 'capitalize',
  border: '1px solid #111111'
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
      default:
        break;
    }
  };

  return (
    <>
      {page === 'sign-in' ? (
        <SignInButton onClick={handleMovePage} className='!text-xl !font-semibold' size='large'>
          {children}
        </SignInButton>
      ) : (
        <SignUpButton onClick={handleMovePage} className='!text-xl !font-semibold' size='large'>
          {children}
        </SignUpButton>
      )}
    </>
  );
};

export default AuthButton;
