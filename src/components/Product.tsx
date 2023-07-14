import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


interface ProductProps {
	title: string;
	price: number;
    stock: number;
    description?: string;
}

export const Product = ({ title, price, stock, description }: ProductProps) => {
	return (
        <Box>
            <Box sx={{fontSize: 21, fontWeight: 800 }} title={description}>{title}</Box>
            <Box>stock: {stock}</Box>
            <Box>{price}€</Box>
            <Button>Buy</Button>
        </Box>
	);
}

export const Products = () => {
	return (
		<Box>
			<Product title='Redbull' price={5} stock={10} description='Very dangerous drink' />
			<Product title='Fanta' price={3} stock={1} />
		</Box>
	);
}