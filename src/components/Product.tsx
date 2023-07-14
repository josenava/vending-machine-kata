import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Card, CardActions, CardContent, Grid, Stack, Typography } from '@mui/material';


interface ProductProps {
	title: string;
	price: number;
    stock: number;
    description?: string;
}

export const Product = ({ title, price, stock, description }: ProductProps) => {
	return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }}>
                    {title}
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                    stock: {stock}
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                    {price}€
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Buy</Button>
            </CardActions>
        </Card>
	);
}

export const Products = () => {
	return (
		<Stack direction="row" spacing={2}>
			<Product title='Redbull' price={5} stock={10} description='Very dangerous drink' />
			<Product title='Fanta' price={3} stock={1} />
			<Product title='Random' price={3} stock={1} />
			<Product title='Coffee' price={3} stock={1} />
			<Product title='Water' price={3} stock={1} />
			<Product title='Beer' price={3} stock={1} />
			<Product title='Sparkling water' price={3} stock={1} />
		</Stack>
	);
}