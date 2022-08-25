import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material';
import { InputBase } from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilterProductByname } from '../../redux/actions/productActions';

const Search = styled('div')(() => ({
    position: 'relative',
    background: 'rgba(145, 158, 171, 0.08)',
    borderRadius: '16px',
    '&:hover': {
        backgroundColor: 'rgba(145, 158, 171, 0.08)'
    },
    marginLeft: 0,
    width: '100%'
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: 'auto'
    // }
}));

const SearchIconWrapper = styled('div')(() => ({
    padding: '0 16px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(() => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: '16px 0 16px 16px',
        // vertical padding + font size from searchIcon
        paddingLeft: `48px`,
        width: '100%'
    }
}));

interface IProps {
    placeholder: string;
}

const SearchInput: FC<IProps> = ({ placeholder }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const handleTextChange = (e: any) => {
        setText(e.target.value);
        dispatch(getFilterProductByname(e.target.value));
    };

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'search', style: { width: '80%' } }}
                onChange={handleTextChange}
                value={text}
            />
        </Search>
    );
};
export default SearchInput;
