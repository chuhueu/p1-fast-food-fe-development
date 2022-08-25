import { useState } from 'react';

import { Typography, ListItemButton, Box, List } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function ListItem() {
    const history = useHistory();

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event: any, index: number) => {
        const element = event.target;
        const text = element.textContent.toLowerCase();
        setSelectedIndex(index);

        history.push(`/manage/${text}`);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360 }}>
            <List
                component="li"
                aria-label="main mailbox folders"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }}
            >
                <ListItemButton
                    sx={{
                        borderRadius: '8px',
                        '&.Mui-selected': {
                            backgroundColor: 'rgba(145, 158, 171, 0.08)'
                        }
                    }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{
                            fontWeight: '400',
                            color: 'rgb(99, 115, 129)',
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        Dashboard
                    </Typography>
                </ListItemButton>
                <ListItemButton
                    sx={{
                        borderRadius: '8px',
                        '&.Mui-selected': {
                            backgroundColor: 'rgba(145, 158, 171, 0.08)'
                        }
                    }}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{
                            fontWeight: '400',
                            color: 'rgb(99, 115, 129)',
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        Users
                    </Typography>
                </ListItemButton>
                <ListItemButton
                    sx={{
                        borderRadius: '8px',
                        '&.Mui-selected': {
                            backgroundColor: 'rgba(145, 158, 171, 0.08)'
                        }
                    }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{
                            fontWeight: '400',
                            color: 'rgb(99, 115, 129)',
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        Products
                    </Typography>
                </ListItemButton>

                <ListItemButton
                    sx={{
                        borderRadius: '8px',
                        '&.Mui-selected': {
                            backgroundColor: 'rgba(145, 158, 171, 0.08)'
                        }
                    }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{
                            fontWeight: '400',
                            color: 'rgb(99, 115, 129)',
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        Orders
                    </Typography>
                </ListItemButton>
            </List>
        </Box>
    );
}
