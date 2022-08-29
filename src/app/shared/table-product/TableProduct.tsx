import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { IconButton, Box, CircularProgress } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
//redux
import { RootState } from '../../redux/store';
import { filterProductState, productState } from '../../redux/reducers/productReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getListProduct } from '../../redux/actions/productActions';

interface rowData {
    image: string;
    name: string;
    price: number;
    category: string;
}

export default function DenseTable() {
    const dispatch = useDispatch();
    const productData = useSelector<RootState, productState>((state) => state.listProduct);
    const filterProductData = useSelector<RootState, filterProductState>((state) => state.filterProduct);
    const { filterProductInfo, isFetching } = filterProductData;

    React.useEffect(() => {
        if (!filterProductInfo) {
            dispatch(getListProduct());
        }
    }, [dispatch]);

    const { productInfo } = productData;

    console.log(filterProductInfo);

    return (
        <>
            {isFetching ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '250px'
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Handle</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <>
                                {filterProductInfo ? (
                                    <>
                                        {filterProductInfo?.products?.map((product) => (
                                            <TableRow key={product._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row">
                                                    <img src={product.image} alt={product.image} className="max-w-[100px] max-h-[100px]" />
                                                </TableCell>
                                                <TableCell align="right">{product.name}</TableCell>
                                                <TableCell align="right">{product.price}</TableCell>
                                                <TableCell align="right">{product.desc}</TableCell>
                                                <TableCell align="right">
                                                    <IconButton aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>

                                                    <IconButton aria-label="delete">
                                                        <EditIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        {productInfo?.map((product) => (
                                            <TableRow key={product._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row">
                                                    <img src={product.image} alt={product.image} className="max-w-[100px] max-h-[100px]" />
                                                </TableCell>
                                                <TableCell align="right">{product.name}</TableCell>
                                                <TableCell align="right">{product.price}</TableCell>
                                                <TableCell align="right">{product.desc}</TableCell>
                                                <TableCell align="right">
                                                    <IconButton aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>

                                                    <IconButton aria-label="delete">
                                                        <EditIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </>
                                )}
                            </>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    );
}
