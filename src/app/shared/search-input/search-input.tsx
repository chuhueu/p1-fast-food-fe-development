import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material';
import { InputBase } from '@mui/material';
import { FC } from 'react';

const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#ffffff'
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
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search', style: { width: '80%' } }}
      />
    </Search>
  );
};
export default SearchInput;
