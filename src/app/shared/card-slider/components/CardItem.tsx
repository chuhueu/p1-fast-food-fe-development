import { Card, CardContent, Typography } from '@mui/material';

const CardItem = () => {
    return (
        <Card
            sx={{
                display: 'flex'
            }}
        >
            <img src="https://picsum.photos/seed/picsum/123/300" alt="" className="w-20" />
            <CardContent>
                <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
                    Corona Extra Beer
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardItem;
