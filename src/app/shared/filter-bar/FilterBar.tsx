import React from 'react';
import { Typography, Box, FormLabel, RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { PrimaryButton } from '../../shared';

const dataCategory = [
    {
        categoryName: 'Category'
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
    const [category, setCategory] = React.useState(dataCategory[0].categoryName);

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

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

            {/* Type */}

            <Box
                sx={{
                    width: '200px'
                }}
            >
                <FormLabel
                    id="sort-type"
                    sx={{
                        color: '#111',
                        fontWeight: '600',
                        marginBottom: '6px'
                    }}
                >
                    Sort type
                </FormLabel>
                <RadioGroup aria-labelledby="sort-type" defaultValue="foryou" name="radio-type">
                    <FormControlLabel
                        sx={{
                            padding: '10px 6px'
                        }}
                        value="foryou"
                        control={<Radio color="default" size="small" />}
                        label="For you"
                    />
                    <FormControlLabel
                        sx={{
                            padding: '10px 6px'
                        }}
                        value="rating"
                        control={<Radio color="default" size="small" />}
                        label="Rating"
                    />
                    <FormControlLabel
                        sx={{
                            padding: '10px 6px'
                        }}
                        value="catagory"
                        control={<Radio color="default" size="small" />}
                        label="Category"
                    />
                </RadioGroup>
            </Box>

            {/* Category */}

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
                    <InputLabel id="delivery-category">Category</InputLabel>
                    <Select labelId="delivery-category" id="category" label="Category" value={category} onChange={handleChange} autoWidth>
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
                <RadioGroup aria-labelledby="sort-price" defaultValue="under100" name="radio-price">
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

            <Box
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
                        console.log('done');
                    }}
                >
                    Reset Filter
                </PrimaryButton>
            </Box>
        </Box>
    );
};

export default FilterBar;
