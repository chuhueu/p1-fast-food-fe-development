import React from 'react';
import { Typography, Box, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { PrimaryButton } from '../../shared';

const FilterBar = () => {
    return (
        <Box className="flex flex-col gap-4 px-3 bg-gray-fade tablet:hidden">
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
