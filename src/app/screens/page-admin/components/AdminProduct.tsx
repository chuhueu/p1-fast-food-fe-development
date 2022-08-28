import React from 'react';
import { Container, Box, IconButton, Typography, FormLabel, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { EnhancedTable } from '../../../shared/index';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

import dataCategory from '../../../utils/staticData';
import { useDispatch } from 'react-redux';
import { getFilterProduct } from '../../../redux/actions/productActions';

const AdminProduct = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = React.useState(dataCategory[0].categoryName);
    const navigate = useNavigate();

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        setCategory(value);
        const filterName = value.toLocaleLowerCase().replace(' ', '-');
        if (filterName !== 'choose-option') {
            dispatch(
                getFilterProduct({
                    category: category !== 'All' ? category : 'All',
                    type: filterName,
                    min: 1,
                    max: 10000000,
                    rating: null,
                    pageNumber: null,
                    sortOrder: null
                })
            );
        }
    };

    return (
        <>
            <Container>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box sx={{}}>
                        <FormLabel
                            id="sort-type"
                            sx={{
                                color: '#111',
                                fontWeight: '600'
                            }}
                        >
                            Category
                        </FormLabel>
                        <FormControl
                            sx={{
                                width: '100%',
                                '&:hover': {
                                    '&& fieldset': {
                                        borderColor: '#111'
                                    }
                                }
                            }}
                            color="primary"
                        >
                            <Select labelId="delivery-category" id="category" value={category} onChange={handleChange} autoWidth>
                                {dataCategory.map(({ categoryName }) => (
                                    <MenuItem value={categoryName} key={categoryName}>
                                        {categoryName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '20px',
                            gap: '8px'
                        }}
                    >
                        <Typography variant="body2" component="span">
                            Add New Product
                        </Typography>
                        <IconButton
                            onClick={() => {
                                navigate('/manage/products/addProduct');
                            }}
                        >
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Box>
                <EnhancedTable />
            </Container>
        </>
    );
};

export default AdminProduct;
