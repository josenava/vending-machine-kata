import { Button, Grid } from "@mui/material";
import { api } from "../api";
import { useDispatch } from "react-redux";
import { setBalance } from "../slices/UserSlice";

interface CreditChoiceProps {
  quantity: number;
}

export const CreditChoice = ({ quantity }: CreditChoiceProps) => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    const user = await api.addCredit(quantity);
    dispatch(setBalance(user.balance));
  };
  return (
    <Button variant="outlined" onClick={handleClick}>
      {quantity}€
    </Button>
  );
};

export const CreditSelector = () => {
  const quantities = [0.1, 0.2, 0.5, 1.0, 2.0, 5.0];
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
      {quantities.map((quantity) => {
        return (
          <Grid item xs={2} key={quantity}>
            <CreditChoice quantity={quantity} />
          </Grid>
        );
      })}
    </Grid>
  );
};
