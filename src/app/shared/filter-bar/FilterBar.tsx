import React, { useEffect } from 'react';
import { Typography, Box, FormLabel, RadioGroup, FormControlLabel, Radio, FormControl, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
//import { PrimaryButton } from '../../shared';
import { useNavigate } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getFilterProduct, getPriceProduct } from '../../redux/actions/productActions';
import { getListCategory } from '../../redux/actions/categoryActions';

import { usePathName, capitalizeFirstLetter } from '../../hooks/usePathName';

const dataCategory = [
    { categoryName: 'Choose option' },
    {
        categoryName: 'All'
    },
    {
        categoryName: 'Best foods'
    },
    {
        categoryName: 'Burgers'
    },
    {
        categoryName: 'Drinks'
    },
    {
        categoryName: 'Pizzas'
    }
];

const FilterBar = () => {
    const dispatch = useDispatch();

    const dataPrice = useSelector<RootState, any>((state) => state.filterProductByPrice);

    const [category, setCategory] = React.useState(dataCategory[0].categoryName);
    const navigate = useNavigate();

    const pathName = usePathName();

    // filter with category
    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        const pathNameFilter = value.toLocaleLowerCase().replace(' ', '-');
        setCategory(value);
        if (pathNameFilter !== 'choose-option') {
            Object.keys(dataPrice).length > 0
                ? dispatch(
                      getFilterProduct({
                          category: category !== 'All' ? category : 'All',
                          type: pathNameFilter,
                          min: dataPrice.price?.min,
                          max: dataPrice.price?.max,
                          rating: null,
                          pageNumber: null,
                          sortOrder: null
                      })
                  )
                : dispatch(
                      getFilterProduct({
                          category: category !== 'All' ? category : 'All',
                          type: pathNameFilter,
                          min: 1,
                          max: 10000000,
                          rating: null,
                          pageNumber: null,
                          sortOrder: null
                      })
                  );

            navigate(`/delivery/${pathNameFilter}`);
        }
    };

    // filter with price
    const handleFilterPrice = (event: any) => {
        switch (event.target.value) {
            case 'under50':
                dispatch(
                    getFilterProduct({
                        category: category !== 'All' ? category : 'All',
                        type: pathName,
                        min: 1,
                        max: 49,
                        rating: null,
                        pageNumber: null,
                        sortOrder: null
                    })
                );
                dispatch(getPriceProduct({ min: 1, max: 49 }));
                break;
            case '50to100':
                dispatch(
                    getFilterProduct({
                        category: category !== 'All' ? category : 'All',
                        type: pathName,
                        min: 50,
                        max: 100,
                        rating: null,
                        pageNumber: null,
                        sortOrder: null
                    })
                );
                dispatch(getPriceProduct({ min: 50, max: 100 }));
                break;
            case 'above100':
                dispatch(
                    getFilterProduct({
                        category: category !== 'All' ? category : 'All',
                        type: pathName,
                        min: 101,
                        max: 10000,
                        rating: null,
                        pageNumber: null,
                        sortOrder: null
                    })
                );
                dispatch(getPriceProduct({ min: 101, max: 10000 }));
                break;
            default:
                dispatch(getListCategory());
        }
    };

    useEffect(() => {
        if (pathName === '') {
            setCategory('Choose option');
        } else {
            const categoryPath = capitalizeFirstLetter(pathName).replace('-', ' ');
            setCategory(categoryPath);
        }
    }, [pathName]);

    return (
        <Box className="flex flex-col gap-4 px-3 bg-filter-bar tablet:hidden">
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    textAlign: 'center',
                    fontWeight: '600'
                }}
            >
                Filters
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'column'
                }}
            >
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

            {/* Price */}

            <Box>
                <FormLabel
                    id="sort-price"
                    sx={{
                        color: '#111',
                        fontWeight: '600',
                        marginBottom: '6px'
                    }}
                >
                    Price
                </FormLabel>
                <RadioGroup aria-labelledby="sort-price" name="radio-price" onChange={handleFilterPrice}>
                    <FormControlLabel
                        sx={{
                            padding: '10px 6px'
                        }}
                        value="under50"
                        control={<Radio color="default" size="small" />}
                        label="Under 50$"
                    />
                    <FormControlLabel
                        sx={{
                            padding: '10px 6px'
                        }}
                        value="50to100"
                        control={<Radio color="default" size="small" />}
                        label="50$ to 100$"
                    />
                    <FormControlLabel
                        sx={{
                            padding: '10px 6px'
                        }}
                        value="above100"
                        control={<Radio color="default" size="small" />}
                        label="Above 100$"
                    />
                </RadioGroup>
            </Box>

            {/* <Box
                sx={{
                    textAlign: 'center'
                }}
            >
                <PrimaryButton
                    radius="30px"
                    border="1px solid #FFF"
                    color="#FFF"
                    bgcolor="#111"
                    width="80%"
                    height="40px"
                    onClick={() => {
                        console.log("done")
                    }}
                >
                    Reset Filter
                </PrimaryButton>
            </Box> */}
        </Box>
    );
};

export default FilterBar;
