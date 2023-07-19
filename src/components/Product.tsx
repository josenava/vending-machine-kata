import Button from "@mui/material/Button";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IProduct } from "../types";
import { api } from "../api";
import { useState } from "react";
import { setBalance } from "../slices/UserSlice";

export const Product = ({
  id,
  name,
  price,
  quantity,
  description,
  slot_id,
}: IProduct) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [quantityUpdated, setQuantityUpdated] = useState<number>(quantity);
  const handleBuy = async () => {
    const { data: updatedUser } = await api.orderProduct(user.id, slot_id);
    dispatch(setBalance(updatedUser.balance));
    setQuantityUpdated(quantityUpdated - 1);
  };

  return (
    <Grid item xs={2} key={id}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }}>{name}</Typography>
          {description && (
            <Typography sx={{ fontSize: 10 }}>
              description: {description}
            </Typography>
          )}
          <Typography sx={{ fontSize: 14 }}>
            stock: {quantityUpdated}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>{price}€</Typography>
        </CardContent>
        <CardActions>
          <Button
            disabled={Number(price) > user.balance || quantityUpdated === 0}
            onClick={handleBuy}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export const Products = ({ products }: { products: IProduct[][] }) => {
  return (
    <>
      {products.map((productsRow: IProduct[], index) => (
        <Grid container key={index}>
          {productsRow.map((product: IProduct) => (
            <Product
              id={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              description={product.description}
              slot_id={product.slot_id}
              key={product.id}
            />
          ))}
        </Grid>
      ))}
    </>
  );
};
