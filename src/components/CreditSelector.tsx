import { Button, Grid } from "@mui/material";
import { api } from "../api";
import { useDispatch } from "react-redux";
import { setBalance } from "../slices/UserSlice";
import { User } from "../types";

interface CreditChoiceProps {
  quantity: number;
  user: User;
}

export const CreditChoice = ({ quantity, user }: CreditChoiceProps) => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    const { data: updatedUser } = await api.addCredit(user.id, quantity);
    dispatch(setBalance(updatedUser.balance));
  };
  return (
    <Button variant="outlined" onClick={handleClick}>
      {quantity}€
    </Button>
  );
};

export const CreditSelector = ({ user }: { user: User }) => {
  const quantities = [0.1, 0.2, 0.5, 1.0, 2.0, 5.0];
  return (
    <Grid container spacing={2}>
      {quantities.map((quantity) => {
        return (
          <Grid item xs={6} key={quantity}>
            <CreditChoice quantity={quantity} user={user} />
          </Grid>
        );
      })}
    </Grid>
  );
};
